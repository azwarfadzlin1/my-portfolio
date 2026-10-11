import type { ForecastDay } from "@/lib/weather";

export async function GET() {
  try {
    const response = await fetch("https://api.data.gov.my/weather/forecast?contains=Tn070@location__location_id&limit=14", {
      next: { revalidate: 3600 }, signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) throw new Error("Weather provider unavailable");
    const rows: unknown = await response.json();
    if (!Array.isArray(rows)) throw new Error("Invalid weather response");
    const parts = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Kuala_Lumpur", year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(new Date());
    const part = (key: string) => parts.find(item => item.type === key)?.value;
    const today = `${part("year")}-${part("month")}-${part("day")}`;
    const days: ForecastDay[] = rows.filter(row => row?.location?.location_id === "Tn070" && typeof row.date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(row.date) && row.date >= today && Number.isFinite(row.min_temp) && Number.isFinite(row.max_temp) && typeof row.summary_forecast === "string")
      .sort((a, b) => a.date.localeCompare(b.date))
      .filter((row, index, all) => index === 0 || row.date !== all[index - 1].date)
      .slice(0, 7).map(row => ({ date: row.date, low: row.min_temp, high: row.max_temp, summary: row.summary_forecast }));
    if (!days.length) throw new Error("No current forecast");
    return Response.json({ location: "Shah Alam", days }, { headers: { "Cache-Control": "public, max-age=300" } });
  } catch {
    return Response.json({ error: "Forecast temporarily unavailable" }, { status: 503, headers: { "Cache-Control": "no-store" } });
  }
}

export type ForecastDay = { date: string; low: number; high: number; summary: string };
export type WeatherForecast = { location: string; days: ForecastDay[] };

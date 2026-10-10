"use client";

import { useState, type FormEvent } from "react";
import { Mail } from "lucide-react";

export default function ContactForm() {
  const [prepared, setPrepared] = useState(false);

  function openEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!message) {
      const field = event.currentTarget.elements.namedItem("message") as HTMLTextAreaElement;
      field.setCustomValidity("Please enter a message, not just spaces.");
      field.reportValidity();
      return;
    }
    if (!name || !email) return;
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\r\n\r\nFrom: ${name}\r\nEmail: ${email}`);
    window.location.href = `mailto:azwarfadzlin1@gmail.com?subject=${subject}&body=${body}`;
    setPrepared(true);
  }

  const fieldClass = "w-full rounded-xl border border-white/15 bg-[#1A1A1C] px-4 py-3 text-white placeholder-zinc-400 focus:border-blue-400";

  return (
    <form onSubmit={openEmail} className="space-y-6" aria-describedby="contact-help">
      <p id="contact-help" className="text-sm leading-relaxed text-zinc-300">Fill in your message to open a draft in your email app. You can review it before sending.</p>
      <div>
        <label htmlFor="contact-name" className="mb-2 block text-sm font-bold text-blue-400">Name</label>
        <input id="contact-name" name="name" type="text" autoComplete="name" required pattern=".*\S.*" maxLength={100} placeholder="Enter your full name" className={fieldClass} />
      </div>
      <div>
        <label htmlFor="contact-email" className="mb-2 block text-sm font-bold text-blue-400">Email Address</label>
        <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="name@example.com" className={fieldClass} />
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-2 block text-sm font-bold text-blue-400">Message</label>
        <textarea id="contact-message" name="message" rows={5} required maxLength={2000} onInput={(event) => event.currentTarget.setCustomValidity("")} placeholder="How can I help you?" className={`${fieldClass} resize-y`} />
      </div>
      <button type="submit" className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-blue-100 px-6 py-3 font-bold text-blue-900 hover:bg-white">
        Open email draft <Mail className="h-4 w-4" aria-hidden="true" />
      </button>
      <p role="status" className="text-sm text-zinc-300">
        {prepared ? "Your email app was requested. If it did not open, email azwarfadzlin1@gmail.com directly. Your message is still here to copy." : "You can also email azwarfadzlin1@gmail.com directly."}
      </p>
    </form>
  );
}

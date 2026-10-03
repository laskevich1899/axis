"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "loading" | "success" | "error";
type ContactPreference = "email" | "phone" | "either";

/** Web3Forms access key — public alias for your inbox; email itself is not in the page. */
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() ?? "";

const PREFERENCE_LABELS: Record<ContactPreference, string> = {
  email: "Email",
  phone: "Phone",
  either: "Either email or phone",
};

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [preference, setPreference] = useState<ContactPreference>("email");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot — bots fill this, humans never see it
    if (String(data.get("company_website") ?? "").trim()) {
      setStatus("success");
      setMessage("Thank you. We will get back to you shortly.");
      form.reset();
      setPreference("email");
      return;
    }

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const request = String(data.get("request") ?? "").trim();
    const preferred = String(data.get("preferred_contact") ?? "email").trim() as ContactPreference;

    if (!name || !email || !request) {
      setStatus("error");
      setMessage("Name, email and project brief are required.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage("Enter a valid email so we can reply.");
      return;
    }
    if ((preferred === "phone" || preferred === "either") && !phone) {
      setStatus("error");
      setMessage(
        preferred === "phone"
          ? "Add a phone number so we can call you."
          : "Add a phone number, or choose email as the preferred contact method.",
      );
      return;
    }
    if (!ACCESS_KEY) {
      setStatus("error");
      setMessage("Request inbox is not configured yet. Please try again later.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Axis BIM request from ${name}`,
          from_name: "Axis BIM Solutions website",
          name,
          email,
          phone: phone || "Not provided",
          company: company || "Not provided",
          preferred_contact: PREFERENCE_LABELS[preferred] ?? preferred,
          message: request,
          replyto: email,
          botcheck: false,
        }),
      });

      const result = (await response.json()) as { success?: boolean; message?: string };
      if (!response.ok || !result.success) {
        throw new Error(result.message || "Send failed");
      }

      form.reset();
      setPreference("email");
      setStatus("success");
      setMessage("Thank you. We will get back to you shortly.");
    } catch {
      setStatus("error");
      setMessage("Could not send the request. Please try again in a moment.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 border border-border bg-background p-5"
      noValidate
    >
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden
      />

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-xs font-medium text-steel">
          Name *
          <Input name="name" autoComplete="name" placeholder="Jordan Lee" className="h-10 bg-panel" disabled={status === "loading"} />
        </label>
        <label className="flex flex-col gap-1.5 text-xs font-medium text-steel">
          Email *
          <Input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="jordan@firm.com"
            className="h-10 bg-panel"
            disabled={status === "loading"}
          />
        </label>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-xs font-medium text-steel">
          Phone {(preference === "phone" || preference === "either") && "*"}
          {preference === "email" ? (
            <span className="font-normal text-steel/70"> (optional)</span>
          ) : null}
          <Input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+48 500 000 000"
            className="h-10 bg-panel"
            disabled={status === "loading"}
          />
        </label>
        <label className="flex flex-col gap-1.5 text-xs font-medium text-steel">
          Company <span className="font-normal text-steel/70">(optional)</span>
          <Input
            name="company"
            autoComplete="organization"
            placeholder="Acme Design Group"
            className="h-10 bg-panel"
            disabled={status === "loading"}
          />
        </label>
      </div>

      <fieldset className="space-y-2" disabled={status === "loading"}>
        <legend className="text-xs font-medium text-steel">Preferred contact method *</legend>
        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-4">
          {(
            [
              ["email", "Email"],
              ["phone", "Phone"],
              ["either", "Either"],
            ] as const
          ).map(([value, label]) => (
            <label key={value} className="inline-flex items-center gap-2 text-sm text-[#3c4658]">
              <input
                type="radio"
                name="preferred_contact"
                value={value}
                checked={preference === value}
                onChange={() => setPreference(value)}
                className="size-4 accent-[#4187d3]"
              />
              {label}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="flex flex-col gap-1.5 text-xs font-medium text-steel">
        Project brief *
        <Textarea
          name="request"
          rows={3}
          placeholder="Building type, stage (SD/DD/CD), tools and what you need from us…"
          className="min-h-24 bg-panel py-2"
          disabled={status === "loading"}
        />
      </label>
      <div className="flex flex-col gap-2 pt-1">
        <Button type="submit" size="lg" className="h-10 w-fit rounded px-5" disabled={status === "loading"}>
          {status === "loading" ? "Sending…" : "Submit request"}
        </Button>
        {status === "success" && (
          <p className="border border-signal/30 bg-accent px-3 py-2 text-sm text-signal-deep" role="status">
            {message}
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-destructive" role="alert">
            {message}
          </p>
        )}
      </div>
    </form>
  );
}

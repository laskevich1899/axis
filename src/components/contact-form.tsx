"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { Locale, Messages } from "@/lib/i18n";

type Status = "idle" | "loading" | "success" | "error";
type ContactPreference = "email" | "phone" | "either";

/** Web3Forms access key — public alias for your inbox; email itself is not in the page. */
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() ?? "";

export function ContactForm({ copy, locale }: { copy: Messages["form"]; locale: Locale }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [preference, setPreference] = useState<ContactPreference>("email");

  const preferenceLabels: Record<ContactPreference, string> = {
    email: copy.emailOption,
    phone: copy.phoneOption,
    either: copy.eitherOption,
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (String(data.get("company_website") ?? "").trim()) {
      setStatus("success");
      setMessage(copy.success);
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
      setMessage(copy.required);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage(copy.invalidEmail);
      return;
    }
    if ((preferred === "phone" || preferred === "either") && !phone) {
      setStatus("error");
      setMessage(preferred === "phone" ? copy.phoneRequired : copy.eitherPhone);
      return;
    }
    if (!ACCESS_KEY) {
      setStatus("error");
      setMessage(copy.notConfigured);
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
          subject: `Axis BIM request (${locale}) from ${name}`,
          from_name: "Axis BIM Solutions website",
          name,
          email,
          phone: phone || copy.notProvided,
          company: company || copy.notProvided,
          preferred_contact: preferenceLabels[preferred] ?? preferred,
          language: locale,
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
      setMessage(copy.success);
    } catch {
      setStatus("error");
      setMessage(copy.sendFailed);
    }
  }

  const phoneRequired = preference === "phone" || preference === "either";

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex flex-col gap-3 border border-border bg-background p-4 sm:p-5"
      noValidate
    >
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="pointer-events-none absolute h-px w-px overflow-hidden opacity-0"
        aria-hidden
      />

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-xs font-medium text-steel">
          {copy.name} *
          <Input
            name="name"
            autoComplete="name"
            placeholder={copy.namePlaceholder}
            className="h-10 bg-panel"
            disabled={status === "loading"}
          />
        </label>
        <label className="flex flex-col gap-1.5 text-xs font-medium text-steel">
          {copy.email} *
          <Input
            name="email"
            type="email"
            autoComplete="email"
            placeholder={copy.emailPlaceholder}
            className="h-10 bg-panel"
            disabled={status === "loading"}
          />
        </label>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-xs font-medium text-steel">
          {copy.phone} {phoneRequired ? "*" : null}
          {!phoneRequired ? <span className="font-normal text-steel/70"> {copy.optional}</span> : null}
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
          {copy.company} <span className="font-normal text-steel/70">{copy.optional}</span>
          <Input
            name="company"
            autoComplete="organization"
            placeholder={copy.companyPlaceholder}
            className="h-10 bg-panel"
            disabled={status === "loading"}
          />
        </label>
      </div>

      <fieldset className="space-y-2" disabled={status === "loading"}>
        <legend className="text-xs font-medium text-steel">{copy.preferred} *</legend>
        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-4">
          {(
            [
              ["email", copy.emailOption],
              ["phone", copy.phoneOption],
              ["either", copy.eitherOption],
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
        {copy.brief} *
        <Textarea
          name="request"
          rows={3}
          placeholder={copy.briefPlaceholder}
          className="min-h-24 bg-panel py-2"
          disabled={status === "loading"}
        />
      </label>
      <div className="flex flex-col gap-2 pt-1">
        <Button type="submit" size="lg" className="h-10 w-fit rounded px-5" disabled={status === "loading"}>
          {status === "loading" ? copy.sending : copy.submit}
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

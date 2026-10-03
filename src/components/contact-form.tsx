"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "loading" | "success" | "error";

/** Private inbox — baked at build time from env; never rendered as visible text on the page. */
const CONTACT_INBOX = process.env.NEXT_PUBLIC_CONTACT_INBOX?.trim() ?? "";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot — bots fill this, humans never see it
    if (String(data.get("company_website") ?? "").trim()) {
      setStatus("success");
      setMessage("Thank you. We received your request and will reply by email.");
      form.reset();
      return;
    }

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const request = String(data.get("request") ?? "").trim();

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
    if (!CONTACT_INBOX) {
      setStatus("error");
      setMessage("Request inbox is not configured yet. Please try again later.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_INBOX)}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone: phone || "Not provided",
          company: company || "Not provided",
          message: request,
          _subject: `Axis BIM request from ${name}`,
          _template: "table",
          _captcha: "false",
          _replyto: email,
        }),
      });

      const result = (await response.json()) as { success?: boolean | string; message?: string };
      if (!response.ok || result.success === false || result.success === "false") {
        throw new Error(result.message || "Send failed");
      }

      form.reset();
      setStatus("success");
      setMessage("Thank you. We received your request and will reply by email.");
    } catch {
      setStatus("error");
      setMessage(
        "Could not send the request. If this is the first time, check the inbox for an activation email from FormSubmit, confirm it, then try again.",
      );
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
          Phone <span className="font-normal text-steel/70">(optional)</span>
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
      <p className="text-xs leading-relaxed text-steel/80">
        We only use these details to reply to your request. Nothing is published on the site.
      </p>
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

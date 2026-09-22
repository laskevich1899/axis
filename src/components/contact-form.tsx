"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const request = String(data.get("request") ?? "").trim();

    if (!name || !email || !request) {
      setStatus("error");
      setMessage("Please enter your name, email, and a short project description.");
      return;
    }

    setStatus("loading");
    setMessage("");

    await new Promise((resolve) => setTimeout(resolve, 700));

    form.reset();
    setStatus("success");
    setMessage(
      `Thanks, ${name}${company ? ` (${company})` : ""}. We'll reach out at ${email} shortly.`,
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-xl border border-border bg-panel p-6 md:p-8"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-steel">
          Name *
          <Input
            name="name"
            autoComplete="name"
            placeholder="Jordan Lee"
            className="h-11 bg-background"
            disabled={status === "loading"}
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-steel">
          Email *
          <Input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="jordan@firm.com"
            className="h-11 bg-background"
            disabled={status === "loading"}
          />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm text-steel">
        Company
        <Input
          name="company"
          autoComplete="organization"
          placeholder="Acme Design Group"
          className="h-11 bg-background"
          disabled={status === "loading"}
        />
      </label>
      <label className="flex flex-col gap-2 text-sm text-steel">
        Project brief *
        <Textarea
          name="request"
          rows={4}
          placeholder="We need ongoing BIM for a mid-rise multifamily project and coordinated CDs for permit..."
          className="min-h-28 bg-background py-2.5"
          disabled={status === "loading"}
        />
      </label>

      <div className="flex flex-col gap-3">
        <Button type="submit" size="lg" className="h-11 w-fit rounded-md px-6 text-base" disabled={status === "loading"}>
          {status === "loading" ? "Sending…" : "Send message"}
        </Button>
        {status === "success" && (
          <p
            className="rounded-md border border-signal/30 bg-accent px-3 py-2 text-sm text-signal-deep"
            role="status"
            aria-live="polite"
          >
            {message}
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-destructive" role="alert" aria-live="assertive">
            {message}
          </p>
        )}
      </div>
    </form>
  );
}

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
      setMessage("Name, email, and project brief are required.");
      return;
    }

    setStatus("loading");
    setMessage("");
    await new Promise((resolve) => setTimeout(resolve, 700));
    form.reset();
    setStatus("success");
    setMessage(`Received, ${name}${company ? ` / ${company}` : ""}. We will reply to ${email}.`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 border border-border bg-background p-5"
      noValidate
    >
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
      <label className="flex flex-col gap-1.5 text-xs font-medium text-steel">
        Company
        <Input
          name="company"
          autoComplete="organization"
          placeholder="Acme Design Group"
          className="h-10 bg-panel"
          disabled={status === "loading"}
        />
      </label>
      <label className="flex flex-col gap-1.5 text-xs font-medium text-steel">
        Project brief *
        <Textarea
          name="request"
          rows={3}
          placeholder="Typology, stage (SD/DD/CD), tools, and needed scope (model / drawings / BEP)…"
          className="min-h-24 bg-panel py-2"
          disabled={status === "loading"}
        />
      </label>
      <div className="flex flex-col gap-2 pt-1">
        <Button type="submit" size="lg" className="h-10 w-fit rounded px-5" disabled={status === "loading"}>
          {status === "loading" ? "Sending…" : "Submit brief"}
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

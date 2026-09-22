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

    // Local mock — ready to swap for a real API route later
    await new Promise((resolve) => setTimeout(resolve, 700));

    form.reset();
    setStatus("success");
    setMessage(
      `Thanks, ${name}${company ? ` (${company})` : ""}. We'll reach out at ${email} shortly.`,
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-steel">
          Name *
          <Input
            name="name"
            autoComplete="name"
            placeholder="Jordan Lee"
            className="h-11"
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
            className="h-11"
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
          className="h-11"
          disabled={status === "loading"}
        />
      </label>
      <label className="flex flex-col gap-2 text-sm text-steel">
        Project brief *
        <Textarea
          name="request"
          rows={4}
          placeholder="We need ongoing BIM for a mid-rise multifamily project and coordinated CDs for permit..."
          className="min-h-28 py-2.5"
          disabled={status === "loading"}
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" className="h-11 px-6 text-base" disabled={status === "loading"}>
          {status === "loading" ? "Sending…" : "Send message"}
        </Button>
        {status === "success" && (
          <p className="text-sm text-teal-deep" role="status">
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

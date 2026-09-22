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
      setMessage("Заполните имя, email и кратко опишите задачу.");
      return;
    }

    setStatus("loading");
    setMessage("");

    // Local mock — ready to swap for a real API route later
    await new Promise((resolve) => setTimeout(resolve, 700));

    form.reset();
    setStatus("success");
    setMessage(
      `Спасибо, ${name}${company ? ` (${company})` : ""}. Мы свяжемся с вами по ${email} в ближайшее время.`,
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-steel">
          Имя *
          <Input
            name="name"
            autoComplete="name"
            placeholder="Анна Иванова"
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
            placeholder="anna@company.ru"
            className="h-11"
            disabled={status === "loading"}
          />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm text-steel">
        Компания
        <Input
          name="company"
          autoComplete="organization"
          placeholder="ООО «Проект»"
          className="h-11"
          disabled={status === "loading"}
        />
      </label>
      <label className="flex flex-col gap-2 text-sm text-steel">
        Задача *
        <Textarea
          name="request"
          rows={4}
          placeholder="Нужно вести модель жилого комплекса и выпустить рабочую документацию..."
          className="min-h-28 py-2.5"
          disabled={status === "loading"}
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" className="h-11 px-6 text-base" disabled={status === "loading"}>
          {status === "loading" ? "Отправляем…" : "Отправить заявку"}
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

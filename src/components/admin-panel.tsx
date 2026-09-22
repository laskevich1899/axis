"use client";

import { useCallback, useEffect, useState, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AxisLogo } from "@/components/axis-logo";
import { cn } from "@/lib/utils";
import type { ServiceItem, SiteContent } from "@/lib/site-content";

type Status = "loading" | "login" | "ready" | "saving" | "error";

const emptyService = (): ServiceItem => ({
  code: "",
  title: "",
  text: "",
  points: [""],
});

export function AdminPanel() {
  const [status, setStatus] = useState<Status>("loading");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [content, setContent] = useState<SiteContent | null>(null);

  const loadSession = useCallback(async () => {
    setStatus("loading");
    setMessage("");
    try {
      const authRes = await fetch("/api/admin/auth", { cache: "no-store" });
      const auth = (await authRes.json()) as { authenticated: boolean };
      if (!auth.authenticated) {
        setStatus("login");
        return;
      }
      const contentRes = await fetch("/api/content", { cache: "no-store" });
      if (!contentRes.ok) throw new Error("Could not load site content.");
      const data = (await contentRes.json()) as SiteContent;
      setContent(data);
      setStatus("ready");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  }, []);

  useEffect(() => {
    void loadSession();
  }, [loadSession]);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();
    setMessage("");
    setStatus("loading");
    const res = await fetch("/api/admin/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (!res.ok) {
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      setStatus("login");
      setMessage(data.error || "Login failed.");
      return;
    }
    setPassword("");
    await loadSession();
  }

  async function handleLogout() {
    await fetch("/api/admin/auth", { method: "DELETE" });
    setContent(null);
    setStatus("login");
    setMessage("");
  }

  async function handleSave(event: FormEvent) {
    event.preventDefault();
    if (!content) return;
    setStatus("saving");
    setMessage("");
    const res = await fetch("/api/content", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(content),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      setStatus("ready");
      setMessage((data as { error?: string }).error || "Save failed.");
      return;
    }
    setContent(data as SiteContent);
    setStatus("ready");
    setMessage("Saved. The public site will show the updated contact and services.");
  }

  function updateService(index: number, patch: Partial<ServiceItem>) {
    setContent((prev) => {
      if (!prev) return prev;
      const services = prev.services.map((service, i) =>
        i === index ? { ...service, ...patch } : service,
      );
      return { ...prev, services };
    });
  }

  if (status === "loading" && !content) {
    return (
      <Shell>
        <p className="text-sm text-steel">Checking session…</p>
      </Shell>
    );
  }

  if (status === "login" || (status === "error" && !content)) {
    return (
      <Shell>
        <form onSubmit={handleLogin} className="mx-auto w-full max-w-sm space-y-4 border border-border bg-panel p-6">
          <div>
            <p className="font-mono text-xs tracking-wide text-signal uppercase">Admin</p>
            <h1 className="mt-1 font-heading text-2xl font-semibold text-foreground">Sign in</h1>
            <p className="mt-2 text-sm text-steel">
              Edit contact details and services published on the marketing site.
            </p>
          </div>
          <label className="flex flex-col gap-1.5 text-xs font-medium text-steel">
            Password
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              className="h-10 bg-background"
              required
            />
          </label>
          {message && (
            <p className="text-sm text-destructive" role="alert">
              {message}
            </p>
          )}
          <Button type="submit" className="h-10 rounded px-5">
            Enter
          </Button>
        </form>
      </Shell>
    );
  }

  if (!content) {
    return (
      <Shell>
        <p className="text-sm text-destructive">{message || "Content unavailable."}</p>
      </Shell>
    );
  }

  return (
    <Shell
      actions={
        <>
          <Link href="/" className={cn(buttonVariants({ variant: "outline" }), "h-9 rounded px-3 text-sm")}>
            View site
          </Link>
          <Button type="button" variant="outline" className="h-9 rounded px-3 text-sm" onClick={handleLogout}>
            Sign out
          </Button>
        </>
      }
    >
      <form onSubmit={handleSave} className="space-y-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs tracking-wide text-signal uppercase">Dashboard</p>
            <h1 className="mt-1 font-heading text-2xl font-semibold text-foreground">Site content</h1>
            <p className="mt-1 max-w-xl text-sm text-steel">
              Changes write to <span className="font-mono text-xs">data/site-content.json</span> and refresh the
              public pages.
            </p>
          </div>
          <Button type="submit" className="h-10 rounded px-5" disabled={status === "saving"}>
            {status === "saving" ? "Saving…" : "Save changes"}
          </Button>
        </div>

        {message && (
          <p
            className={cn(
              "border px-3 py-2 text-sm",
              message.startsWith("Saved")
                ? "border-signal/30 bg-accent text-signal-deep"
                : "border-destructive/40 text-destructive",
            )}
            role="status"
          >
            {message}
          </p>
        )}

        <section className="space-y-4 border border-border bg-panel p-5">
          <h2 className="font-heading text-lg font-semibold text-foreground">Contact</h2>
          <div className="grid gap-3 md:grid-cols-3">
            <label className="flex flex-col gap-1.5 text-xs font-medium text-steel">
              Email
              <Input
                type="email"
                value={content.contact.email}
                onChange={(e) =>
                  setContent({ ...content, contact: { ...content.contact, email: e.target.value } })
                }
                className="h-10 bg-background"
                required
              />
            </label>
            <label className="flex flex-col gap-1.5 text-xs font-medium text-steel">
              Phone
              <Input
                value={content.contact.phone}
                onChange={(e) =>
                  setContent({ ...content, contact: { ...content.contact, phone: e.target.value } })
                }
                className="h-10 bg-background"
                required
              />
            </label>
            <label className="flex flex-col gap-1.5 text-xs font-medium text-steel md:col-span-1">
              Location
              <Input
                value={content.contact.location}
                onChange={(e) =>
                  setContent({ ...content, contact: { ...content.contact, location: e.target.value } })
                }
                className="h-10 bg-background"
                required
              />
            </label>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-heading text-lg font-semibold text-foreground">Services</h2>
            <Button
              type="button"
              variant="outline"
              className="h-9 rounded px-3 text-sm"
              onClick={() =>
                setContent({
                  ...content,
                  services: [
                    ...content.services,
                    {
                      ...emptyService(),
                      code: `SVC-${String(content.services.length + 1).padStart(2, "0")}`,
                    },
                  ],
                })
              }
            >
              Add service
            </Button>
          </div>

          <ul className="space-y-4">
            {content.services.map((service, index) => (
              <li key={`${service.code}-${index}`} className="space-y-3 border border-border bg-panel p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-mono text-xs text-signal">Service {index + 1}</p>
                  <Button
                    type="button"
                    variant="ghost"
                    className="h-8 rounded px-2 text-sm text-destructive"
                    disabled={content.services.length <= 1}
                    onClick={() =>
                      setContent({
                        ...content,
                        services: content.services.filter((_, i) => i !== index),
                      })
                    }
                  >
                    Remove
                  </Button>
                </div>
                <div className="grid gap-3 md:grid-cols-[8rem_1fr]">
                  <label className="flex flex-col gap-1.5 text-xs font-medium text-steel">
                    Code
                    <Input
                      value={service.code}
                      onChange={(e) => updateService(index, { code: e.target.value })}
                      className="h-10 bg-background"
                      required
                    />
                  </label>
                  <label className="flex flex-col gap-1.5 text-xs font-medium text-steel">
                    Title
                    <Input
                      value={service.title}
                      onChange={(e) => updateService(index, { title: e.target.value })}
                      className="h-10 bg-background"
                      required
                    />
                  </label>
                </div>
                <label className="flex flex-col gap-1.5 text-xs font-medium text-steel">
                  Description
                  <Textarea
                    value={service.text}
                    onChange={(e) => updateService(index, { text: e.target.value })}
                    rows={3}
                    className="min-h-20 bg-background py-2"
                    required
                  />
                </label>
                <label className="flex flex-col gap-1.5 text-xs font-medium text-steel">
                  Bullets (one per line)
                  <Textarea
                    value={service.points.join("\n")}
                    onChange={(e) =>
                      updateService(index, {
                        points: e.target.value.split("\n"),
                      })
                    }
                    rows={4}
                    className="min-h-24 bg-background py-2 font-mono text-xs"
                    required
                  />
                </label>
              </li>
            ))}
          </ul>
        </section>

        <div className="flex justify-end border-t border-border pt-4">
          <Button type="submit" className="h-10 rounded px-5" disabled={status === "saving"}>
            {status === "saving" ? "Saving…" : "Save changes"}
          </Button>
        </div>
      </form>
    </Shell>
  );
}

function Shell({
  children,
  actions,
}: {
  children: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <div className="min-h-full bg-background">
      <header className="border-b border-border bg-panel">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-3 px-5 py-3 md:px-8">
          <Link href="/" className="min-w-0 transition-opacity hover:opacity-80">
            <AxisLogo variant="lockup" />
          </Link>
          <div className="flex items-center gap-2">{actions}</div>
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-5 py-8 md:px-8">{children}</main>
    </div>
  );
}

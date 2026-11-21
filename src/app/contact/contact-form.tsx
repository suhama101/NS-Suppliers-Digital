"use client";

import { useRef, useState, type FormEvent } from "react";
import { emailHref } from "@/content/site";
import styles from "./contact.module.css";

const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();
const endpoint = "https://api.web3forms.com/submit";

export function ContactForm() {
  const submitting = useRef(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!accessKey || submitting.current) return;

    const form = event.currentTarget;
    const fields = new FormData(form);
    for (const name of ["name", "email", "subject", "message"]) {
      fields.set(name, String(fields.get(name) ?? "").trim());
    }

    if (!fields.get("name") || !fields.get("message")) {
      setError("Enter your name and a message.");
      setStatus("error");
      return;
    }

    if (!fields.get("subject")) fields.set("subject", "Business enquiry from NS Suppliers Digital");

    submitting.current = true;
    setStatus("sending");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(fields)),
        credentials: "omit",
        signal: AbortSignal.timeout(20000),
      });
      const result = await response.json();
      if (!response.ok || result?.success !== true) throw new Error("Web3Forms did not accept the submission");

      form.reset();
      setStatus("success");
    } catch {
      setError("We couldn’t confirm your submission. Please try again or email us directly.");
      setStatus("error");
    } finally {
      submitting.current = false;
    }
  }

  return (
    <section className={styles.card} aria-labelledby="enquiry-form-title">
      <h3 className={styles.formTitle} id="enquiry-form-title">Send a Business Enquiry</h3>
      {!accessKey && (
        <p className={styles.formNotice} id="form-availability">
          The online enquiry form is awaiting activation. <a className="text-link" href={emailHref}>Email us directly</a>.
        </p>
      )}
      <form
        className={styles.form}
        action={accessKey ? endpoint : undefined}
        method="post"
        onSubmit={sendMessage}
        aria-describedby={accessKey ? "enquiry-privacy" : "form-availability"}
      >
        <fieldset className={styles.fields} disabled={!accessKey || status === "sending"}>
          {accessKey && <input type="hidden" name="access_key" value={accessKey} />}
          <label>
            Full Name
            <input name="name" autoComplete="name" maxLength={120} required />
          </label>
          <label>
            Email Address
            <input name="email" type="email" autoComplete="email" maxLength={254} required />
          </label>
          <label>
            <span>Subject <span className={styles.optional}>(optional)</span></span>
            <input name="subject" maxLength={150} />
          </label>
          <label>
            Message
            <textarea name="message" rows={5} maxLength={5000} required />
          </label>
          <input type="checkbox" name="botcheck" value="true" hidden />
          <button type="submit" className="site-button button-gold">
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>
        </fieldset>
        {accessKey && (
          <p className={styles.formNote} id="enquiry-privacy">
            Your details are sent through Web3Forms so we can respond to your enquiry. Please omit sensitive information.
          </p>
        )}
        <div className={styles.formStatus} role="status" aria-live="polite" aria-atomic="true">
          {status === "sending" && "Sending your message…"}
          {status === "success" && "Thank you. Your enquiry has been submitted successfully."}
          {status === "error" && <span className={styles.formError}>{error}</span>}
        </div>
      </form>
    </section>
  );
}

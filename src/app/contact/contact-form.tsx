"use client";

import { useRef, useState, type FormEvent } from "react";
import { emailHref } from "@/content/site";
import styles from "./contact.module.css";

const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID?.trim();
const endpoint = formId && /^[a-z0-9]+$/i.test(formId) ? `https://formspree.io/f/${formId}` : undefined;

export function ContactForm() {
  const submitting = useRef(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!endpoint || submitting.current) return;

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

    submitting.current = true;
    setStatus("sending");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fields,
        credentials: "omit",
        signal: AbortSignal.timeout(20000),
      });
      const result = await response.json();
      if (!response.ok || result.ok !== true) throw new Error("Formspree did not accept the submission");

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
      {!endpoint && (
        <p className={styles.formNotice} id="form-availability">
          Online submissions are unavailable until the form service is connected. <a className="text-link" href={emailHref}>Email us directly</a>.
        </p>
      )}
      <form
        className={styles.form}
        action={endpoint}
        method="post"
        onSubmit={sendMessage}
        aria-describedby={endpoint ? "enquiry-privacy" : "form-availability"}
      >
        <fieldset className={styles.fields} disabled={!endpoint || status === "sending"}>
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
          <input type="hidden" name="_gotcha" />
          <button type="submit" className="site-button button-gold">
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>
        </fieldset>
        {endpoint && (
          <p className={styles.formNote} id="enquiry-privacy">
            Your details are sent through Formspree so we can respond to your enquiry. Please omit sensitive information.
          </p>
        )}
        <div className={styles.formStatus} role="status" aria-live="polite" aria-atomic="true">
          {status === "sending" && "Sending your message…"}
          {status === "success" && "Thank you. Your enquiry was submitted successfully."}
          {status === "error" && <span className={styles.formError}>{error}</span>}
        </div>
      </form>
    </section>
  );
}

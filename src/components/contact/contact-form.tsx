"use client";

import { useRef, useState } from "react";
import { useLanguage } from "@/components/providers/language-provider";
import { Icon } from "@/components/ui/icon";
import { siteConfig } from "@/data/site";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;
type SubmitStatus = "idle" | "submitting" | "success" | "error";

const initialValues: FormValues = { name: "", email: "", subject: "", message: "" };

export function ContactForm() {
  const { language } = useLanguage();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const lastSubmitRef = useRef(0);

  const validate = () => {
    const nextErrors: FormErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (values.name.trim().length < 2) nextErrors.name = language === "vi" ? "Vui lòng nhập ít nhất 2 ký tự." : "Enter at least 2 characters.";
    if (!emailPattern.test(values.email.trim())) nextErrors.email = language === "vi" ? "Email chưa đúng định dạng." : "Enter a valid email address.";
    if (values.subject.trim().length < 4) nextErrors.subject = language === "vi" ? "Chủ đề cần ít nhất 4 ký tự." : "The subject needs at least 4 characters.";
    if (values.message.trim().length < 20) nextErrors.message = language === "vi" ? "Hãy mô tả thêm một chút, tối thiểu 20 ký tự." : "Tell us a little more, using at least 20 characters.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting" || Date.now() - lastSubmitRef.current < 3000) return;

    if (!validate()) {
      setStatus("error");
      window.setTimeout(() => document.querySelector<HTMLElement>("[aria-invalid='true']")?.focus(), 0);
      return;
    }

    lastSubmitRef.current = Date.now();
    setStatus("submitting");

    await new Promise((resolve) => window.setTimeout(resolve, 450));
    const subject = encodeURIComponent(`[MSCI Showcase] ${values.subject.trim()}`);
    const body = encodeURIComponent(`${values.message.trim()}\n\n${values.name.trim()}\n${values.email.trim()}`);
    setStatus("success");
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  const updateField = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
    if (status !== "idle") setStatus("idle");
  };

  const labels = language === "vi"
    ? { name: "Họ và tên", email: "Email", subject: "Chủ đề", message: "Nội dung", submit: "Chuẩn bị email", submitting: "Đang chuẩn bị…" }
    : { name: "Full name", email: "Email", subject: "Subject", message: "Message", submit: "Prepare email", submitting: "Preparing…" };

  return (
    <form className="contact-form" noValidate onSubmit={handleSubmit}>
      <div className="contact-form-grid">
        <FormField label={labels.name} error={errors.name} id="contact-name">
          <input id="contact-name" name="name" autoComplete="name" value={values.name} onChange={(event) => updateField("name", event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "contact-name-error" : undefined} placeholder={language === "vi" ? "Tên của bạn" : "Your name"} />
        </FormField>
        <FormField label={labels.email} error={errors.email} id="contact-email">
          <input id="contact-email" name="email" type="email" inputMode="email" autoComplete="email" spellCheck={false} value={values.email} onChange={(event) => updateField("email", event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "contact-email-error" : undefined} placeholder="you@example.com" />
        </FormField>
      </div>
      <FormField label={labels.subject} error={errors.subject} id="contact-subject">
        <input id="contact-subject" name="subject" autoComplete="off" value={values.subject} onChange={(event) => updateField("subject", event.target.value)} aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? "contact-subject-error" : undefined} placeholder={language === "vi" ? "Bạn muốn trao đổi điều gì?" : "What would you like to discuss?"} />
      </FormField>
      <FormField label={labels.message} error={errors.message} id="contact-message">
        <textarea id="contact-message" name="message" rows={7} autoComplete="off" value={values.message} onChange={(event) => updateField("message", event.target.value)} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "contact-message-error" : undefined} placeholder={language === "vi" ? "Chia sẻ bối cảnh, mục tiêu hoặc câu hỏi của bạn…" : "Share your context, goal, or question…"} />
      </FormField>
      <div className="contact-form-footer">
        <p>{language === "vi" ? "Form sẽ mở ứng dụng email mặc định; không có dữ liệu nào được lưu trên website." : "The form opens your default mail app; no data is stored on this website."}</p>
        <button type="submit" className="button-primary" disabled={status === "submitting"}>
          {status === "submitting" ? labels.submitting : labels.submit}
          <Icon name={status === "success" ? "check" : "send"} className="size-4" />
        </button>
      </div>
      <div className={`form-status ${status}`} role="status" aria-live="polite">
        {status === "success" ? (language === "vi" ? "Email đã được chuẩn bị trong ứng dụng mail của bạn." : "Your message is ready in your mail app.") : null}
        {status === "error" ? (language === "vi" ? "Vui lòng kiểm tra các trường được đánh dấu." : "Check the highlighted fields and try again.") : null}
      </div>
    </form>
  );
}

function FormField({
  label,
  error,
  id,
  children,
}: {
  label: string;
  error?: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <label className="form-field" htmlFor={id}>
      <span>{label}</span>
      {children}
      {error ? <small id={`${id}-error`}>{error}</small> : null}
    </label>
  );
}

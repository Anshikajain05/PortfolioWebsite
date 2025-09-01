import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill name, email and message.");
      return;
    }
    const subject = encodeURIComponent(form.subject || "Hello");
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-cyan-500 mb-4">Contact</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">Have a project or want to chat? Drop a message below.</p>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" className="p-3 rounded border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800" />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Your email" className="p-3 rounded border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800" />
          </div>

          <input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" className="p-3 rounded border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800" />

          <textarea name="message" value={form.message} onChange={handleChange} rows="6" placeholder="Message" className="p-3 rounded border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800" />

          <div className="flex items-center gap-3">
            <button type="submit" className="px-5 py-2 bg-cyan-500 text-white rounded">Send Message</button>
            <button type="button" onClick={() => setForm({ name: "", email: "", subject: "", message: "" })} className="px-4 py-2 border rounded">Clear</button>
          </div>
        </form>
      </div>
    </section>
  );
}

// src/components/Contact.jsx
import { useState } from 'react';
import { ArrowUpRight, BriefcaseBusiness, Globe2, Mail, MapPin, Send } from 'lucide-react';
import { profile } from '../data/profile.js';
import Reveal from './Reveal.jsx';

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(form) {
  const errors = {};

  if (!form.name.trim()) errors.name = 'Please enter your name.';
  else if (form.name.trim().length < 2) errors.name = 'Name must be at least 2 characters.';

  if (!form.email.trim()) errors.email = 'Please enter your email.';
  else if (!EMAIL_PATTERN.test(form.email.trim())) errors.email = 'Please enter a valid email.';

  if (!form.subject.trim()) errors.subject = 'Please enter a subject.';

  if (!form.message.trim()) errors.message = 'Please enter a message.';
  else if (form.message.trim().length < 10)
    errors.message = 'Message must be at least 10 characters.';

  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => ({ ...previous, [name]: undefined }));
    setStatus(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus(null);
      return;
    }

    const composeUrl = new URL('https://mail.google.com/mail/');
    composeUrl.search = new URLSearchParams({
      view: 'cm',
      fs: '1',
      to: profile.email,
      su: form.subject.trim(),
      body: `From: ${form.name.trim()}\nEmail: ${form.email.trim()}\n\n${form.message.trim()}`,
    }).toString();

    window.open(composeUrl.toString(), '_blank', 'noopener,noreferrer');
    setStatus('gmail');
  };

  const inputClasses = (field) =>
    `w-full rounded-2xl border bg-white/70 px-4 py-3.5 text-sm text-ink placeholder:text-ink/30 transition-colors duration-300 focus:outline-none focus:ring-0 ${
      errors[field]
        ? 'border-red-400 focus:border-red-400'
        : 'border-ink/10 focus:border-accent'
    }`;

  return (
    <section id="contact" className="section">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left — CTA */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow">Contact</span>
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="display mt-6 text-[clamp(2.25rem,7.5vw,4.5rem)]">
                Let&apos;s build
                <br />
                something
                <br />
                <span className="text-accent">useful.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-ink/60 sm:text-lg">
                Have a project, idea, or opportunity? Let&apos;s connect.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  data-cursor="hover"
                  className="btn btn-primary"
                >
                  <Mail className="h-4 w-4" />
                  Email Me
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  data-cursor="hover"
                  className="btn btn-ghost"
                >
                  <BriefcaseBusiness className="h-4 w-4" />
                  LinkedIn
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  data-cursor="hover"
                  className="btn btn-ghost"
                >
                  <Globe2 className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <dl className="mt-12 space-y-5 border-t border-ink/10 pt-8">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40">
                      Email
                    </dt>
                    <dd className="mt-1 text-sm text-ink/80">
                      <a
                        href={`mailto:${profile.email}`}
                        data-cursor="hover"
                        className="transition-colors hover:text-accent"
                      >
                        {profile.email}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40">
                      Location
                    </dt>
                    <dd className="mt-1 text-sm text-ink/80">{profile.location}</dd>
                  </div>
                </div>
              </dl>
            </Reveal>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-4xl border border-ink/10 bg-white/50 p-6 sm:p-9"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-ink/50"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      placeholder="Your name"
                      className={inputClasses('name')}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-2 text-xs text-red-500">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-ink/50"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      placeholder="you@example.com"
                      className={inputClasses('email')}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-2 text-xs text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="subject"
                    className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-ink/50"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                    placeholder="What's this about?"
                    className={inputClasses('subject')}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="mt-2 text-xs text-red-500">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="message"
                    className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-ink/50"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    placeholder="Tell me about your project or opportunity…"
                    className={`${inputClasses('message')} resize-none`}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-2 text-xs text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                  <button type="submit" data-cursor="hover" className="btn btn-primary">
                    Send Message
                    <Send className="h-3.5 w-3.5" />
                  </button>

                  <p className="max-w-xs font-mono text-[10px] leading-relaxed tracking-[0.08em] text-ink/35">
                    This form validates on the front end only. Prefer email? Write to{' '}
                    {profile.email}.
                  </p>
                </div>

                {status === 'gmail' && (
                  <p
                    role="status"
                    className="mt-6 flex items-start gap-2 rounded-2xl border border-accent/30 bg-accent/10 px-4 py-3 text-xs leading-relaxed text-accent-dark"
                  >
                    <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
                    Gmail compose is open with your message filled in. Review it and press Send in Gmail.
                  </p>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
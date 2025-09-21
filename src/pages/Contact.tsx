import React, { useState } from 'react';
import PageLayout from './PageLayout';
import styles from '../products/ProductPage.module.css'

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <PageLayout>
    <div className="max-w-xl mx-auto my-8 p-8 bg-zinc-800 text-zinc-100 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-2 text-primary-400">Contact Us</h2>
      <p className="mb-6 text-zinc-300">Have a question or feedback? Reach out to us!</p>
      <div className="mb-6 space-y-1.5 text-zinc-300">
        <div><strong className="text-primary-300">Email:</strong> support@gamingstore.com</div>
        <div><strong className="text-primary-300">Phone:</strong> +1 (555) 123-4567</div>
        <div><strong className="text-primary-300">Address:</strong> 123 Game St, Console City, USA</div>
      </div>
      {submitted ? (
        <div className="text-primary-400 mt-4">Thank you for contacting us! We’ll get back to you soon.</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block mb-1 font-medium text-zinc-200">Name:</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded bg-zinc-700 border border-zinc-600 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
          </div>
          <div className="mb-3">
            <label className="block mb-1 font-medium text-zinc-200">Email:</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded bg-zinc-700 border border-zinc-600 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
          </div>
          <div className="mb-3">
            <label className="block mb-1 font-medium text-zinc-200">Message:</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2 rounded bg-zinc-700 border border-zinc-600 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
          </div>
          <button
            type="submit"
            className={`my-3 mx-5 ${styles.addCartBtn}`}
          >
            Send Message
          </button>
        </form>
      )}
    </div>
    </PageLayout>
  );
}

export default Contact
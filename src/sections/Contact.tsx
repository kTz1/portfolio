import { useState } from "react";
import emailjs from "@emailjs/browser";
import grainImage from "@/assets/images/grain.jpg";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const validateForm = () => {
    if (!form.name.trim()) return "Name is required.";
    if (!form.email.trim()) return "Email is required.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      return "Invalid email address.";
    if (!form.message.trim()) return "Message is required.";
    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      if (
        !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
        !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
        !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      ) {
        throw new Error(error);
      }

      // Create template parameters
      const templateParams = {
        from_name: form.name,
        email: form.email,
        message: form.message,
        to_name: "Catalin",
      };

      const res = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      if (!res) throw new Error("Failed to send message!");
      setSuccess("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");
    }
  };

  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20" id="contact">
      <div className="container">
        <div className="flex flex-col items-center bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          />

          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="">
              <h2 className="font-serif text-2xl md:text-3xl text-center">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2 text-center">
                Ready to bring your next project to life? Let&apos;s connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 max-w-2xl mx-auto mt-8 p-8 rounded-3xl shadow-2xl bg-gray-800"
          aria-label="Contact form"
        >
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              required
              aria-required="true"
              aria-invalid={!!error && !form.name}
              placeholder="John Doe"
              className="w-full px-4 py-2 bg-white border border-gray-600 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              required
              aria-required="true"
              aria-invalid={
                !!error &&
                (!form.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
              }
              placeholder="johndoe@email.com"
              className="w-full px-4 py-2 bg-white border border-gray-600 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-colors"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              aria-required="true"
              aria-invalid={!!error && !form.message}
              placeholder="Your message here..."
              className="w-full px-4 py-2 bg-white border border-gray-600 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-colors resize-none"
            />
          </div>

          {error && (
            <div className="text-red-600" role="alert">
              {error}
            </div>
          )}
          {success && (
            <div className="text-green-600" role="status">
              {success}
            </div>
          )}

          <div className="flex justify-center items-center">
            <button
              type="submit"
              disabled={loading}
              className="min-w-[200px]  text-black bg-white py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors "
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

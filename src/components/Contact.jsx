import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_45ncz25",   // <-- apna EmailJS service ID daalo
        "template_573ywt6",  // <-- apna template ID daalo
        form.current,
        "9sjxWinE6zcRYDOZR"    // <-- apna EmailJS public key daalo
      )
      .then(
        (result) => {
          alert("✅ Email Sent Successfully!");
          form.current.reset(); // <-- ye line add kardi
        },
        (error) => {
          alert("❌ Failed to send email. Try again!");
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-black via-red-800 to-black border-b border-white text-white text-center">
      <h2 className="text-3xl font-bold mb-8 text-yellow-500">Contact Us</h2>
      <p className="mb-6 font-semibold text-gray-300">
        You can Contact Us directly via WhatsApp or Email 📩
      </p>

      {/* WhatsApp Button */}
      <div className="mb-8">
        <a
          href="https://wa.me/923047579452?text=Hello%20I%20want%20to%20know%20about%20your%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition"
        >
          💬 Chat on WhatsApp
        </a>
      </div>

      {/* Email Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-md mx-auto bg-transparent border border-white p-6 text-white rounded-xl shadow-md shadow-orange-400 space-y-4"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full border focus:backdrop-blur-md focus:bg-white/10 outline-0 border-white px-4 py-2 rounded-md text-white"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full border focus:backdrop-blur-md focus:bg-white/10 outline-0 border-white px-4 py-2 rounded-md text-white"
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          required
          className="w-full border focus:backdrop-blur-md focus:bg-white/10 outline-0 border-white px-4 py-2 rounded-md text-white"
        />
        <button
          type="submit"
          className="w-full bg-yellow-500  text-black px-4 py-2 rounded-md font-semibold"
        >
          📧 Send Email
        </button>
      </form>
    </section>
  );
};

export default Contact;

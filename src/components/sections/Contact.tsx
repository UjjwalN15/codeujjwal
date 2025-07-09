"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        setSubmitStatus("error");
        console.error("Server responded with status:", response.status);
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Failed to send message:", error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 15000);
    }
  };

  return (
    <section id="contact" className="py-10 px-6 md:px-20 mt-[20px] md:mt-[-1px]">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-10 text-center"
      >
        Get In <span className="text-red-600">Touch</span>
      </motion.h2>
      
      <div className="max-w-4xl mx-auto">
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
            />
          </div>
          
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 w-full md:w-auto px-8 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-medium disabled:opacity-70"
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                <FaPaperPlane /> Send Message
              </>
            )}
          </motion.button>
          
          {submitStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-green-900/30 border border-green-600 rounded-lg text-green-400"
            >
              Message sent successfully! I will get back to you soon.
            </motion.div>
          )}
          
          {submitStatus === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-900/30 border border-red-600 rounded-lg text-red-400"
            >
              Failed to send message. Please try again later or contact me directly at itsmeujjwal725@gmail.com or +9779768431599. This message is shown for 15 seconds.
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
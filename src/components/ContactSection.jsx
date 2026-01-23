import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

function ContactSection() {
  const formRef = useRef(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Get EmailJS credentials from environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    // Validate environment variables
    if (!serviceId || !templateId || !publicKey) {
      setSubmitStatus({
        type: 'error',
        message: 'EmailJS configuration is missing. Please check your .env file.',
      })
      setIsSubmitting(false)
      return
    }

    try {
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        {
          publicKey: publicKey,
        }
      )

      setSubmitStatus({ type: 'success', message: 'Message sent successfully!' })
      formRef.current?.reset()
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="section-container bg-offWhite relative overflow-hidden">
      {/* Content container with internal scrolling - section height never changes */}
      <div className="absolute inset-0 flex items-center justify-center px-8 md:px-16 lg:px-24 py-20 overflow-y-auto overflow-x-hidden">
        <div className="w-full max-w-2xl mx-auto my-auto">
          {/* Heading */}
          <h2 className="font-moontime text-black text-4xl md:text-5xl mb-12 text-center">
            Contact
          </h2>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block font-horizon text-black text-sm mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                required
                className="w-full px-4 py-3 bg-transparent border border-black/20 rounded-lg font-horizon text-black placeholder-black/40 focus:outline-none focus:border-black/40 transition-colors"
                placeholder="Your name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block font-horizon text-black text-sm mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                required
                className="w-full px-4 py-3 bg-transparent border border-black/20 rounded-lg font-horizon text-black placeholder-black/40 focus:outline-none focus:border-black/40 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block font-horizon text-black text-sm mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 bg-transparent border border-black/20 rounded-lg font-horizon text-black placeholder-black/40 focus:outline-none focus:border-black/40 transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-black text-offWhite font-horizon text-base rounded-lg hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-black/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {/* Status Message */}
            {submitStatus && (
              <div
                className={`mt-4 p-4 rounded-lg font-horizon text-sm ${
                  submitStatus.type === 'success'
                    ? 'bg-black/10 text-black'
                    : 'bg-accentRed/10 text-accentRed'
                }`}
              >
                {submitStatus.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

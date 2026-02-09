import { useState } from 'react'

const basePath = import.meta.env.BASE_URL

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thanks for reaching out! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section className="bg-surface pt-20 pb-16 px-6">
      <div className="max-w-[768px] mx-auto">
        <div className="bg-white border-[5px] border-primary rounded-[14px] shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="border-b-[5px] border-accent bg-gradient-to-br from-[#fafaf9] to-white px-6 py-8 text-center">
            <div className="w-[70px] h-[70px] bg-accent border-[3px] border-primary shadow-lg mx-auto mb-4 flex items-center justify-center">
              <img src={`${basePath}assets/icon-contact-1.svg`} alt="" className="w-8 h-8" />
            </div>
            <h2 className="font-black text-primary text-3xl md:text-4xl uppercase">
              Let's Talk
            </h2>
            <p className="font-medium text-text-secondary text-lg mt-2">
              Got questions? Want to join a ride? Need gear advice? Drop us a line.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white px-6 py-8 space-y-6">
            <div>
              <label htmlFor="name" className="block font-black text-text-muted text-sm uppercase tracking-wider mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white border-[3px] border-border-dark rounded-lg h-12 px-4 text-sm focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-black text-text-muted text-sm uppercase tracking-wider mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white border-[3px] border-border-dark rounded-lg h-12 px-4 text-sm focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block font-black text-text-muted text-sm uppercase tracking-wider mb-2">
                Phone (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-white border-[3px] border-border-dark rounded-lg h-12 px-4 text-sm focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-black text-text-muted text-sm uppercase tracking-wider mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="What's on your mind?"
                className="w-full bg-white border-[3px] border-border-dark rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-accent border-[3px] border-primary rounded-lg py-4 shadow-lg"
            >
              <span className="font-black text-white text-lg uppercase tracking-wider">
                Send It
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

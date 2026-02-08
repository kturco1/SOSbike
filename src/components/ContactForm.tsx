import { useState } from 'react'
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you! We will get back to you shortly.')
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-2 mb-4">Contact Us</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Ready to get your bike serviced? Drop us a message or visit our workshop.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary mb-1.5">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-surface-light border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-1.5">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-surface-light border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-primary mb-1.5">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 bg-surface-light border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-primary mb-1.5">Service</label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 bg-surface-light border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="tune-up">Basic Tune-Up</option>
                    <option value="overhaul">Full Overhaul</option>
                    <option value="custom">Custom Build</option>
                    <option value="wheel">Wheel Truing</option>
                    <option value="fitting">Bike Fitting</option>
                    <option value="ebike">E-Bike Service</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary mb-1.5">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 bg-surface-light border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-none"
                  placeholder="Tell us about your bike and what it needs..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-hover transition-colors"
              >
                Send Message
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-primary rounded-2xl p-6 text-white">
              <h3 className="text-lg font-bold mb-5">Workshop Info</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Address</p>
                    <p className="text-sm text-white/60">123 Bike Lane, Seattle, WA 98101</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <p className="text-sm text-white/60">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm text-white/60">hello@sosbike.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Hours</p>
                    <p className="text-sm text-white/60">Mon - Fri: 8am - 6pm</p>
                    <p className="text-sm text-white/60">Sat: 9am - 4pm</p>
                    <p className="text-sm text-white/60">Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-primary mb-2">Emergency Repair?</h3>
              <p className="text-text-secondary text-sm mb-4">
                Flat tire or broken chain? We offer emergency roadside support within Seattle.
              </p>
              <a href="tel:5551234567" className="text-accent font-semibold text-sm hover:underline">
                Call Emergency Line &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

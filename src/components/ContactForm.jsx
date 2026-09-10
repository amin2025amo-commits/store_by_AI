import { useState } from 'react';

export default function ContactForm({ selectedProduct = null }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: selectedProduct?.name || '',
    quantity: 1,
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      // Using Formspree - replace with your form ID
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          product: formData.product,
          quantity: formData.quantity,
          message: formData.message,
        })
      });

      if (response.ok) {
        setStatus('✓ Message sent! We\'ll contact you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          product: selectedProduct?.name || '',
          quantity: 1,
          message: '',
        });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('Error sending message. Please try again.');
      }
    } catch (error) {
      setStatus('Error sending message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-12 bg-white">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Place Your Order</h2>
          <p className="text-slate-600">
            Fill out the form below to inquire about our products or place an order. We'll get back to you within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-slate-50 p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="+1 (555) 000-0000"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                min="1"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Product of Interest *
            </label>
            <input
              type="text"
              name="product"
              value={formData.product}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Product name or code"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
              placeholder="Tell us more about your order or any special requests..."
            />
          </div>

          {status && (
            <div className={`p-4 rounded-lg text-sm font-medium ${
              status.includes('✓')
                ? 'bg-green-100 text-green-800'
                : status.includes('Error')
                ? 'bg-red-100 text-red-800'
                : 'bg-blue-100 text-blue-800'
            }`}>
              {status}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg transition duration-200 text-lg"
          >
            Send Order Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);

    // Web3Forms Access Key
    formData.append('access_key', '21afa755-6b0f-4606-b92d-63879798ecb1');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        (e.target as HTMLFormElement).reset();
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-950 text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold text-white">
            Contact OrixBD Group
          </h1>
          <p className="mt-4 text-slate-400">
            Have an inquiry or business proposal? Reach out to our corporate
            office or specific business unit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Head Office Info */}
          <div className="bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-800">
            <h2 className="text-2xl font-bold text-white mb-6">
              Corporate Head Office
            </h2>

            <div className="space-y-4 text-slate-300">
              <p className="flex items-start gap-3">
                <span className="font-semibold text-blue-400 min-w-[80px]">
                  Address:
                </span>
                <span className="text-slate-400">
                  House ##, Road ##, Gulshan, Dhaka-1212, Bangladesh
                </span>
              </p>
              <p className="flex items-center gap-3">
                <span className="font-semibold text-blue-400 min-w-[80px]">
                  Phone:
                </span>
                <span className="text-slate-400">
                  +880 2-9800000 / +880 1700-000000
                </span>
              </p>
              <p className="flex items-center gap-3">
                <span className="font-semibold text-blue-400 min-w-[80px]">
                  Email:
                </span>
                <span className="text-slate-400">info@orixbd.com</span>
              </p>
            </div>

            <hr className="my-8 border-slate-800" />

            <h3 className="text-lg font-bold text-white mb-4">
              Our Concerns Contact Info
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                •{' '}
                <strong className="text-slate-200">
                  Orix Washing Project:
                </strong>{' '}
                Gazipur (+880 1700-000001)
              </li>
              <li>
                •{' '}
                <strong className="text-slate-200">
                  Orix Packaging & Accessories:
                </strong>{' '}
                Tongi (+880 1700-000002)
              </li>
              <li>
                • <strong className="text-slate-200">Orix Water Pump:</strong>{' '}
                Narayanganj (+880 1700-000003)
              </li>
              <li>
                • <strong className="text-slate-200">Denim Creation:</strong>{' '}
                Ashulia (+880 1700-000004)
              </li>
              <li>
                • <strong className="text-slate-200">Orix Agro Farm:</strong>{' '}
                Bogra (+880 1700-000005)
              </li>
            </ul>
          </div>

          {/* General Inquiry Form */}
          <div className="bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-800">
            <h2 className="text-2xl font-bold text-white mb-6">
              Send Us a Message
            </h2>

            {submitted ? (
              <div className="p-6 bg-emerald-950/80 border border-emerald-800 text-emerald-300 rounded-xl text-center">
                <h3 className="text-lg font-bold">Thank You!</h3>
                <p className="text-sm mt-2">
                  Your message has been successfully sent. Our team will contact
                  you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-semibold underline text-emerald-400 hover:text-emerald-200">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <p className="text-red-400 text-sm bg-red-950/50 p-3 rounded-lg border border-red-800/50">
                    {error}
                  </p>
                )}

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-1">
                    Select Concern
                  </label>
                  <select
                    name="concern"
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="General Group Inquiry">
                      General Group Inquiry
                    </option>
                    <option value="Orix Washing Project">
                      Orix Washing Project
                    </option>
                    <option value="Orix Packaging & Accessories">
                      Orix Packaging & Accessories
                    </option>
                    <option value="Orix Water Pump">Orix Water Pump</option>
                    <option value="Denim Creation">Denim Creation</option>
                    <option value="Orix Agro Farm">Orix Agro Farm</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Type your inquiry here..."
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-slate-500"></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white font-semibold rounded-lg transition flex justify-center items-center">
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

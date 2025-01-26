import React from 'react';

export default function Contact() {
  return (
    <div id="CONTACT" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="contact max-w-xl mx-auto bg-white p-6 shadow-md rounded-lg">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-6"
          >
            {/* Hidden Access Key */}
            <input
              type="hidden"
              name="access_key"
              value="b489ce40-9100-42b2-aad9-5ee6fe7a57af"
            />

            {/* Name Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Name:
              </label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email:
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message:
              </label>
              <textarea
                name="message"
                placeholder="Type your message here..."
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';

export const ContactHero: React.FC = () => {
  const [activeTab, setActiveTab] = useState('General Enquiries');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="w-full bg-[#E7DED7] py-12 sm:py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Header Section */}
        <div className="mb-12 sm:mb-16">
          <h1 
            className="text-[#06153A] mb-6"
            style={{ 
              width: '500px',
              height: '54px',
              position: 'relative',
              top: '54',
              fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
              fontWeight: 600,
              fontSize: '45px',
              lineHeight: '100%',
              letterSpacing: '0.01em',
              textAlign: 'left'
            }}
          >
            Let's Get In Touch
          </h1>
          <p 
            className="text-[#06153A]"
            style={{ 
              width: '1360px',
              height: '70px',
          
              marginTop: '22px',
              fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
              fontWeight: 400,
              fontSize: '20px',
              letterSpacing: '0.01em'
            }}
          >
            We're here to help! Whether you have a general inquiry, a business proposal, or are interested in partnering with us as a supplier, we'd love to hear from you. At ALLINA, we value open communication and are committed to providing prompt and helpful responses to all inquiries.
          </p>
        </div>

        {/* How can we help you? Section */}
        <div className="mb-12">
          

          {/* Text and Tabs on same line */}
          <div className="flex items-center justify-between mb-8">
            {/* Left side - How can we help you text */}
            <div>
              <h2 
                className="text-[#06153A]"
                style={{ 
                  width: '400px',
                  height: '38px',
                  fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                  fontWeight: 600,
                  
              marginTop: '-20px',
                  fontSize: '32px',
                  lineHeight: '100%',
                  letterSpacing: '0.02em'
                }}
              >
                How can we help you?
              </h2>
            </div>
            
            {/* Right side - Tabs */}
            <div 
              className="flex items-center justify-between relative overflow-hidden"
              style={{
                width: '670px',
                height: '68px',
                backgroundColor: '#E7DED7',
                borderRadius: '10px',
                border: '1px solid #000000',
                padding: '5px 4px'
              }}
            >
              {/* General Enquiries Tab */}
              <button
                onClick={() => setActiveTab('General Enquiries')}
                className="flex items-center justify-center relative overflow-hidden"
                style={{
                  width: '213px',
                  backgroundColor: activeTab === 'General Enquiries' ? '#06153A' : 'transparent',
                  padding: '17px 90px',
                  marginTop: '-1.5px',
                  marginBottom: '-1.5px',
                  borderRadius: '6px'
                }}
              >
                <span
                  style={{
                    fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                    fontWeight: 400,
                    color: activeTab === 'General Enquiries' ? '#FFFFFF' : '#06153A',
                    fontSize: '18px',
                    lineHeight: '27px',
                    letterSpacing: '0',
                    whiteSpace: 'nowrap',
                    textAlign: 'center'
                  }}
                >
                  General Enquiries
                </span>
              </button>

              {/* Business Enquiries Tab */}
              <button
                onClick={() => setActiveTab('Business Enquiries')}
                className="flex items-center justify-center relative overflow-hidden"
                style={{
                  width: '212px',
                  backgroundColor: activeTab === 'Business Enquiries' ? '#06153A' : 'transparent',
                  padding: '17px 90px',
                  marginTop: '-1.5px',
                  marginBottom: '-1.5px',
                  borderRadius: '6px'
                }}
              >
                <span
                  style={{
                    fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                    fontWeight: 400,
                    color: activeTab === 'Business Enquiries' ? '#FFFFFF' : '#06153A',
                    fontSize: '18px',
                    lineHeight: '27px',
                    letterSpacing: '0',
                    whiteSpace: 'nowrap',
                    textAlign: 'center'
                  }}
                >
                  Business Enquiries
                </span>
              </button>

              {/* Supplier Enquiries Tab */}
              <button
                onClick={() => setActiveTab('Supplier Enquiries')}
                className="flex items-center justify-center relative overflow-hidden"
                style={{
                  width: '213px',
                  backgroundColor: activeTab === 'Supplier Enquiries' ? '#06153A' : 'transparent',
                  padding: '17px 90px',
                  marginTop: '-1.5px',
                  marginBottom: '-1.5px',
                  borderRadius: '6px'
                }}
              >
                <span
                  style={{
                    fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                    fontWeight: 400,
                    color: activeTab === 'Supplier Enquiries' ? '#FFFFFF' : '#06153A',
                    fontSize: '18px',
                    lineHeight: '27px',
                    letterSpacing: '0',
                    whiteSpace: 'nowrap',
                    textAlign: 'center'
                  }}
                >
                  Supplier Enquiries
                </span>
              </button>
            </div>
            
          </div>
          
        </div>
        <p 
            className="text-[#06153A] text-base mb-8"
            style={{ 
              width: '1360px',
              height: '70px',
              marginTop: '-70px',
              fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
              fontWeight: 400,
              fontSize: '20px',
              letterSpacing: '0.01em'
            }}
          >
            Explore the sections below to find the best way to get in touch with us
          </p>

        {/* Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="/images/image1.jpg"
                alt="Modern Office Conference Room"
                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover rounded-[20px]"
              />
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-[20px] p-6 sm:p-8 shadow-lg">
              <div className="mb-6">
                <p 
                  className="text-[#06153A] text-base mb-6"
                  style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}
                >
                  Have a question or feedback? We're happy to assist! Use the form below to reach out to us for any general inquiries, and our team will get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* First Name and Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label 
                      htmlFor="firstName" 
                      className="block text-[#06153A] text-sm font-medium mb-2"
                      style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06153A] focus:border-transparent"
                      placeholder="Your First Name..."
                      style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}
                      required
                    />
                  </div>
                  <div>
                    <label 
                      htmlFor="lastName" 
                      className="block text-[#06153A] text-sm font-medium mb-2"
                      style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06153A] focus:border-transparent"
                      placeholder="Your Last Name..."
                      style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}
                      required
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-[#06153A] text-sm font-medium mb-2"
                    style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06153A] focus:border-transparent"
                    placeholder="Your Email Address..."
                    style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}
                    required
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label 
                    htmlFor="phone" 
                    className="block text-[#06153A] text-sm font-medium mb-2"
                    style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06153A] focus:border-transparent"
                    placeholder="Your Contact Number..."
                    style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-[#06153A] text-sm font-medium mb-2"
                    style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06153A] focus:border-transparent resize-vertical"
                    placeholder="Your question or feedback..."
                    style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#06153A] text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-[#0a1f4a] transition-colors duration-300"
                  style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 
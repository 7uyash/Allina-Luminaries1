import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  company: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitMessage('Thank you for your interest! We will contact you soon.');
      setFormData({ name: '', email: '', company: '' });
    } catch (error) {
      setSubmitMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-[529px] flex-col items-end gap-[50px] absolute h-[217px] left-[734px] top-[425px] max-md:w-full max-md:items-center max-md:left-0 max-md:top-[480px]">
      <div className="w-[518px] h-[39px] relative max-sm:w-full">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="NAME"
          required
          className="w-full bg-transparent text-[rgba(255,255,255,0.85)] text-base font-normal tracking-[2.56px] p-2.5 border-none outline-none placeholder-[rgba(255,255,255,0.85)] max-sm:text-sm max-sm:tracking-[1.5px]"
        />
        <div className="w-[518px] h-0 absolute bg-white left-0 bottom-0 max-sm:w-full" />
      </div>
      
      <div className="w-[518px] h-[39px] relative max-sm:w-full">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="WORK EMAIL"
          required
          className="w-full bg-transparent text-[rgba(255,255,255,0.85)] text-base font-normal tracking-[2.56px] p-2.5 border-none outline-none placeholder-[rgba(255,255,255,0.85)] max-sm:text-sm max-sm:tracking-[1.5px]"
        />
        <div className="w-[518px] h-0 absolute bg-white left-2.5 bottom-0 max-sm:w-full" />
      </div>
      
      <div className="w-[518px] h-[39px] relative max-sm:w-full">
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleInputChange}
          placeholder="COMPANY NAME"
          required
          className="w-full bg-transparent text-[rgba(255,255,255,0.85)] text-base font-normal tracking-[2.56px] p-2.5 border-none outline-none placeholder-[rgba(255,255,255,0.85)] max-sm:text-sm max-sm:tracking-[1.5px]"
        />
        <div className="w-[518px] h-0 absolute bg-white left-2.5 bottom-0 max-sm:w-full" />
      </div>

      {submitMessage && (
        <div className="text-white text-sm text-center w-full">
          {submitMessage}
        </div>
      )}
    </form>
  );
};

import React, { useState } from 'react';
import { MapPin, Mail, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center fade-in-section">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Get in <span className="text-secondary-400">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to start your next project together? Let's discuss your ideas and how I can help bring your vision to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="fade-in-section">
            <h3 className="text-xl font-display font-semibold mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-dark-600 flex items-center justify-center text-secondary-400 mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Location</h4>
                  <p className="text-gray-400 text-sm">San Francisco, CA</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-dark-600 flex items-center justify-center text-secondary-400 mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Email</h4>
                  <a href="mailto:your.email@example.com" className="text-gray-400 text-sm hover:text-secondary-400 transition-colors">
                    your.email@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-dark-600 flex items-center justify-center text-secondary-400 mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Phone</h4>
                  <a href="tel:+11234567890" className="text-gray-400 text-sm hover:text-secondary-400 transition-colors">
                    +1 (123) 456-7890
                  </a>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-dark-600/30 rounded-lg">
              <h4 className="text-lg font-medium mb-4">
                Let's Build Something Amazing
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                If you have a project in mind or want to explore collaboration opportunities, 
                feel free to reach out. I'm open to freelance work, contract roles, and 
                interesting projects.
              </p>
              <button className="bg-secondary-500 hover:bg-secondary-600 text-dark-800 font-medium py-2.5 px-6 rounded-md transition-colors inline-flex items-center gap-2">
                Let's Talk <Send size={16} />
              </button>
            </div>
          </div>
          
          <div className="fade-in-section">
            <h3 className="text-xl font-display font-semibold mb-6">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-dark-600/50 border ${
                      errors.name ? 'border-red-500' : 'border-dark-500'
                    } rounded-md p-3 text-gray-200 focus:outline-none focus:border-secondary-400 transition-colors`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-dark-600/50 border ${
                      errors.email ? 'border-red-500' : 'border-dark-500'
                    } rounded-md p-3 text-gray-200 focus:outline-none focus:border-secondary-400 transition-colors`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject (Optional)
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-dark-600/50 border border-dark-500 rounded-md p-3 text-gray-200 focus:outline-none focus:border-secondary-400 transition-colors"
                  placeholder="Project Discussion"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full bg-dark-600/50 border ${
                    errors.message ? 'border-red-500' : 'border-dark-500'
                  } rounded-md p-3 text-gray-200 focus:outline-none focus:border-secondary-400 transition-colors resize-none`}
                  placeholder="I'd like to discuss a potential project..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-secondary-500 hover:bg-secondary-600 text-dark-800 font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-dark-900\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                      <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  <span className="flex items-center">
                    Send Message
                    <Send size={16} className="ml-2" />
                  </span>
                )}
              </button>
              
              {submitStatus === 'success' && (
                <div className="mt-4 p-3 bg-green-500/10 border border-green-500/30 text-green-400 rounded-md text-sm">
                  Your message has been sent successfully. I'll get back to you soon!
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 p-3 bg-red-500/10 border border-red-500/30 text-red-400 rounded-md text-sm">
                  There was an error sending your message. Please try again later.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
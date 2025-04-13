import React, {useRef, useState} from 'react';
import {Mail, Phone, Linkedin, Github} from 'lucide-react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import Heading from './Heading';

const isMobile = /iPhone|iPad|iPod|Android/i.test (navigator.userAgent);

const handleContactClick = (type, value) => {
  if (isMobile) {
    if (type === 'phone') {
      window.location.href = `tel:${value}`;
    } else if (type === 'email') {
      window.location.href = `mailto:${value}`;
    }
  } else {
    navigator.clipboard.writeText (value).then (() => {
      toast.success (`${type === 'email' ? 'Email' : 'Phone number'} copied!`, {
        position: 'top-right',
        autoClose: 3000,
        theme: 'dark',
      });
    });
  }
};

const contactLinks = [
  {
    icon: <Mail size={20} />,
    value: 'your@email.com',
    type: 'email',
  },
  {
    icon: <Phone size={20} />,
    value: '+1234567890',
    type: 'phone',
  },
  {
    icon: <Linkedin size={20} />,
    link: 'https://www.linkedin.com/in/',
  },
  {
    icon: <Github size={20} />,
    link: 'https://github.com',
  },
];

const InputField = ({label, type, name, placeholder}) => (
  <div>
    <label htmlFor={name} className="block mb-1 text-[#B2C8BB]">
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      required
      className="w-full bg-[#2a4141] text-[#B2C8BB] p-3 rounded-xl outline-none placeholder-[#A0B4AA]"
    />
  </div>
);

const TextAreaField = ({label, name, placeholder}) => (
  <div>
    <label htmlFor={name} className="block mb-1 text-[#B2C8BB]">
      {label}
    </label>
    <textarea
      id={name}
      name={name}
      placeholder={placeholder}
      rows="5"
      required
      className="w-full bg-[#2a4141] text-[#B2C8BB] p-3 rounded-xl outline-none placeholder-[#A0B4AA]"
    />
  </div>
);

const Contact = () => {
  const form = useRef ();
  const [isSubmitting, setIsSubmitting] = useState (false);

  const sendEmail = e => {
    e.preventDefault ();
    setIsSubmitting (true);

    emailjs
      .sendForm (
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_PUBLIC_KEY'
      )
      .then (
        () => {
          toast.success ('Message sent successfully!');
          form.current.reset ();
          setIsSubmitting (false);
        },
        error => {
          toast.error ('Something went wrong. Please try again.');
          console.error (error.text);
          setIsSubmitting (false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="px-5 sm:px-10 py-16 sm:py-24 text-[#B2C8BB] font-['JetBrains_Mono']"
    >
      <ToastContainer theme="dark" />

      <div className="flex flex-col md:flex-row gap-12">

        <div className="md:w-1/2 flex flex-col justify-between gap-8">
          <Heading heading="Contact Me" />
          <p className="text-xl sm:text-2xl md:text-3xl leading-relaxed">
            Let's build something smart together! Feel free to reach out for
            collaborations, freelance work, or just a tech chat.
          </p>

          <div className="flex flex-wrap gap-6">
            {contactLinks.map (
              (item, index) =>
                item.link
                  ? <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#1C2B2B] p-4 rounded-full border border-[#B2C8BB] hover:bg-[#2a4141] transition"
                    >
                      {item.icon}
                    </a>
                  : <button
                      key={index}
                      onClick={() => handleContactClick (item.type, item.value)}
                      className="bg-[#1C2B2B] p-4 rounded-full border border-[#B2C8BB] hover:bg-[#2a4141] transition"
                    >
                      {item.icon}
                    </button>
            )}
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="md:w-1/2 flex flex-col gap-5"
        >
          <InputField
            label="Name"
            type="text"
            name="user_name"
            placeholder="Name"
          />
          <InputField
            label="Email"
            type="email"
            name="user_email"
            placeholder="Email"
          />
          <TextAreaField label="Message" name="message" placeholder="Message" />

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 bg-[#2a4141] hover:bg-[#3b5656] text-[#B2C8BB] font-semibold py-3 rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

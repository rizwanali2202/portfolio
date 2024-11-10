import React, { useEffect } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { BsTelephone } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const Contact = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="contact" className="container pt-32">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Left Section - Contact Info */}
        <div className="space-y-8">
          <h2
            className="text-5xl text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Get in touch
          </h2>
          <p
            className="text-white text-[18px] pt-2"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            Drop me a line, give me a call, or send me a message by submitting the form.
          </p>
          <div
            className="flex gap-3 items-center text-white"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <HiOutlineMail size={30} />
            Rizwanali2202@gmail.com
          </div>
          <div
            className="flex gap-3 items-center text-white"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-delay="800"
          >
            <BsTelephone size={30} /> (+92) 0900-78601
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="space-y-8">
          <div
            className="flex flex-col gap-1"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            <label htmlFor="name" className="text-white">
              Name
            </label>
            <input
              type="text"
              className="h-[40px] bg-transparent border border-blue-500 text-white placeholder-gray-300"
              id="name"
              placeholder="Your name"
            />
          </div>
          <div
            className="flex flex-col gap-1"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-delay="1200"
          >
            <label htmlFor="email" className="text-white">
              Email
            </label>
            <input
              type="email"
              className="h-[40px] bg-transparent border  border-purple-500 text-white placeholder-gray-300"
              id="email"
              placeholder="Your email"
            />
          </div>
          <div
            className="flex flex-col gap-1"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-delay="1400"
          >
            <label htmlFor="message" className="text-white">
              Message
            </label>
            <textarea
              className="bg-transparent border border-pink-500 text-white placeholder-gray-300"
              id="message"
              rows={8}
              placeholder="Your message"
            ></textarea>
          </div>
            <button
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-2 px-6 text-white mt-4"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-delay="1600"
            >
             Send
            </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
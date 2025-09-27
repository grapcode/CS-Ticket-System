import React from 'react';
import x from '../assets/x.svg';
import i from '../assets/i.svg';
import f from '../assets/f.svg';
import m from '../assets/m.svg';

const Footer = () => {
  return (
    //  ⚡ Footer section

    <footer className="bg-black text-gray-300 py-12 px-3 ">
      <section className="grid md:grid-cols-5 gap-8 container mx-auto ">
        <div>
          <h3 className="text-white font-semibold mb-2">CS — Ticket System</h3>
          <p className="text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Company</h4>
          <ul className="space-y-1 text-sm">
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Contact Salad</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Services</h4>
          <ul className="space-y-1 text-sm">
            <li>Products & Services</li>
            <li>Customer Stories</li>
            <li>Download Apps</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Information</h4>
          <ul className="space-y-1 text-sm">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Join Us</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Social Links</h4>
          <ul className="space-y-1 text-sm">
            <li className="flex ">
              <img
                className="bg-white w-5 h-5 mr-2 rounded-full p-[2px] mb-2"
                src={x}
                alt=""
              />
              CS — Ticket System
            </li>
            <li className="flex">
              <img
                className="bg-white w-5 h-5 mr-2 rounded-full p-[2px] mb-2"
                src={i}
                alt=""
              />
              CS — Ticket System
            </li>
            <li className="flex">
              <img
                className="bg-white w-5 h-5 mr-2 rounded-full p-[2px] mb-2"
                src={f}
                alt=""
              />
              CS — Ticket System
            </li>
            <li className="flex">
              <img
                className="bg-white w-5 h-5 mr-2 rounded-full p-[2px] mb-2"
                src={m}
                alt=""
              />
              support@cst.com
            </li>
          </ul>
        </div>
      </section>
      <div className="text-left md:text-center text-gray-400 text-sm mt-8">
        © 2025 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

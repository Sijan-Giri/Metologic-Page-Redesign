// components/Footer.tsx
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#0A1D37] to-[#12294C] text-white px-6 py-10 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Contact */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-bold text-2xl">
              M
            </div>
            <div>
              <h2 className="font-bold text-xl">MetaLogic</h2>
              <p className="text-sm text-gray-300">Software Private Limited</p>
            </div>
          </div>
          <p className="text-sm">📍 Saptakhel, Lalitpur (Head office)</p>
          <p className="text-sm">📞 +977 9851353599</p>
          <p className="text-sm">✉️ info@metalogic.com.np</p>
        </motion.div>

        {/* Company */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className="font-semibold text-white mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer transition-all duration-300">
              Feedback
            </li>
            <li className="hover:text-white cursor-pointer transition-all duration-300">
              Partnership
            </li>
            <li className="hover:text-white cursor-pointer transition-all duration-300">
              Terms and Conditions
            </li>
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="font-semibold text-white mb-3">Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Web & Mobile Development</li>
            <li>Custom Software Solutions</li>
            <li>UI/UX Design</li>
            <li>Cloud & DevOps</li>
            <li>Blockchain Integration</li>
            <li>QA & Testing</li>
            <li>Maintenance & Support</li>
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="font-semibold text-white mb-3">
            Join us on Social Media
          </h3>
          <div className="flex gap-4 text-lg">
            <a
              href="#"
              className="bg-white text-black p-2 rounded-full hover:scale-110 transition-transform"
            >
              <FaWhatsapp />
            </a>
            <a
              href="#"
              className="bg-white text-black p-2 rounded-full hover:scale-110 transition-transform"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-white text-black p-2 rounded-full hover:scale-110 transition-transform"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="bg-white text-black p-2 rounded-full hover:scale-110 transition-transform"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="text-center mt-10 text-gray-400 text-sm">
        © {new Date().getFullYear()} MetaLogic. All rights reserved.
      </div>
    </footer>
  );
}

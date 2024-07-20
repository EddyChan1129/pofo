import logo from "../assets/logo.png";
import { SOCIAL_MEDIA_LINKS } from "../constants";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div className="pb-8 mt-20 bg-slate-300 text-slate-700">
      <div className="flex items-center justify-center">
        <motion.figure
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <img src={logo} alt="log" width={200} className="mb-2" />
        </motion.figure>
      </div>
      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <motion.a
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 * index }}
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl"
          >
            {link.icon}
          </motion.a>
        ))}
      </div>
      <p className="mt-8 text-center text-sm tracking-wide text-slate-700">
        &copy; compileTab. All rights reserved.
      </p>
    </div>
  );
}

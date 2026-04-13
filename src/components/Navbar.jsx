import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

const links = ["Home", "Products", "Why Us", "About", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (item) => {
    setMenuOpen(false);
    const id = item.toLowerCase().replace(" ", "-");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={styles.inner}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>
              <Zap size={16} strokeWidth={2.5} />
            </div>
            <span>
              Type A
              <span className={styles.logoAccent}> House Of Electronics</span>
            </span>
          </div>

          <ul className={styles.links}>
            {links.map((link) => (
              <li key={link}>
                <button className={styles.link} onClick={() => handleNav(link)}>
                  {link}
                </button>
              </li>
            ))}
          </ul>

          <button
            className={`btn-primary ${styles.ctaBtn}`}
            onClick={() => handleNav("Contact")}
          >
            Get in Touch
          </button>

          <button
            className={styles.burger}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {links.map((link, i) => (
              <motion.button
                key={link}
                className={styles.mobileLink}
                onClick={() => handleNav(link)}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                {link}
              </motion.button>
            ))}
            <button
              className={`btn-primary`}
              style={{ width: "100%", justifyContent: "center", marginTop: 8 }}
              onClick={() => handleNav("Contact")}
            >
              Get in Touch
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Star } from "lucide-react";
import styles from "./Hero.module.css";

const floatVariants = {
  animate: (i) => ({
    y: [0, -18, 0],
    x: [0, i % 2 === 0 ? 4 : -4, 0],
    rotate: [0, i % 2 === 0 ? 4 : -4, 0],
    transition: {
      duration: 4 + i * 0.8,
      repeat: Infinity,
      ease: "easeInOut",
      delay: i * 0.4,
    },
  }),
};

const shapes = [
  { size: 320, top: "-8%", left: "-6%", opacity: 0.12, i: 0 },
  { size: 200, top: "10%", right: "5%", opacity: 0.18, i: 1 },
  { size: 140, bottom: "15%", left: "8%", opacity: 0.14, i: 2 },
  { size: 100, top: "50%", right: "20%", opacity: 0.1, i: 3 },
  { size: 60, top: "25%", left: "40%", opacity: 0.08, i: 4 },
];

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* Background shapes */}
      <div className={styles.shapesLayer}>
        {shapes.map((s, i) => (
          <motion.div
            key={i}
            className={styles.shape}
            style={{
              width: s.size,
              height: s.size,
              top: s.top,
              left: s.left,
              right: s.right,
              bottom: s.bottom,
              opacity: s.opacity,
            }}
            variants={floatVariants}
            animate="animate"
            custom={s.i}
          />
        ))}
        <div className={styles.gradientOrb1} />
        <div className={styles.gradientOrb2} />
      </div>

      <div className={`container ${styles.content}`}>
        {/* Badge */}
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Star size={12} fill="currentColor" />
          Premium Electronics — Trusted by thousands
        </motion.div>

        {/* Headline */}
        <motion.h1
          className={styles.headline}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Upgrade Your
          <br />
          <span className={styles.gradient}>Electronics</span>
          <br />
          Experience
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className={styles.sub}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          Type A House of Electronics brings you the finest selection of phones,
          laptops, TVs, and accessories — genuine products, unbeatable prices,
          delivered with care.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className={styles.ctas}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="https://wa.me/23200000000"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Shop Now <ArrowRight size={16} />
          </a>
          <button
            className="btn-secondary"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <MessageCircle size={16} /> Contact Us
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className={styles.stats}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
        >
          {[
            { val: "500+", label: "Products" },
            { val: "2K+", label: "Happy Customers" },
            { val: "5★", label: "Rating" },
          ].map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statVal}>{s.val}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          className={styles.scrollDot}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}

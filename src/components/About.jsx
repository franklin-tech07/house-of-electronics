import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import styles from './About.module.css';

const points = [
  'Locally owned and operated in Freetown, Sierra Leone',
  'Established with a mission to make quality tech accessible',
  'Trained and knowledgeable team to guide your purchase',
  'Trusted warranty and after-sales support on all products',
];

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <div className={styles.layout}>
          {/* Image side */}
          <motion.div
            className={styles.imageSide}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.imageFrame}>
              <div className={styles.imagePlaceholder}>
                <div className={styles.placeholderInner}>
                  <div className={styles.placeholderIcon}>🏪</div>
                  <p>Type A House of Electronics</p>
                  <span>Freetown, Sierra Leone</span>
                </div>
              </div>
              {/* Floating badge */}
              <motion.div
                className={styles.floatBadge}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className={styles.badgeDot} />
                Since 2020
              </motion.div>
              {/* Floating stat */}
              <motion.div
                className={styles.floatStat}
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <strong>2,000+</strong>
                <span>Happy Customers</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            className={styles.textSide}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-tag">Our Story</span>
            <h2 className="section-heading">
              Built on Trust,<br />Powered by <span>Technology</span>
            </h2>
            <p className={styles.intro}>
              Type A House of Electronics was founded with a simple belief: everyone deserves 
              access to premium, genuine electronics at fair prices. We have grown from a small 
              local shop into Freetown's trusted destination for quality tech.
            </p>

            <ul className={styles.points}>
              {points.map((pt, i) => (
                <motion.li
                  key={i}
                  className={styles.point}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                >
                  <CheckCircle2 size={18} className={styles.check} />
                  <span>{pt}</span>
                </motion.li>
              ))}
            </ul>

            <motion.a
              href="https://wa.me/23200000000"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ marginTop: 36, display: 'inline-flex' }}
              whileHover={{ scale: 1.03 }}
            >
              Learn More About Us
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

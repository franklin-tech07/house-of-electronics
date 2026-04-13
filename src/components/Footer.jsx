import { motion } from 'framer-motion';
import { Zap, Share2, AtSign, PlayCircle, Radio } from 'lucide-react';
import styles from './Footer.module.css';

const socials = [
  { Icon: Share2, href: '#', label: 'Facebook' },
  { Icon: AtSign, href: '#', label: 'Instagram' },
  { Icon: Radio, href: '#', label: 'Twitter/X' },
  { Icon: PlayCircle, href: '#', label: 'YouTube' },
];

const links = {
  Shop: ['Smartphones', 'Smart TVs', 'Laptops', 'Accessories'],
  Company: ['About Us', 'Contact', 'Careers', 'Blog'],
  Support: ['FAQ', 'Warranty', 'Returns', 'Track Order'],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}><Zap size={16} strokeWidth={2.5} /></div>
              <span>Type<span className={styles.accent}>A</span></span>
            </div>
            <p className={styles.brandDesc}>
              Freetown's trusted destination for premium, genuine electronics. Quality tech, accessible to all.
            </p>
            <div className={styles.socials}>
              {socials.map(({ Icon, href, label }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  className={styles.social}
                  title={label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon size={16} strokeWidth={1.8} />
                </motion.a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([cat, items]) => (
            <div key={cat} className={styles.col}>
              <h4 className={styles.colTitle}>{cat}</h4>
              <ul className={styles.colLinks}>
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className={styles.colLink}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Type A House of Electronics. All rights reserved.</p>
          <div className={styles.legal}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

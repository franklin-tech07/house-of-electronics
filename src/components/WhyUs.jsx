import { motion } from 'framer-motion';
import { BadgeDollarSign, ShieldCheck, Truck, HeartHandshake } from 'lucide-react';
import styles from './WhyUs.module.css';

const features = [
  {
    icon: BadgeDollarSign,
    title: 'Affordable Prices',
    desc: 'Competitive pricing with flexible payment options. Get the best electronics without breaking the bank.',
  },
  {
    icon: ShieldCheck,
    title: 'Genuine Products',
    desc: '100% authentic, verified products from authorized distributors and trusted global brands.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    desc: 'Quick and reliable delivery across Freetown and surrounding areas. Your order, your timeline.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer Support',
    desc: 'Dedicated after-sales service and technical support. We are here for you before and after every purchase.',
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className={styles.section}>
      {/* Background accent */}
      <div className={styles.bgAccent} />

      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Our Promise</span>
          <h2 className="section-heading">
            Why Choose <span>Type A?</span>
          </h2>
          <p className="section-sub">
            We are not just a store — we are your electronics partner. Here is what sets us apart.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                className={styles.card}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.02, transition: { duration: 0.25 } }}
              >
                <motion.div
                  className={styles.iconBox}
                  whileHover={{ rotate: [0, -8, 8, 0], transition: { duration: 0.5 } }}
                >
                  <Icon size={24} strokeWidth={1.8} />
                </motion.div>
                <h3 className={styles.title}>{f.title}</h3>
                <p className={styles.desc}>{f.desc}</p>
                <div className={styles.number}>0{i + 1}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

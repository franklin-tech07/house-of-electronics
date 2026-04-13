import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Smartphone, Tv, Headphones, Laptop, ArrowUpRight } from 'lucide-react';
import styles from './Products.module.css';

const products = [
  {
    icon: Smartphone,
    name: 'Smartphones',
    desc: 'Latest flagship & mid-range phones from top global brands. Unlocked and ready to go.',
    tags: ['iPhone', 'Samsung', 'Tecno'],
    color: '#0EA5E9',
    bg: 'linear-gradient(135deg, #E0F2FE, #BAE6FD)',
  },
  {
    icon: Tv,
    name: 'Smart TVs',
    desc: 'Crystal-clear displays from 32" to 85". Stream, game, and relax in stunning quality.',
    tags: ['4K UHD', 'OLED', 'Smart'],
    color: '#0284C7',
    bg: 'linear-gradient(135deg, #BAE6FD, #7DD3FC)',
  },
  {
    icon: Laptop,
    name: 'Laptops',
    desc: 'Powerful machines for work, creativity, and gaming. From ultrabooks to pro workstations.',
    tags: ['Apple', 'Dell', 'HP'],
    color: '#0369A1',
    bg: 'linear-gradient(135deg, #E0F2FE, #BAE6FD)',
  },
  {
    icon: Headphones,
    name: 'Accessories',
    desc: 'Complete your setup with earbuds, chargers, cases, cables, and premium accessories.',
    tags: ['AirPods', 'Chargers', 'Cases'],
    color: '#0EA5E9',
    bg: 'linear-gradient(135deg, #BAE6FD, #E0F2FE)',
  },
];

function ProductCard({ product, index }) {
  const Icon = product.icon;
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] } }}
    >
      <div className={styles.iconWrap} style={{ background: product.bg }}>
        <Icon size={28} color={product.color} strokeWidth={1.8} />
      </div>

      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{product.name}</h3>
        <p className={styles.cardDesc}>{product.desc}</p>
        <div className={styles.tags}>
          {product.tags.map((t) => (
            <span key={t} className={styles.tag}>{t}</span>
          ))}
        </div>
      </div>

      <motion.div
        className={styles.cardAction}
        whileHover={{ x: 2 }}
      >
        <a href="https://wa.me/23200000000" target="_blank" rel="noreferrer" className={styles.cardLink}>
          View Products <ArrowUpRight size={15} />
        </a>
      </motion.div>

      {/* Glow on hover */}
      <div className={styles.cardGlow} />
    </motion.div>
  );
}

export default function Products() {
  return (
    <section id="products" className={styles.section}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Our Collection</span>
          <h2 className="section-heading">
            Featured <span>Products</span>
          </h2>
          <p className="section-sub">
            Explore our curated selection of top-tier electronics — sourced from trusted brands worldwide.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {products.map((p, i) => (
            <ProductCard key={p.name} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

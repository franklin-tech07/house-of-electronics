import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Send, MapPin, Mail } from "lucide-react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(`Hi, I'm ${form.name}.\n\n${form.message}`);
    window.open(`https://wa.me/23272263135?text=${msg}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-heading">
            Let's Start a <span>Conversation</span>
          </h2>
          <p className="section-sub">
            Have a question or ready to order? Reach out via WhatsApp or fill in
            the form below.
          </p>
        </motion.div>

        <div className={styles.layout}>
          {/* Info Panel */}
          <motion.div
            className={styles.infoPan}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Contact Information</h3>

              <div className={styles.infoItems}>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className={styles.infoLabel}>Phone</span>
                    <span className={styles.infoVal}>+232 00 000 000</span>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className={styles.infoLabel}>Email</span>
                    <span className={styles.infoVal}>hello@typea.sl</span>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className={styles.infoLabel}>Location</span>
                    <span className={styles.infoVal}>
                      Freetown, Sierra Leone
                    </span>
                  </div>
                </div>
              </div>

              <motion.a
                href="https://wa.me/23272263135"
                target="_blank"
                rel="noreferrer"
                className={styles.waBtn}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg viewBox="0 0 24 24" className={styles.waIcon}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat on WhatsApp
              </motion.a>

              {/* Decorative */}
              <div className={styles.infoDeco} />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label className={styles.label}>Your Name</label>
                <input
                  className={styles.input}
                  type="text"
                  name="name"
                  placeholder="e.g. Franklin"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Message</label>
                <textarea
                  className={styles.textarea}
                  name="message"
                  placeholder="I'm interested in..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                />
              </div>
              <motion.button
                type="submit"
                className={`btn-primary ${styles.submitBtn}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                {sent ? (
                  "✓ Sent via WhatsApp!"
                ) : (
                  <>
                    <Send size={16} /> Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

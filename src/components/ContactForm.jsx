import { useState } from 'react';
import { motion } from 'motion/react';

const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;

const EMPTY = { name: '', email: '', message: '' };

const validate = ({ name, email, message }) => {
  const errors = {};
  if (!name.trim()) errors.name = 'Escribe tu nombre.';
  if (!email.trim()) errors.email = 'Escribe tu email.';
  else if (!/^\S+@\S+\.\S+$/.test(email)) errors.email = 'El email no parece válido.';
  if (message.trim().length < 10) errors.message = 'Cuéntame un poco más (mínimo 10 caracteres).';
  return errors;
};

const fieldClass =
  'w-full bg-surface-container border-none rounded-lg focus:ring-2 focus:ring-primary/40 text-on-surface p-4';
const labelClass =
  'block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2';

export const ContactForm = () => {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    if (!ENDPOINT) {
      console.error('Falta VITE_FORM_ENDPOINT en el archivo .env');
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setValues(EMPTY);
      setStatus('success');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div>
        <label htmlFor="contact-name" className={labelClass}>Tu Nombre</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={handleChange}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'contact-name-error' : undefined}
          className={fieldClass}
          placeholder="Ana Silva"
        />
        {errors.name && (
          <p id="contact-name-error" className="text-sm text-red-600 mt-1">{errors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="contact-email" className={labelClass}>Email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'contact-email-error' : undefined}
          className={fieldClass}
          placeholder="tu@email.com"
        />
        {errors.email && (
          <p id="contact-email-error" className="text-sm text-red-600 mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>Mensaje</label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          value={values.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          className={fieldClass}
          placeholder="Cuéntame sobre tu proyecto..."
        />
        {errors.message && (
          <p id="contact-message-error" className="text-sm text-red-600 mt-1">{errors.message}</p>
        )}
      </div>

      {/* Honeypot anti-spam: invisible para personas, los bots lo rellenan */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        onChange={handleChange}
      />

      <motion.button
        type="submit"
        disabled={status === 'sending'}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-4 bg-primary text-white font-bold rounded-full hover:opacity-90 transition-all shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
      </motion.button>

      <div role="status" aria-live="polite" className="text-sm">
        {status === 'success' && (
          <p className="text-green-700">¡Mensaje enviado! Te responderé lo antes posible.</p>
        )}
        {status === 'error' && (
          <p className="text-red-600">
            No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme a ramoss.anakarina@gmail.com.
          </p>
        )}
      </div>
    </form>
  );
};

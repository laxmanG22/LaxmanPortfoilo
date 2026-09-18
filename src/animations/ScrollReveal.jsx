import { motion } from 'motion/react';

/**
 * ScrollReveal smoothly fades & slides in children when entering viewport.
 */
export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  y = 24,
  direction = 'up',
  once = true,
  ...props
}) {
  const initialY = direction === 'up' ? y : direction === 'down' ? -y : 0;
  const initialX = direction === 'left' ? y : direction === 'right' ? -y : 0;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: initialY, x: initialX }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin: '-60px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}


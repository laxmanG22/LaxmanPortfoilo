import { motion } from 'motion/react';

/**
 * TextReveal splits text into words/lines and reveals them with a cinematic mask transition.
 */
export default function TextReveal({
  text,
  className = '',
  wordClassName = '',
  delay = 0,
  stagger = 0.04,
  as = 'div'
}) {
  const words = text.split(' ');
  const Component = motion[as] || motion.div;

  const container = {
    hidden: { opacity: 0 },
    visible: () => ({
      opacity: 1,
      transition: { staggerChildren: stagger, delayChildren: delay }
    })
  };

  const child = {
    hidden: {
      opacity: 0,
      y: '100%',
      transition: {
        type: 'spring',
        damping: 14,
        stiffness: 100
      }
    },
    visible: {
      opacity: 1,
      y: '0%',
      transition: {
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <Component
      className={`overflow-hidden flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden mr-[0.25em] pb-[0.1em]">
          <motion.span variants={child} className={`inline-block ${wordClassName}`}>
            {word}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}


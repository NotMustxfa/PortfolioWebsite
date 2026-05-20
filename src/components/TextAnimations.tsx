import { motion } from 'framer-motion';

interface RevealTextProps {
  children: string;
  delay?: number;
  stagger?: number;
  className?: string;
}

export function RevealText({ 
  children, 
  delay = 0, 
  stagger = 0.05,
  className = '' 
}: RevealTextProps) {
  const words = children.split(' ');

  return (
    <div className={className}>
      {words.map((word, idx) => (
        <motion.span
          key={`${word}-${idx}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: delay + idx * stagger,
            duration: 0.5,
            ease: 'easeOut'
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

interface CharacterRevealProps {
  children: string;
  delay?: number;
  className?: string;
}

export function CharacterReveal({ 
  children, 
  delay = 0,
  className = '' 
}: CharacterRevealProps) {
  const characters = children.split('');

  return (
    <div className={className}>
      {characters.map((char, idx) => (
        <motion.span
          key={`${char}-${idx}`}
          initial={{ opacity: 0, y: 10, rotateZ: -10 }}
          whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: delay + idx * 0.03,
            duration: 0.4,
            ease: [0.34, 1.56, 0.64, 1]
          }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );
}

const animate = ({ duration }: { duration?: number; }) => {
  return {
    initial: {
      opacity: 0,
      y: 72,
    },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    transition: {
      duration: duration || 0.5
    },
    viewport: {
      once: true,
    }
  }
}

export default animate;

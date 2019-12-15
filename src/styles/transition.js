import posed from 'react-pose';

const Transition = posed.div({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    scaleY: 1,
    duration: 700,
    ease: [0.01, 0.64, 0.99, 0.56],
  },
});

export default Transition;

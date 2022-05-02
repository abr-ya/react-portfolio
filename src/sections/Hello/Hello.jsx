import { motion } from 'framer-motion';
import { images } from '../../constants';
import Wrapper from '../../components/Wrapper/Wrapper';
import './hello.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const circles = [images.react, images.redux, images.sass];
const alts = ['react', 'redux', 'sass'];
const sites = ['https://reactjs.org/', 'https://react-redux.js.org/', 'https://sass-lang.com/'];

function Hello() {
  return (
    <div className="app__hello app__flex">
      <motion.div
        whileInView={{ x: [-200, 0], opacity: [0, 1] }}
        transition={{ duration: 0.8 }}
        className="app__hello-info"
      >
        <div className="app__hello-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">AbrYa</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">React Developer</p>
            <p className="p-text">and ... ???</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__hello-circles"
      >
        {circles.map((circle, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <a href={sites[index]} target="_blank" className="app__flex" rel="noopener noreferrer">
              <img src={circle} alt={`${alts[index]}_logo`} />
            </a>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Wrapper(Hello, 'home');

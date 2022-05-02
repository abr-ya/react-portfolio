/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import './about.scss';

function About({ data }) {
  return (
    <>
      <h2 className="head-text">
        I Know that
        {' '}
        <span>Good Apps</span>
        {' '}
        <br />
        means
        {' '}
        <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {data.map((about) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.id}
          >
            {about.img && <img src={about.img} alt={about.title} />}
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default About;

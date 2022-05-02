import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './about.scss';
import { images } from '../../constants';

const tempData = [
  {
    id: 1,
    title: 'Первый заголовок',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, mollitia!',
    imgUrl: images.about01,
  },
  {
    id: 2,
    title: 'Второй заголовок',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, mollitia!',
    imgUrl: images.about02,
  },
  {
    id: 3,
    title: 'Третий заголовок',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, mollitia!',
    imgUrl: images.about03,
  },
];

export default function About() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(tempData);
  }, []);

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
            {about.imgUrl && <img src={about.imgUrl} alt={about.title} />}
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

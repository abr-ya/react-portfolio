import { useState, useEffect } from 'react';
import { urlForImg, client } from '../../services/sanity';
import About from './About';
import Loader from '../../components/Loader/Loader';

export default function AboutContainer() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"] | order(title)';

    client.fetch(query).then((res) => {
      // console.log(res);
      const filteredData = (res.map(({
        _id, title, description, imgUrl,
      }) => ({
        id: _id,
        title,
        description,
        img: urlForImg(imgUrl),
      })));
      setData(filteredData);
      setLoading(false);
    });
  }, []);

  if (loading) return <Loader />;

  return <About data={data} />;
}

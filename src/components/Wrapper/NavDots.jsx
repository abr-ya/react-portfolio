/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { menuItems } from '../../constants';

// eslint-disable-next-line react/prop-types
function NavDots({ active }) {
  return (
    <div className="app__navigation">
      {menuItems.map((item) => (
        <a
          href={`#${item}`}
          key={item}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: '#313BAC' } : {}}
        />
      ))}
    </div>
  );
}

export default NavDots;

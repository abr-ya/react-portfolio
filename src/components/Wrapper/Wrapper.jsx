import NavDots from './NavDots';
import Copy from './Copy';

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      {/* блок соцсетей */}
      <div className="app__wrapper app__flex">
        <Component />
        <Copy />
      </div>
      <NavDots active={idName} />
    </div>
  );
};

export default AppWrap;

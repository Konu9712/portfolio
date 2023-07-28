import { useScroll, animated } from "@react-spring/web";

import styles from "./styles.module.scss";
// import './module.css'

export const Circle = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="container">
      <div className={styles.animated__layers}>
        <animated.div
          className={styles.dot}
          style={{
            clipPath: scrollYProgress.to((val) => `circle(${val * 100}%)`),
          }}
        ></animated.div>
      </div>
    </div>
  );
};

import { useState, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';

const calc = (x, y, rect) => [
  -(y - rect.top - rect.height / 2) / 5,
  (x - rect.left - rect.width / 2) / 5,
  1.4,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Card = () => {
  const ref = useRef(null);
  const [xys, set] = useState([0, 0, 1]);
  const config = {
    mass: 1,
    tension: 170,
    friction: 26,
    clamp: false,
    precision: 0.01,
    velocity: 0,
  };
  const props = useSpring({ xys, config });

  return (
    <div ref={ref}>
      <animated.div
        style={{ transform: props.xys.to(trans) }}
        onMouseLeave={() => set([0, 0, 1])}
        onMouseMove={(e) => {
          const rect = ref.current.getBoundingClientRect();
          set(calc(e.clientX, e.clientY, rect));
        }}
      >
        <div className='flex flex-col items-start justify-items-center space-y-10 py-10 px-8 rounded-lg bg-gray-regular'>
          <div className='text-4xl text-black'>Project Title</div>
          <div className='text-2xl text-black'>01/04/2021</div>
          <div className='text-lg text-black'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Id leo
            in vitae turpis. Arcu cursus vitae congue mauris. Risus at ultrices
            mi tempus imperdiet. Scelerisque felis imperdiet proin fermentum leo
            vel orci. Velit euismod in pellentesque massa placerat duis. Enim
            nunc faucibus a pellentesque sit amet porttitor eget. Volutpat
            blandit aliquam etiam erat velit scelerisque in. Volutpat lacus
            laoreet non curabitur gravida arcu ac. Gravida neque convallis a
            cras semper auctor neque vitae. Elementum eu facilisis sed odio
            morbi quis. Posuere urna nec tincidunt praesent semper. Vitae tortor
            condimentum lacinia quis vel eros donec ac. Sit amet consectetur
            adipiscing elit ut aliquam purus sit amet.
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default Card;

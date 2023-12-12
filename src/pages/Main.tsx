import React, { useState } from 'react';
import logo from '../path14l.png';
import back from '../tlo.png';
import styles from './Main.module.css';

const Main: React.FC = () => {
  const [activeClass, setActiveClass] = useState<string>('');
  const [brightnessLvl, setBrightnesLvl] = useState<number>(0.2);

  const startFunction = () => {
    const intervalId = setInterval(() => {
      setBrightnesLvl((prevBrig) => (prevBrig === 0.2 ? 1 : 0.2));
    }, 25);

    setTimeout(() => {
      clearInterval(intervalId);
      setBrightnesLvl(1);
    }, 3000);

    setTimeout(() => {
      setActiveClass('active');
    }, 1500);
  };

  return (
    <div className={styles.wrap} onClick={startFunction}>
      <img
        src={back}
        alt=''
        width={'100%'}
        height={'100%'}
        className={styles.background}
        style={{ filter: `brightness(${brightnessLvl})` }}
      />
      <a
        href='https://youtu.be/VnOzxBr4Qmo'
        target='_blank'
        rel='noreferrer'
        className={activeClass}
        style={{ filter: `brightness(${brightnessLvl})` }}
      >
        <img src={logo} width={'auto'} height={'500px'} alt='City of Lights' />
      </a>
    </div>
  );
};

export default Main;

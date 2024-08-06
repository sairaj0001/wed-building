// Timeline.js

import React, { useEffect, useState } from 'react';
import styles from '../styles/Components/Timeline.module.css';

const Timeline = () => {

  const TimelineData = [
    {
      year: 'CONTRACT',
      title: 'Lorem ipsum dolor sit',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.',
      bgUrl: 'https://placeimg.com/801/801/nature',
    },
    {
      year: 'SPECIFICATIONS',
      title: 'Vestibulum laoreet lorem',
      description: 'Suspendisse potenti. Sed sollicitudin eros lorem, eget accumsan risus dictum id. Maecenas dignissim ipsum vel mi rutrum egestas. Donec mauris nibh, facilisis ut hendrerit vel, fringilla sed felis. Morbi sed nisl et arcu.',
      bgUrl: 'https://placeimg.com/802/802/nature',
    },
    {
      year: 'MISSION',
      title: 'Phasellus mauris elit',
      description: 'Mauris cursus magna at libero lobortis tempor. Suspendisse potenti. Aliquam interdum vulputate neque sit amet varius. Maecenas ac pulvinar nisi. Fusce vitae nunc ultrices, tristique dolor at, porttitor dolor. Etiam id cursus arcu, in dapibus nibh. Pellentesque non porta leo. Nulla eros odio, egestas quis efficitur vel, pretium sed.',
      bgUrl: 'https://placeimg.com/803/803/nature',
    },
    {
      year: 'DELIVERY',
      title: 'Mauris vitae nunc elem',
      description: 'Suspendisse ac mi at dolor sodales faucibus. Nunc sagittis ornare purus non euismod. Donec vestibulum efficitur tortor, eget efficitur enim facilisis consequat. Vivamus laoreet laoreet elit. Ut ut varius metus, bibendum imperdiet ex. Curabitur diam quam, blandit at risus nec, pulvinar porttitor lorem. Pellentesque dolor elit.',
      bgUrl: 'https://placeimg.com/800/800/nature',
    },
    {
      year: 'GUARANTEE',
      title: 'Mauris vitae nunc elem',
      description: 'Suspendisse ac mi at dolor sodales faucibus. Nunc sagittis ornare purus non euismod. Donec vestibulum efficitur tortor, eget efficitur enim facilisis consequat. Vivamus laoreet laoreet elit. Ut ut varius metus, bibendum imperdiet ex. Curabitur diam quam, blandit at risus nec, pulvinar porttitor lorem. Pellentesque dolor elit.',
      bgUrl: 'https://placeimg.com/800/800/nature',
    },
  ]

  return (

    <div className={styles.tlConatiner}>
      <div className={styles.tlHeader}>Timeline of Progress</div>
      <section id="timeline" className={styles.timeline}>
        {TimelineData.map((item, index) => (
          <div className={styles.tlItem} key={index}>
            <div className={styles.tlBg} style={{ backgroundImage: `url(${item.bgUrl})` }}></div>
            <div className={styles.tlYear}>
              <p className={`${styles.f2}`}>{item.year}</p>
            </div>
            <div className={styles.tlContent}>
              <h1 className={`${styles.f3} ${styles.textAccent} ${styles.ttu}`}>{item.title}</h1>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Timeline;

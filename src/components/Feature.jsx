// src/components/Features.jsx
import React from 'react';
import styles from '../styles/Components/Features.module.css';

const Features = () => {
  return (
    <div className='FeaturesContainer'>
      <div className={styles.bg}>
        <h1>Services</h1>
      </div>
      <div className={styles.featureSection}>
        <div className={`${styles.featureItem} ${styles.large}`}>
          <video
            autoPlay
            loop
            playsInline
            muted
            src="https://res.cloudinary.com/durdzswls/video/upload/q_90/v1/services/strategy-services.webm?_a=DATAdtAAZAA0"
            type="video/webm"
            controls
          ></video>
        </div>
        <div className={`${styles.featureItem} ${styles.first}`}>
          <div className={styles.title}>Gain Visibility</div>
          <div className={styles.tag}>Tagline</div>
          <div className={styles.imageGrid}>
            <img
              src="https://assets-global.website-files.com/63f99b0d7ca2c4351e434a5a/64031d1427be9b39cdb1eaf2_Group%20108.png"
              alt="Grid Image"
            />
            <img
              src="https://assets-global.website-files.com/63f99b0d7ca2c4351e434a5a/64031d1427be9b39cdb1eaf2_Group%20108.png"
              alt="Grid Image"
            />
            <img
              src="https://assets-global.website-files.com/63f99b0d7ca2c4351e434a5a/64031d1427be9b39cdb1eaf2_Group%20108.png"
              alt="Grid Image"
            />
          </div>
          <div className={styles.description}>
            <ul className={styles.descriptionList}>
              <li>
                <img
                  src="https://img.icons8.com/?size=100&id=12404&format=png&color=000000"
                  alt="Tick Mark"
                /> Item 1 Description
              </li>
              <li>
                <img
                  src="https://img.icons8.com/?size=100&id=12404&format=png&color=000000"
                  alt="Tick Mark"
                /> Item 2 Description
              </li>
              <li>
                <img
                  src="https://img.icons8.com/?size=100&id=12404&format=png&color=000000"
                  alt="Tick Mark"
                /> Item 3 Description
              </li>
            </ul>
          </div>
        </div>
        <div class={styles.mini}>
        <div className={styles.featureItem2}>
          <div className={styles.subtitle}>Subtitle</div>
          <div className={styles.imageGrid}>
            <img
              src="https://assets-global.website-files.com/63f99b0d7ca2c4351e434a5a/64031e804b5726d60273b637_Group%20121.svg"
              alt="Grid Image"
            />
            <img
              src="https://assets-global.website-files.com/63f99b0d7ca2c4351e434a5a/642497b68d226f59903b90c0_ghj.svg"
              alt="Grid Image"
            />
            <img
              src="https://assets-global.website-files.com/63f99b0d7ca2c4351e434a5a/64031ee3a2b65345f04771e0_Group.svg"
              alt="Grid Image"
            />
          </div>
          <div className={styles.description}>Description text goes here.</div>
          </div>
        <div className={styles.featureItem2}>
          <div className={styles.subtitle}>Subtitle</div>
          <div className={styles.description}>Description text goes here.</div>
        </div>
        </div>
        <div className={styles.mini}>
        <div className={styles.featureItem2}>
          <div className={styles.subtitle}>Subtitle</div>
          <div className={styles.imageGrid}>
            <img
              src="https://assets-global.website-files.com/63f99b0d7ca2c4351e434a5a/64031e804b5726d60273b637_Group%20121.svg"
              alt="Grid Image"
            />
            <img
              src="https://assets-global.website-files.com/63f99b0d7ca2c4351e434a5a/642497b68d226f59903b90c0_ghj.svg"
              alt="Grid Image"
            />
            <img
              src="https://assets-global.website-files.com/63f99b0d7ca2c4351e434a5a/64031ee3a2b65345f04771e0_Group.svg"
              alt="Grid Image"
            />
          </div>
          <div className={styles.description}>Description text goes here.</div>
        </div>
        <div className={styles.featureItem2}>
          <div className={styles.subtitle}>Subtitle</div>
          <div className={styles.description}>Description text goes here.</div>
        </div>
        </div>
      </div>
      <div className={styles.featureSection}>
        <div className={`${styles.featureItem} ${styles.large}`}>
          <video
            autoPlay
            loop
            playsInline
            muted
            src="https://res.cloudinary.com/durdzswls/video/upload/q_90/v1/services/design-new-services.webm?_a=DATAdtAAZAA0"
            type="video/webm"
            controls
          ></video>
        </div>
        <div className={styles.featureItem}>
          <div className={styles.title}>Start a project</div>
          <div className={styles.tag}>Tagline</div>
          <div className={styles.description}>Description text goes here.</div>
        </div>
        <div className={styles.featureItem}>
          <div className={styles.subtitle}>Subtitle</div>
          <div className={styles.description}>Description text goes here.</div>
        </div>
        <div className={styles.featureItem}>
          <div className={styles.subtitle}>Subtitle</div>
          <div className={styles.description}>Description text goes here.</div>
        </div>
      </div>
      <div className={styles.featureSection}>
        <div className={`${styles.featureItem} ${styles.large}`}>
          <img src="large-image.jpg" alt="Large Image"/>
        </div>
        <div className={styles.featureItem}>
          <div className={styles.title}>Develop business</div>
          <div className={styles.tag}>Tagline</div>
          <div className={styles.description}>Description text goes here.</div>
        </div>
        <div className={styles.featureItem}>
          <div className={styles.subtitle}>Subtitle</div>
          <div className={styles.description}>Description text goes here.</div>
        </div>
        <div className={styles.featureItem}>
          <div className={styles.subtitle}>Subtitle</div>
          <div className={styles.description}>Description text goes here.</div>
        </div>
      </div>
    </div>
  );
};

export default Features;

import styles from "../styles/Components/Feedback.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import quoteLeft from "../assets/quote.svg"
import quoteRight from "../assets/quoteRight.svg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import '../index.css';
// import required modules
import { Autoplay } from 'swiper/modules';
import { Fade } from "react-awesome-reveal";

// Sample feedback data

// More data here...
const feedbackData = [
    {
        name: "Blanche Pearson",
        position: "Sales Manager",
        imgSrc: "https://t4.ftcdn.net/jpg/03/50/40/93/240_F_350409330_2bqhjowfBmrqEia5U8lBsGrvD7h8EIo6.jpg"
    },
    {
        name: "Joenas Brauers",
        position: "Web Developer",
        imgSrc: "https://t3.ftcdn.net/jpg/00/57/55/40/240_F_57554079_g3LhdDR5C0f2mc2ZxjFgsbb6WMqouUwQ.jpg"
    },
    {
        name: "Lariach French",
        position: "Online Teacher",
        imgSrc: "https://t3.ftcdn.net/jpg/06/15/91/36/240_F_615913669_1GvdMMT0H44Z4owh9SCYsml6mCcy8g3G.jpg"
    },
    {
        name: "James Khosravi",
        position: "Freelancer",
        imgSrc: "https://t3.ftcdn.net/jpg/02/60/67/80/240_F_260678009_gV1PBTotxDIwTngnmn3nYqWshbznYf24.jpg"
    },
    {
        name: "Kristina Zasiadko",
        position: "Bank Manager",
        imgSrc: "https://t3.ftcdn.net/jpg/03/99/91/62/240_F_399916297_1JwXdmC6ViCG4YhZuhLVz7xfuZhfHCY9.jpg"
    },
    {
        name: "Donald Horton",
        position: "App Designer",
        imgSrc: "https://t4.ftcdn.net/jpg/06/81/01/43/240_F_681014359_dyMjwn4JYLtY985umiBOeytmLmVxEjC0.jpg"
    },
    {
        name: "Blanche Pearson",
        position: "Sales Manager",
        imgSrc: "https://t4.ftcdn.net/jpg/03/50/40/93/240_F_350409330_2bqhjowfBmrqEia5U8lBsGrvD7h8EIo6.jpg"
    },
    {
        name: "Blanche Pearson",
        position: "Sales Manager",
        imgSrc: "https://t4.ftcdn.net/jpg/03/50/40/93/240_F_350409330_2bqhjowfBmrqEia5U8lBsGrvD7h8EIo6.jpg"
    },
    {
        name: "Joenas Brauers",
        position: "Web Developer",
        imgSrc: "https://t3.ftcdn.net/jpg/00/57/55/40/240_F_57554079_g3LhdDR5C0f2mc2ZxjFgsbb6WMqouUwQ.jpg"
    },
    {
        name: "Lariach French",
        position: "Online Teacher",
        imgSrc: "https://t3.ftcdn.net/jpg/06/15/91/36/240_F_615913669_1GvdMMT0H44Z4owh9SCYsml6mCcy8g3G.jpg"
    },
    {
        name: "James Khosravi",
        position: "Freelancer",
        imgSrc: "https://t3.ftcdn.net/jpg/02/60/67/80/240_F_260678009_gV1PBTotxDIwTngnmn3nYqWshbznYf24.jpg"
    },
    {
        name: "Kristina Zasiadko",
        position: "Bank Manager",
        imgSrc: "https://t3.ftcdn.net/jpg/03/99/91/62/240_F_399916297_1JwXdmC6ViCG4YhZuhLVz7xfuZhfHCY9.jpg"
    },
    {
        name: "Donald Horton",
        position: "App Designer",
        imgSrc: "https://t4.ftcdn.net/jpg/06/81/01/43/240_F_681014359_dyMjwn4JYLtY985umiBOeytmLmVxEjC0.jpg"
    },
    {
        name: "Blanche Pearson",
        position: "Sales Manager",
        imgSrc: "https://t4.ftcdn.net/jpg/03/50/40/93/240_F_350409330_2bqhjowfBmrqEia5U8lBsGrvD7h8EIo6.jpg"
    }, {
        name: "Blanche Pearson",
        position: "Sales Manager",
        imgSrc: "https://t4.ftcdn.net/jpg/03/50/40/93/240_F_350409330_2bqhjowfBmrqEia5U8lBsGrvD7h8EIo6.jpg"
    },
    {
        name: "Joenas Brauers",
        position: "Web Developer",
        imgSrc: "https://t3.ftcdn.net/jpg/00/57/55/40/240_F_57554079_g3LhdDR5C0f2mc2ZxjFgsbb6WMqouUwQ.jpg"
    },
    {
        name: "Lariach French",
        position: "Online Teacher",
        imgSrc: "https://t3.ftcdn.net/jpg/06/15/91/36/240_F_615913669_1GvdMMT0H44Z4owh9SCYsml6mCcy8g3G.jpg"
    },
    {
        name: "James Khosravi",
        position: "Freelancer",
        imgSrc: "https://t3.ftcdn.net/jpg/02/60/67/80/240_F_260678009_gV1PBTotxDIwTngnmn3nYqWshbznYf24.jpg"
    },
    {
        name: "Kristina Zasiadko",
        position: "Bank Manager",
        imgSrc: "https://t3.ftcdn.net/jpg/03/99/91/62/240_F_399916297_1JwXdmC6ViCG4YhZuhLVz7xfuZhfHCY9.jpg"
    },
    {
        name: "Donald Horton",
        position: "App Designer",
        imgSrc: "https://t4.ftcdn.net/jpg/06/81/01/43/240_F_681014359_dyMjwn4JYLtY985umiBOeytmLmVxEjC0.jpg"
    },
    {
        name: "Blanche Pearson",
        position: "Sales Manager",
        imgSrc: "https://t4.ftcdn.net/jpg/03/50/40/93/240_F_350409330_2bqhjowfBmrqEia5U8lBsGrvD7h8EIo6.jpg"
    }, {
        name: "Blanche Pearson",
        position: "Sales Manager",
        imgSrc: "https://t4.ftcdn.net/jpg/03/50/40/93/240_F_350409330_2bqhjowfBmrqEia5U8lBsGrvD7h8EIo6.jpg"
    },
    {
        name: "Joenas Brauers",
        position: "Web Developer",
        imgSrc: "https://t3.ftcdn.net/jpg/00/57/55/40/240_F_57554079_g3LhdDR5C0f2mc2ZxjFgsbb6WMqouUwQ.jpg"
    },
    {
        name: "Lariach French",
        position: "Online Teacher",
        imgSrc: "https://t3.ftcdn.net/jpg/06/15/91/36/240_F_615913669_1GvdMMT0H44Z4owh9SCYsml6mCcy8g3G.jpg"
    },
    {
        name: "James Khosravi",
        position: "Freelancer",
        imgSrc: "https://t3.ftcdn.net/jpg/02/60/67/80/240_F_260678009_gV1PBTotxDIwTngnmn3nYqWshbznYf24.jpg"
    },
    {
        name: "Kristina Zasiadko",
        position: "Bank Manager",
        imgSrc: "https://t3.ftcdn.net/jpg/03/99/91/62/240_F_399916297_1JwXdmC6ViCG4YhZuhLVz7xfuZhfHCY9.jpg"
    },
    {
        name: "Donald Horton",
        position: "App Designer",
        imgSrc: "https://t4.ftcdn.net/jpg/06/81/01/43/240_F_681014359_dyMjwn4JYLtY985umiBOeytmLmVxEjC0.jpg"
    },
    {
        name: "Blanche Pearson",
        position: "Sales Manager",
        imgSrc: "https://t4.ftcdn.net/jpg/03/50/40/93/240_F_350409330_2bqhjowfBmrqEia5U8lBsGrvD7h8EIo6.jpg"
    },
];

export default function Feedback() {
    return (
        <div className={styles.FeedbackContainer}>
            <Fade delay={100} triggerOnce direction='up'>
                <h1 className={styles.FbTitle}>FeedBack</h1>
            </Fade>
            <Fade delay={100} triggerOnce direction='up' className={styles.wrapper}>
                <Swiper
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    slidesPerView={4}
                    spaceBetween={30}
                    loop={true}
                    modules={[Autoplay]}
                    className={`mySwiper ${styles.carousel}`}
                >
                    {feedbackData.map((feedback, index) => {
                        return (
                            <SwiperSlide key={index} className={styles.card}>
                                <div className={styles["flip-card-inner"]}>
                                    <div className={styles["flip-card-front"]}>
                                        <img src={quoteLeft} alt="" />
                                        <h2>Great Expericnce!</h2>
                                        <p> I made bacck the purchase price in just 48 hours! Thank you for making it pain less,pleasant.The service was execellent. I will refer everyone know.</p>
                                        <img src={quoteRight} alt="" className={styles.quoteRight}/>
                                        <div className={styles.name}>-{feedback.name}</div>
                                    </div>
                                    <div className={styles["flip-card-back"]}>
                                        <div className={styles.img}>
                                            <img src={feedback.imgSrc} alt={feedback.name} draggable="false" />
                                        </div>
                                        <h2>{feedback.name}</h2>
                                        <span>{feedback.position}</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </Fade>
        </div>
    );
}

import styles from "../styles/Components/Projects.module.css"
import { Fade } from 'react-awesome-reveal';
import HoverCard from "./HoverCard";


export default function Projects() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.titleContainer}>
                <Fade cascade damping={0.5} direction="up" triggerOnce>
                    <h1>Our Milestones and Customers</h1>
                    <div className={styles.subContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, officia numquam
                        magnam beatae, accusamus saepe, incidunt eligendi mollitia perferendis distinctio ad velit.
                        Ratione debitis optio doloribus assumenda culpa nesciunt ea.</div>
                </Fade>
            </div>

            <div className={styles.bg}>
                <h1>Portfolio</h1>
            </div>

            <Fade delay={200} triggerOnce >
                <div className={styles.featureSection}>

                    <HoverCard className={styles.featureItem} mainStyles={{ width: "23%" }} image={"https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} heading={"project"} description={"Description text goes here."} />

                    <div className={styles.featureItem} style={{ width: "30%" }}>
                        <div className={styles.title} style={{ fontSize: '45px' }}>Web Development</div>
                        <div className={styles.description}>Description text goes here. Description
                            text goes here. Description text goes here. </div>
                        <div className={styles.descriptionBlock}><img loading="lazy"
                            src="https://assets-global.website-files.com/63f99b0d7ca2c4351e434a5a/640430deb73c11338e2cef42_group%20(1).svg"
                            alt="" />Description text goes here.</div>
                    </div>

                    <HoverCard className={styles.featureItem} mainStyles={{ width: "23%" }} image={"https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} heading={"project"} description={"Description text goes here."} />

                    <HoverCard className={styles.featureItem} mainStyles={{ width: "23%" }} image={"https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHRlY2h8ZW58MHx8MHx8fDA%3D"} heading={"project"} description={"Description text goes here."} />

                    <HoverCard className={styles.featureItem} mainStyles={{ width: "50%" }} image={"https://plus.unsplash.com/premium_photo-1714859729164-5e5b6af0db28?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} heading={"project"} description={"Description text goes here."} />

                    <HoverCard className={styles.featureItem} mainStyles={{ width: "49%" }} image={"https://plus.unsplash.com/premium_photo-1663040543387-cb7c78c4f012?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} heading={"project"} description={"Description text goes here."} />

                </div>

                <div className={styles.featureSection}>
                    <div className={styles.featureItem}>
                        <div className={styles.title} style={{ fontSize: '60px' }}>App Development</div>
                        <div className={styles.description}>Description text goes here. Description
                            text goes here. Description text goes here. Description text goes here.
                            Description text goes here.</div>
                        <div className={styles.descriptionDlock}><img loading="lazy"
                            src="https://assets-global.website-files.com/63f99b0d7ca2c4351e434a5a/640430deb73c11338e2cef42_group%20(1).svg"
                            alt="" />Description text goes here.</div>
                    </div>

                    <HoverCard className={styles.featureItem} mainStyles={{ width: "30%" }} image={"https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} heading={"project"} description={"Description text goes here."} />


                    <HoverCard className={styles.featureItem} mainStyles={{ width: "30%" }} image={"https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} heading={"project"} description={"Description text goes here."} />


                    <HoverCard className={styles.featureItem} mainStyles={{ width: "100%" }} image={"https://plus.unsplash.com/premium_photo-1714859729164-5e5b6af0db28?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} heading={"project"} description={"Description text goes here."} />

                </div>
                <div className={styles.featureSection}>
                    <div className={styles.featureItem}>
                        <div className={styles.title} style={{ fontSize: '60px' }}>ERP & CRM</div>
                        <div className={styles.description}>Description text goes here. Description
                            text goes here.
                            Description text goes here.Description text goes here. Description text goes here.</div>
                        <div className={styles.descriptionBlock}><img loading="lazy"
                            src="https://assets-global.website-files.com/63f99b0d7ca2c4351e434a5a/640430deb73c11338e2cef42_group%20(1).svg"
                            alt="" />Description text goes here.</div>
                    </div>
                    <HoverCard className={styles.featureItem} mainStyles={{ width: "23%" }} image={"https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} heading={"project"} description={"Description text goes here."} />

                    <HoverCard className={styles.featureItem} mainStyles={{ width: "23%" }} image={"https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} heading={"project"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, officia numquammagnam beatae, accusamus saepe, incidunt eligendi mollitia perferendis distinctio ad velit.Ratione debitis optio doloribus assumenda culpa nesciunt ea."} />

                    <HoverCard className={styles.featureItem} mainStyles={{ width: "23%" }} image={"https://plus.unsplash.com/premium_photo-1714859729164-5e5b6af0db28?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} heading={"project"} description={"Description text goes here."} />
                </div>

            </Fade>
        </div>
    )
}

import React from "react";

// Import React-Bootstrap components
import { Container } from "react-bootstrap";

// Import Icons
import { GiSoccerBall } from "react-icons/gi";

// Import Styles
import styles from "./Loader.module.css";

const Loader: React.FC = () => {
    return (
        <Container className={styles.mainLoaderContainer}>
            <GiSoccerBall
                className={styles.footballIcon}
            />
            <h3
                className={styles.loadingText}
            >
                Loading...
            </h3>
        </Container>
    )
}

export default Loader;
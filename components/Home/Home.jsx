import React, { useRef, useEffect } from "react";
import styles from "../../styles/home.module.css";
import { motion } from "framer-motion";
import { home } from "../../framer/framer";

function Home({ createObserver }) {
	const el = useRef(null);
	useEffect(() => {
		createObserver(el.current);
	}, [createObserver]);

	return (
		<section id="home" ref={el} className={styles.home}>
			<div className={styles.home__title}>
				<motion.h1 initial="hidden" animate="visible" variants={home}>
					Franco Nuñez
				</motion.h1>

				<motion.h2 initial="hidden" animate="visible" variants={home}>
					Frontend Developer
				</motion.h2>
			</div>
		</section>
	);
}

export default Home;

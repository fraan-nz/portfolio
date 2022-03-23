import React, { useRef, useEffect } from "react";
import styles from "../../styles/home.module.css";
import { motion } from "framer-motion";
import { flick, flick2, home } from "../../helpers/framer";

function Home({ createObserver }) {
	const el = useRef(null);
	useEffect(() => {
		createObserver(el.current);
	}, [createObserver]);

	return (
		<section id="home" ref={el} className={styles.home}>
			<div className={styles.home__title}>
				<motion.h1 initial="hidden" animate="visible" variants={home}>
					Fr
					<motion.span initial="hidden" animate="visible" variants={flick}>
						a
					</motion.span>
					nco{" "}
					<motion.span initial="hidden" animate="visible" variants={flick2}>
						N
					</motion.span>
					u<span className={styles.letter__n}>n</span>
					<motion.span initial="hidden" animate="visible" variants={flick}>
						e
					</motion.span>
					z
				</motion.h1>

				<motion.h2 initial="hidden" animate="visible" variants={home}>
					Fron
					<motion.span initial="hidden" animate="visible" variants={flick2}>
						t
					</motion.span>
					end Deve
					<motion.span initial="hidden" animate="visible" variants={flick}>
						l
					</motion.span>
					oper
				</motion.h2>
			</div>
		</section>
	);
}

export default Home;

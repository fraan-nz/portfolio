import React, { useRef, useEffect } from "react";
import styles from "../../styles/home.module.css";

function Home({ createObserver }) {
	const el = useRef(null);
	useEffect(() => {
		createObserver(el.current);
	}, [createObserver]);

	return (
		<section id="home" ref={el} className={styles.home}>
			<div className={styles.home__title}>
				<h1>
					Fr<span className={styles.letter__flick}>a</span>nco{" "}
					<span className={styles.letter__flick2}>N</span>u
					<span className={styles.letter__n}>n</span>
					<span className={styles.letter__flick}>e</span>z
				</h1>

				<h2>
					Fron<span className={styles.letter__flick2}>t</span>end Deve
					<span className={styles.letter__flick}>l</span>oper
				</h2>
			</div>
		</section>
	);
}

export default Home;

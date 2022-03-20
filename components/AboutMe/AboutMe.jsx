import React, { useRef, useEffect } from "react";
import styles from "../../styles/about.module.css";

function AboutMe({ createObserver }) {
	const el = useRef(null);
	useEffect(() => {
		createObserver(el.current);
	}, [createObserver]);
	return (
		<>
			<div id="about" className={styles.about__offset}></div>
			<section ref={el} id="about" className={styles.about}>
				<div className={styles.about__content}>
					<h3 className={styles.about__title}>Hola!</h3>
					<p className={styles.about__text}>
						Soy Franco Nuñez, un apasionado por la tecnología y los video
						juegos.
					</p>
					<p className={styles.about__text}>
						Estudié Análisis de Sistemas pero la curiosidad me llevo a
						investigar sobre la web, para tiempo más tarde convertirme en
						Frontend Developer.
					</p>
					<p className={styles.about__text}>
						Actualmente sigo aprendiendo y practicando cosas nuevas diariamente,
						inmerso en el mundo del desarrollo web.
					</p>
				</div>
			</section>
		</>
	);
}

export default AboutMe;

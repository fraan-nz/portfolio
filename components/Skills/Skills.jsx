import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { skills } from "./skill";
import styles from "../../styles/skills.module.css";
import titles from "../../styles/titles.module.css";

function Skills({ createObserver }) {
	const el = useRef(null);
	useEffect(() => {
		createObserver(el.current);
	}, [createObserver]);

	const settings = {
		centerMode: true,
		infinite: true,
		dots: false,
		arrows: false,
		centerPadding: "10px",
		slidesToShow: 5,
		autoplay: true,
		autoplaySpeed: 2500,
		cssEase: "ease-out",
		pauseOnHover: true,
		useTransform: true,
		responsive: [
			{
				breakpoint: 970,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 440,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<>
			<div id="skills" className={styles.skills__offset}></div>
			<section id="skills" ref={el} className={styles.skills}>
				<div className={styles.skills__content}>
					<h3 className={titles.section__title}>Tecnologías</h3>

					<Slider {...settings} className={styles.skills__slider}>
						{skills.map((skill) => (
							<div key={skill.name} className={styles.skills__skillwraper}>
								<div className={styles.skills__skill}>
									<div className={styles.skills__imgwrap}>
										<Image
											src={`/images/techs/${skill.name}.png`}
											layout="fill"
											className={styles.skills__img}
											alt={`${skill.alt} logo`}
										/>
									</div>
									<div className={styles.skills__imgwrapfilter}>
										<Image
											src={`/images/techs/${skill.name}.png`}
											layout="fill"
											className={styles.skills__img}
											alt={`${skill.alt} logo`}
											loading="lazy"
										/>
									</div>
								</div>
							</div>
						))}
					</Slider>
				</div>
			</section>
		</>
	);
}

export default Skills;

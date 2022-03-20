import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/projects.module.css";
import { projects } from "./project";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

function Projects({ createObserver }) {
	const el = useRef(null);
	useEffect(() => {
		createObserver(el.current);
	}, [createObserver]);

	return (
		<section id="projects" ref={el} className={styles.projects}>
			<div className={styles.projects__content}>
				<h3 className={styles.projects__title}>Proyectos</h3>
				{projects.map((project) => (
					<article key={project.title} className={styles.project}>
						<div className={styles.project__imgwrap}>
							<Image
								src={project.image}
								layout="fill"
								className={styles.project__img}
								alt={project.title}
								priority
							/>
						</div>

						<div className={styles.project__descwraper}>
							<div className={styles.project__desc}>
								<h4 className={styles.project__title}>{project.title}</h4>
								<p className={styles.project__text}>{project.desc}</p>
								<div className={styles.project__techs}>
									{project.tech.map((tech) => (
										<p key={tech}>{tech}</p>
									))}
								</div>
							</div>

							<div className={styles.project__links}>
								<Link href={project.github}>
									<a className={styles.project__link} target="_blank">
										<FontAwesomeIcon icon={faGithub} />
										<p>GitHub</p>
									</a>
								</Link>
								<Link href={project.site}>
									<a className={styles.project__link} target="_blank">
										<FontAwesomeIcon icon={faGlobe} />
										<p>Deploy</p>
									</a>
								</Link>
							</div>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}

export default Projects;

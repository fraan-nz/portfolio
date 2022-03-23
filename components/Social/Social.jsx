import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import styles from "../../styles/social.module.css";
import { motion } from "framer-motion";
import { flick, flick2 } from "../../helpers/framer";

function Social({ activeSection }) {
	return (
		<>
			{activeSection === "home" ? (
				<div className={styles.social__wrapperMobile}>
					<Link href="https://www.linkedin.com/in/fraan-nz/" passHref>
						<motion.a
							animate="visible"
							variants={flick}
							className={styles.social__icon}
							target="_blank"
							aria-label="Linkedin link"
						>
							<FontAwesomeIcon icon={faLinkedin} />
						</motion.a>
					</Link>
					<Link href="https://github.com/fraan-nz" passHref>
						<motion.a
							animate="visible"
							variants={flick2}
							className={styles.social__icon}
							target="_blank"
							aria-label="GitHub link"
						>
							<FontAwesomeIcon icon={faGithubSquare} />
						</motion.a>
					</Link>
				</div>
			) : (
				<div className={styles.social__wrapper}>
					<Link href="https://www.linkedin.com/in/fraan-nz/" passHref>
						<motion.a
							animate="visible"
							variants={flick}
							className={styles.social__icon}
							target="_blank"
							aria-label="Linkedin link"
						>
							<FontAwesomeIcon icon={faLinkedin} />
						</motion.a>
					</Link>
					<Link href="https://github.com/fraan-nz" passHref>
						<motion.a
							animate="visible"
							variants={flick2}
							className={styles.social__icon}
							target="_blank"
							aria-label="GitHub link"
						>
							<FontAwesomeIcon icon={faGithubSquare} />
						</motion.a>
					</Link>
				</div>
			)}
		</>
	);
}

export default Social;

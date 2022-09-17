import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import styles from "../../styles/social.module.css";
import { motion } from "framer-motion";
import { moveSocial } from "../../framer/framer";

function Social({ activeSection }) {
	return (
		<>
			{activeSection === "home" ? (
				<div className={styles.social__wrapperMobile}>
					<Link href="https://www.linkedin.com/in/fraan-nz/" passHref>
						<a
							className={styles.social__icon}
							target="_blank"
							aria-label="Linkedin link"
						>
							<FontAwesomeIcon icon={faLinkedin} />
						</a>
					</Link>
					<Link href="https://github.com/fraan-nz" passHref>
						<a
							className={styles.social__icon}
							target="_blank"
							aria-label="GitHub link"
						>
							<FontAwesomeIcon icon={faGithubSquare} />
						</a>
					</Link>
				</div>
			) : (
				<motion.div
					initial="hidden"
					animate={activeSection !== "home" ? "visible" : "hidden"}
					variants={moveSocial}
					className={styles.social__wrapper}
				>
					<Link href="https://www.linkedin.com/in/fraan-nz/" passHref>
						<a
							className={styles.social__icon}
							target="_blank"
							aria-label="Linkedin link"
						>
							<FontAwesomeIcon icon={faLinkedin} />
						</a>
					</Link>
					<Link href="https://github.com/fraan-nz" passHref>
						<a
							className={styles.social__icon}
							target="_blank"
							aria-label="GitHub link"
						>
							<FontAwesomeIcon icon={faGithubSquare} />
						</a>
					</Link>
				</motion.div>
			)}
		</>
	);
}

export default Social;

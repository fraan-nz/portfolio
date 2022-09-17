import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/scrollTop.module.css";
import { motion } from "framer-motion";
import { moveArrow } from "../../framer/framer";

function ScrollTop({ activeSection }) {
	return (
		<motion.div
			initial="hidden"
			animate={activeSection !== "home" ? "visible" : "hidden"}
			variants={moveArrow}
			className={styles.scrollTopWrapper}
		>
			<Link href="#home" passHref>
				<a className={styles.scrollTop} aria-label="scroll to top">
					<FontAwesomeIcon icon={faArrowUp} />
				</a>
			</Link>
		</motion.div>
	);
}

export default ScrollTop;

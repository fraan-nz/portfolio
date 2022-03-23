import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/scrollTop.module.css";
import { motion } from "framer-motion";
import { flick } from "../../helpers/framer";

function ScrollTop() {
	return (
		<Link href="#home" passHref>
			<motion.a
				animate="visible"
				variants={flick}
				className={styles.scrollTop}
				aria-label="scroll to top"
			>
				<FontAwesomeIcon icon={faArrowUp} />
			</motion.a>
		</Link>
	);
}

export default ScrollTop;

import React from "react";
import styles from "../../styles/burger.module.css";
import { motion } from "framer-motion";
import { burgerTop, burgerMid, burgerBottom } from "../../helpers/framer";

function Burger({ isOpen, setOpen }) {
	return (
		<div onClick={() => setOpen((prev) => !prev)} className={styles.burger}>
			<motion.div
				animate={isOpen ? "open" : ""}
				variants={burgerTop}
				className={styles.burger__top}
			></motion.div>
			<motion.div
				animate={isOpen ? "open" : ""}
				variants={burgerMid}
				className={styles.burger__mid}
			></motion.div>
			<motion.div
				animate={isOpen ? "open" : ""}
				variants={burgerBottom}
				className={styles.burger__bottom}
			></motion.div>
		</div>
	);
}

export default Burger;

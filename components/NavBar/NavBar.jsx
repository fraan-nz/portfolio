import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../../styles/navbar.module.css";
import { motion } from "framer-motion";
import { flick2, menuOpen } from "../../helpers/framer";
import Burger from "../Burger/Burger";

const navLinks = [
	{ title: "Sobre mí", path: "#about" },
	{ title: "Proyectos", path: "#projects" },
	{ title: "Tecnologías", path: "#skills" },
	{ title: "Contacto", path: "#contact" },
];

function NavBar({ activeSection, setTheme }) {
	const [scrolling, setScrolling] = useState(false);
	const [checked, setChecked] = useState("pink-theme");
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const changeNavbar = () => {
			if (window.scrollY >= 70) {
				setScrolling(true);
			} else {
				setScrolling(false);
			}
		};
		window.addEventListener("scroll", changeNavbar);

		return () => window.removeEventListener("scroll", changeNavbar);
	}, []);

	const changeTheme = (e) => {
		setTheme(e.target.value);
		setChecked(e.target.value);
	};

	return (
		<nav className={scrolling ? styles.navbar__scroll : styles.navbar}>
			<div className={styles.navbar__content}>
				<div className={styles.navbar__switch}>
					<label>
						<input
							type="radio"
							value="pink-theme"
							onChange={changeTheme}
							checked={checked === "pink-theme"}
						/>
						<motion.div
							animate={checked === "pink-theme" ? "visible" : ""}
							variants={flick2}
							className={styles.navbar__btnpink}
						></motion.div>
					</label>
					<label>
						<input
							type="radio"
							value="violet-theme"
							onChange={changeTheme}
							checked={checked === "violet-theme"}
						/>
						<motion.div
							animate={checked === "violet-theme" ? "visible" : ""}
							variants={flick2}
							className={styles.navbar__btnviolet}
						></motion.div>
					</label>
					<label>
						<input
							type="radio"
							value="green-theme"
							onChange={changeTheme}
							checked={checked === "green-theme"}
						/>
						<motion.div
							animate={checked === "green-theme" ? "visible" : ""}
							variants={flick2}
							className={styles.navbar__btngreen}
						></motion.div>
					</label>
				</div>
				<Burger isOpen={open} setOpen={setOpen} />
				<motion.ul
					initial="close"
					animate={open ? "open" : "close"}
					variants={menuOpen}
					className={styles.navbar__linksMobile}
				>
					{navLinks.map((link, index) => (
						<li key={link.title}>
							<Link href={link.path} scroll={false}>
								<a
									onClick={() => setOpen((prev) => !prev)}
									tabIndex={index + 1}
									className={
										activeSection === link.path.slice(1)
											? styles.navbar__active
											: styles.navbar__link
									}
								>
									{link.title}
								</a>
							</Link>
						</li>
					))}
				</motion.ul>
				<ul className={styles.navbar__links}>
					{navLinks.map((link, index) => (
						<li key={link.title}>
							<Link href={link.path} scroll={false}>
								<a
									tabIndex={index + 1}
									className={
										activeSection === link.path.slice(1)
											? styles.navbar__active
											: styles.navbar__link
									}
								>
									{link.title}
								</a>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}

export default NavBar;

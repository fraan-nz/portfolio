import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../../styles/navbar.module.css";

const navLinks = [
	{ title: "Sobre mí", path: "#about" },
	{ title: "Proyectos", path: "#projects" },
	{ title: "Tecnologías", path: "#skills" },
	{ title: "Contacto", path: "#contact" },
];

function NavBar({ activeSection, setTheme }) {
	const [scrolling, setScrolling] = useState(false);
	const [checked, setChecked] = useState("pink-theme");

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
						<div className={styles.navbar__btnpink}></div>
					</label>
					<label>
						<input
							type="radio"
							value="violet-theme"
							onChange={changeTheme}
							checked={checked === "violet-theme"}
						/>
						<div className={styles.navbar__btnviolet}></div>
					</label>
					<label>
						<input
							type="radio"
							value="green-theme"
							onChange={changeTheme}
							checked={checked === "green-theme"}
						/>
						<div className={styles.navbar__btngreen}></div>
					</label>
				</div>
				<ul className={styles.navbar__links}>
					{navLinks.map((link) => (
						<li key={link.title}>
							<Link href={link.path} scroll={false}>
								<a
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

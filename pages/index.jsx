import React, { useState, useCallback, useEffect } from "react";
import Head from "next/head";
import AboutMe from "../components/AboutMe/AboutMe";
import Home from "../components/Home/Home";
import NavBar from "../components/NavBar/NavBar";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import Contact from "../components/Contact/Contact";
import ScrollTop from "../components/ScrollTop/ScrollTop";
import Social from "../components/Social/Social";
import { motion } from "framer-motion";
import { home } from "../framer/framer";

export default function Portfolio() {
	const [activeSection, setActiveSection] = useState("");
	const [theme, setTheme] = useState("green-theme");

	const handleIntersect = (entries) => {
		if (entries[0].isIntersecting) {
			setActiveSection(entries[0].target.id);
		}
	};
	const createObserver = useCallback((target) => {
		const options = { threshold: 0.9, rootMargin: "0px" };
		const observer = new IntersectionObserver(handleIntersect, options);
		observer.observe(target);
	}, []);

	const createObserverBigSection = useCallback((target) => {
		const options = { threshold: 0.3, rootMargin: "0px" };
		const observer = new IntersectionObserver(handleIntersect, options);
		observer.observe(target);
	}, []);

	useEffect(() => {
		document.body.classList.remove("pink-theme", "violet-theme", "green-theme");
		document.body.classList.toggle(theme);
	}, [theme]);

	return (
		<>
			<Head>
				<title>Franco Nuñez Portfolio</title>
			</Head>
			<NavBar activeSection={activeSection} setTheme={setTheme} />
			<motion.main initial="hidden" animate="visible" variants={home}>
				<Home createObserver={createObserver} />
				<AboutMe createObserver={createObserver} />
				<Projects createObserverBigSection={createObserverBigSection} />
				<Skills createObserver={createObserver} />
				<Contact
					createObserver={createObserver}
					activeSection={activeSection}
				/>
				<Social activeSection={activeSection} />
				<ScrollTop activeSection={activeSection} />
			</motion.main>
		</>
	);
}

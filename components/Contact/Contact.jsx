import React, { useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import styles from "../../styles/contact.module.css";
import titles from "../../styles/titles.module.css";

const schema = yup
	.object({
		name: yup
			.string()
			.max("30", "Límite de caracteres excedido")
			.required("Ingrese un nombre"),
		email: yup
			.string()
			.email("Ingrese un email válido")
			.required("Ingrese un email"),
		message: yup
			.string()
			.max("200", "El mensaje debe tener como máximo 500 caracteres")
			.required("Ingrese su mensaje"),
	})
	.required();

function Contact({ createObserver, activeSection }) {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm({
		resolver: yupResolver(schema),
	});

	const input = useRef(null);
	useEffect(() => {
		if (activeSection && activeSection === "contact") {
			input.current.focus();
		}
	}, [activeSection]);

	const el = useRef(null);
	useEffect(() => {
		createObserver(el.current);
	}, [createObserver]);

	const onSubmitForm = async (formValues) => {
		let config = {
			method: "POST",
			url: process.env.NEXT_PUBLIC_API_URL,
			headers: {
				"Content-Type": "application/json",
			},
			data: formValues,
		};

		try {
			const response = await axios(config);
			if (response.status === 200) {
				reset();
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<section ref={el} id="contact" className={styles.contact}>
			<div className={styles.contact__content}>
				<h3 className={titles.section__title}>Contacto</h3>
				<form
					onSubmit={handleSubmit(onSubmitForm)}
					className={styles.contact__form}
				>
					<div className={styles.input__wrapper}>
						<input
							type="text"
							name="name"
							id="name"
							autoComplete="off"
							className={styles.contact__input}
							{...register("name")}
						/>
						<label
							ref={input}
							htmlFor="name"
							className={styles.input__placeholder}
						>
							Nombre
						</label>
						<span className={styles.contact__error}>
							{errors?.name?.message}
						</span>
					</div>

					<div className={styles.input__wrapper}>
						<input
							type="text"
							name="email"
							id="email"
							autoComplete="off"
							className={styles.contact__input}
							{...register("email")}
						/>
						<label htmlFor="email" className={styles.input__placeholder}>
							Email
						</label>
						<span className={styles.contact__error}>
							{errors?.email?.message}
						</span>
					</div>

					<div className={styles.input__wrapper}>
						<textarea
							name="message"
							id="message"
							rows="10"
							autoComplete="off"
							className={styles.contact__textarea}
							{...register("message")}
						></textarea>
						<label htmlFor="message" className={styles.input__placeholder}>
							Mensaje...
						</label>
						<span className={styles.contact__msgerror}>
							{errors?.message?.message}
						</span>
					</div>

					<button className={styles.form__submit} disabled={isSubmitting}>
						{isSubmitting ? "Enviando" : "Enviar"}
					</button>
				</form>
			</div>
		</section>
	);
}

export default Contact;

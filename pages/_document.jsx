import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="es">
				<Head>
					<meta
						name="viewport"
						content="initial-scale=1.0, width=device-width"
					/>
					<meta name="description" content="Frontend Developer" />
					<link rel="icon" href="/images/icon.png" />
					<meta
						name="image"
						property="og:image"
						content="https://fraan-nz-portfolio.vercel.app/images/portfolio.jpg"
						key="ogimage"
					/>
					<meta
						property="og:title"
						content="Franco Nuñez Portfolio"
						key="ogtitle"
					/>
					<meta
						property="og:description"
						content="Frontend Developer"
						key="ogdescription"
					/>
					<meta
						name="keywords"
						content="developer, frontend, desarrollador, maquetador, web"
					/>
					<meta name="author" content="Franco Nuñez" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						defer
						href="https://fonts.googleapis.com/css2?family=Jura:wght@300;600;700&display=swap"
						rel="stylesheet"
					></link>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "../styles/theme.css";
import "../styles/globals.css";
import "../styles/carousel.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;

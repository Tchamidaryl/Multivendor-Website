// pages/_app.js
import '../styles/main.scss';  // Import the global CSS file

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

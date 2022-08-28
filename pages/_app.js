import "../styles/globals.css";
import { GameoverProvider } from "../context/Gameover";
import { GooseIndexProvider } from "../context/GooseIndex";

function MyApp({ Component, pageProps }) {
  return (
    <GooseIndexProvider>
      <GameoverProvider>
        <Component {...pageProps} />
      </GameoverProvider>
    </GooseIndexProvider>
  );
}

export default MyApp;

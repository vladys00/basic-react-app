import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const Home = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme)
  return (
    <div className={`container mt-5 bg-${theme}`}>
      <h1>Home</h1>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Change to light</button>
    </div>
  );
};

export default Home;

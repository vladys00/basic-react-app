import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import rrssImage from "../../assets/img/home-rrss.svg"

const Home = () => {
  return (
    <div className={`container mt-5 text-center`}>
      <h1 className="mt-5 mb-5" style={{ fontSize: "50px" }}>WELCOME TO <strong className="text-app-primary">INSTAHACK!</strong></h1>
      <div>
        <img src={rrssImage} />
      </div>

    </div>
  );
};

export default Home;

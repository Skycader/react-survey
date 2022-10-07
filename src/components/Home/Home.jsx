import Style from "./Home.module.css";
import { Link, useNavigate } from "react-router-dom";
const Home = (props) => {
  const navigate = useNavigate();
  return (
    <form className={Style.form}>
      <center>
        <h1>Survey for Front-End developer</h1>
        
          <Link className={Style.button} to="/form">
            Fill out
          </Link>
      
      </center>
    </form>
  );
};

export default Home;


import Style from "./Home.module.css";
import { Link, useNavigate } from 'react-router-dom'
const Home = (props) => {
  const navigate = useNavigate();
  return (
    <form className={Style.form}>
      <center>
        <h1>Survey for Front-End developer</h1>
        <button className={Style.button} onClick={(e)=>navigate('/form', {replace: true})}>Open</button>
      </center>
     
    </form>
  );
};

export default Home;

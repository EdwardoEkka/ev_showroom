import "./styles/navbar0.css";
import { RxCross1 } from "react-icons/rx";

const Navbar0 = ({Click1}) => {
  return (
    <div>
      <div className="nav0-main">
        <div >
          <RxCross1 onClick={()=>{
            Click1();
        }}/>
        </div>
        <h1>TOYOTA</h1>
      </div>
    </div>
  );
};

export default Navbar0;

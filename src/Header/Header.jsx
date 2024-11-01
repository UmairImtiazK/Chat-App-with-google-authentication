import "./Header.css";
import icon1 from "./icons/Icon.svg";
import icon2 from "./icons/Icon button (1).svg";
import icon3 from "./icons/Icon button (2).svg";
import icon4 from "./icons/Icon button.svg";
import icon5 from "./icons/Group.svg";
import icon6 from "./icons/Group (1).svg";
import icon7 from "./icons/Text_.svg";
import icon8 from "./icons/Text_ (1).svg";
import icon9 from "./icons/Text_ (2).svg";

export default function Header() {
  return (
    <div className="contianer | Header">
      <div className="modesCont">
        <span className="orange"></span>
        <span className="yellow"></span>
        <span className="green"></span>
      </div>
      <div className="iconCont1">
        <img src={icon4} alt="" />
        <img src={icon5} alt="" />
        <img src={icon6} alt="" />
      </div>

      <div className="searchContparent">
        <img src={icon2} alt="" />
        <div className="Searchcontainer">
        <div className="searchCont">
        <img src={icon1} alt="" />
        <input type="search" name="" id="search" placeholder="Search or enter website name" />
        </div>
        <img src={icon7} alt="" />
        </div>
      </div>

      <div className="iconCont2">
        <img src={icon3} alt="" />
        <img src={icon8} alt="" />
        <img src={icon9} alt="" />
      </div>
    </div>
  );
}

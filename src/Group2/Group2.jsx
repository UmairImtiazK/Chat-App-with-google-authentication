import "./Group2.css";
import icon1 from "../Header/icons/Icon.svg";
import icon2 from "./Vector.svg";
import icon4 from "./dilvered.svg";
import icon5 from "./tick.svg";
import all_users from "../Data";

export default function Group2({onchatitemClicked}) {
  return (
    <div className="group2">
      <div className="top">
        <h1 className="heading">Messages</h1>
        <div className="searchCont">
          <img src={icon1} alt="" />
          <input type="search" name="Search" id="" placeholder="Search" />
        </div>
        <h1 className="sorted">
          Sort by{" "}
          <span className="sort">
            Newest <img src={icon2} alt="" />
          </span>
        </h1>
      </div>
      {all_users.map((users,index) => {
        return (
          <div className="bottumChatCont" key={index}
          onClick={() => onchatitemClicked(users)}>
            <div className="imageCont">
              <img src={users.imageSrc} alt="" />
            </div>
            <div className="msgInfo">
            <div className="nameMsgCont">
              <h1 className="name">{users.name}</h1>
              <p className="msg">{users.msg}</p>
            </div>
            <div className="dilveryCont">
              <h1>{users.time}</h1>
              <img src={users.dilereved ? icon4 : icon5} alt="" />
            </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

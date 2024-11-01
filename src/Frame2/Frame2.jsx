import "./Frame2.css";
import { useEffect,useState } from "react";
import Rectangle7 from "../Rectangle7/Rectangle7";
import Group2 from "../Group2/Group2";
import Group3 from "../Group3/Group3";
import Rectangle10 from '../Rectangle10/Rectangle10';
import Header from '../Header/Header';

export default function Frame2() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectedChat, setSelectedChat] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleOnClick = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleChatItemClick = (chat) => {
    setSelectedChat(chat);
  };

  const handleBackButtonClick = () => {
    setSelectedChat(null);
  };

  return (
    <div className="container  | frame2">
      <Rectangle7 />
      <Group2 onchatitemClicked={handleChatItemClick} />
      {windowWidth >= 721 && <Group3/>}
      {selectedChat && windowWidth < 721 && (
       
        <div className="chatContainer">
          <Header></Header>
          <div className="backButton" onClick={handleBackButtonClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M6.354 11.354a.5.5 0 0 0 0 .708l-1.5 1.5a.5.5 0 0 0 .708.708l2.5-2.5a.5.5 0 0 0 0-.708l-2.5-2.5a.5.5 0 1 0-.708.708l1.5 1.5H.5a.5.5 0 1 0 0 1h6.854l-1.5 1.5a.5.5 0 0 0 .708.708l2.5-2.5a.5.5 0 0 0 0-.708l-2.5-2.5a.5.5 0 0 0-.708.708l1.5 1.5H.5a.5.5 0 1 0 0 1h6.854l-1.5 1.5z"
                />
            </svg>
          </div>
          <Group3/>
        </div>
                
      )}
    </div>
  );
}

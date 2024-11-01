import './Group3.css';
import imageuser from './Ellipse 1 (1).png';
import infoIcon from './info.svg';
import shapeIcon from "../assets/Icons/Shape.svg";
import Rectangle10 from '../Rectangle10/Rectangle10';

export default function Group3() {
  return (
    <div className="group3Parent">
    <div className='group3'>
      <div className="cont1">
      <div className="image">
        <img src={imageuser} alt="" />
      </div>
        <div className="float">
          <h2>Travis Barker</h2>
          <p className="status">Online</p>
        </div>
      </div>
      <div className="cont2">
        <img src={shapeIcon} alt="" />
        <img src={infoIcon} alt="" />
      </div>
      
    </div>

    <Rectangle10/>
    </div>
   
  )
}

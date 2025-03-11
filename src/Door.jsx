import { useCallback, useState } from "react";
import arrowImage from "./assets/arrow.png";
import doorHandleImage from "./assets/door-handle.svg";
import { useNavigate } from "react-router";
export default function Door({
  name,
  url,
  color,
  icon,
  iconImage,
  isLocked,
  setLocked,
}) {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
  const onClick = useCallback(async () => {
    if (isLocked) {
      return;
    }
    setClicked((val) => !val);
    setLocked(true);
    setTimeout(() => navigate("/wnetrze" + url), 800);
  }, [isLocked, setClicked, setLocked, navigate, url]);
  return (
    <div
      className={`door-wrapper ${clicked && "clicked"}`}
      onClick={() => onClick()}
    >
      <div className="interior">
        <p>Zapraszamy...</p>
        <img src={arrowImage}></img>
      </div>
      <div
        className="door"
        style={{
          backgroundColor: color,
        }}
      >
        <p className="icon">{icon}</p>
        <p className="name">{name}</p>
        <img className="logo" src={iconImage}></img>
        <img className="handle" src={doorHandleImage} />
      </div>
    </div>
  );
}

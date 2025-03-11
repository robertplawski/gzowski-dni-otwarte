import { Link, useNavigate } from "react-router";
import szkolaImage from "../assets/szkola.jpg";
import { useCallback, useState } from "react";
import { Fade, Bounce } from "react-awesome-reveal";
export default function Index() {
  const navigate = useNavigate();
  const [isClicked, setClicked] = useState(false);
  const [isLocked, setLocked] = useState(false);
  const onClick = useCallback(async () => {
    if (isLocked) {
      return;
    }
    setClicked(true);
    setLocked(true);
    setTimeout(() => navigate("/drzwi"), 800);
  }, [isLocked, setLocked, setClicked, isClicked, navigate]);
  const fullscreen = useCallback(async () => {
    document.body.requestFullscreen();
  }, []);
  return (
    <Fade>
      <section className={`main-section ${isClicked ? "clicked" : ""}`}>
        <button onClick={fullscreen} className="fullscreen">
          Fullscreen
        </button>
        <img onClick={onClick} className="school-image" src={szkolaImage} />
        <Bounce className="title">Kliknij aby wejść do szkoły</Bounce>
      </section>
    </Fade>
  );
}

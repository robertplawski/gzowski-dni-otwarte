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
  return (
    <Fade>
      <section
        className={`main-section ${isClicked ? "clicked" : ""}`}
        onClick={onClick}
      >
        <img className="school-image" src={szkolaImage} />
        <Bounce className="title">Kliknij aby wejść do szkoły</Bounce>
      </section>
    </Fade>
  );
}

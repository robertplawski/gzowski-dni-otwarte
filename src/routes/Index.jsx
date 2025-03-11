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
  const [isFullscreen, setIsFullscreen] = useState(false);
  const fullscreen = useCallback(async () => {
    document.body.requestFullscreen();
    setIsFullscreen(true);
  }, [setIsFullscreen]);
  return (
    <Fade>
      <section className={`main-section ${isClicked ? "clicked" : ""}`}>
        {!isFullscreen && (
          <button onClick={fullscreen} className="fullscreen">
            Fullscreen
          </button>
        )}

        <img onClick={onClick} className="school-image" src={szkolaImage} />
        <Fade direction="up" className="title">
          Kliknij, aby poznać naszą szkołę
        </Fade>
      </section>
    </Fade>
  );
}

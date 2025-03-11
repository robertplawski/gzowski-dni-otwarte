import { Fade } from "react-awesome-reveal";

export default function YoutubeVideo({ title, videoId = "M66U_DuMCS8" }) {
  return (
    <Fade>
      <h1>{title}</h1>
      <iframe
        src={
          "https://www.youtube.com/embed/" +
          videoId +
          "?autoplay=1&controls=0&rel=0"
        }
        title=""
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>{" "}
    </Fade>
  );
}

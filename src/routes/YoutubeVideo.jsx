import { Fade } from "react-awesome-reveal";

export default function YoutubeVideo({
  videoId = "M66U_DuMCS8",
  autoplay = 1,
}) {
  return (
    <iframe
      src={
        "https://www.youtube.com/embed/" +
        videoId +
        `?autoplay=${autoplay}&controls=0&rel=0`
      }
      title=""
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
}

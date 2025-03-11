import { useContext } from "react";
import { Link, useParams } from "react-router";
import { InformationContext } from "../InformationContext";
import { Fade } from "react-awesome-reveal";
import Video from "./Video";
import YoutubeVideo from "./YoutubeVideo";

export default function Interior() {
  const params = useParams();
  const { getByUrl } = useContext(InformationContext);
  const object = getByUrl(params.name);
  return (
    <Fade>
      <div className="videos-container">
        <div
          className={
            "videos-horizontal " + (object.secondaryVideoId ? "dual" : "")
          }
        >
          <YoutubeVideo videoId={object.videoId} />
          {object.secondaryVideoId && (
            <YoutubeVideo autoplay={0} videoId={object.secondaryVideoId} />
          )}
        </div>
        <Link to="/">
          <button className="back">Powrót do strony głównej</button>
        </Link>
      </div>
    </Fade>
  );
}

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
      <div className="videos">
        <h1>{object.name}</h1>
        <div className="videos-container">
          <YoutubeVideo videoId={object.videoId} />
        </div>
      </div>
      <Link to="/">
        <button>Powrót do lobby</button>
      </Link>
    </Fade>
  );
}

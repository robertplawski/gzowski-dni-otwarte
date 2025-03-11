import { useContext } from "react";
import { InformationContext } from "../InformationContext";
import { useParams } from "react-router";

export default function VideoRoute() {
  const params = useParams();
  const { getByUrl } = useContext(InformationContext);
  const object = getByUrl(params.name);
  return (
    <Fade>
      <div className="videos">
        <h1>{object.name}</h1>
        <div className="videos-container"></div>
      </div>
    </Fade>
  );
}

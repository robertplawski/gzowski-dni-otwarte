import { useParams } from "react-router";

export default function Interior() {
  const params = useParams();
  return (
    <>
      <section className="videos">
        <h1>{params.name}</h1>
        <div className="videos-container">
          <div className="single-video-container"></div>
          <div className="single-video-container"></div>

          <div className="single-video-container"></div>
        </div>
      </section>
    </>
  );
}

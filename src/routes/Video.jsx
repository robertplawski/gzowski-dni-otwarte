import { Fade } from "react-awesome-reveal";

export default function Video({ title, src }) {
  return (
    <Fade>
      <h1>{title}</h1>
      <video src={src} controls autoPlay></video>
    </Fade>
  );
}

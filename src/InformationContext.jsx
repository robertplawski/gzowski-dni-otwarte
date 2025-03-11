import { createContext, useContext } from "react";
import programmingImage from "./assets/programming.svg";
import builderImage from "./assets/builder.svg";
import dogImage from "./assets/dog.svg";
import serverImage from "./assets/server.svg";
import solarImage from "./assets/solar-panel.svg";
import measureImage from "./assets/measure.svg";
import landscapeImage from "./assets/landscape.svg";
const DOORS = [
  {
    iconImage: dogImage,
    icon: "WE",
    name: "Technik weterynarii",
    url: "/weterynaria",
    color: "#80DE9C",
  },
  {
    iconImage: programmingImage,
    icon: "I/P",
    name: "Technik programista",
    url: "/programista",
    color: "#07BFD7",
  },
  {
    iconImage: serverImage,
    icon: "I/P",
    name: "Technik informatyk",
    url: "/informatyk",
    color: "#07BFD7",
  },
  {
    icon: "E/G",
    iconImage: measureImage,
    name: "Technik geodeta",
    url: "/geodeta",
    color: "#FDE54B",
  },
  {
    iconImage: builderImage,
    icon: "BD",
    name: "Technik budownictwa",
    url: "/budownictwa",
    color: "#F9B051",
  },
  {
    icon: "A/A",
    iconImage: landscapeImage,
    name: "Technik architektury krajobrazu",
    url: "/architektura",
    color: "#FDE54B",
  },
  {
    iconImage: solarImage,
    icon: "E/G",
    name: "Technik urządzeń i systemów energetyki odnawialnej",
    url: "/energia",
    color: "#80DE9C",
  },
]
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);
const contextValue = { DOORS };
export const InformationContext = createContext(contextValue);
export default function InformationContextProvider({ children }) {
  return (
    <InformationContext.Provider value={contextValue}>
      {children}
    </InformationContext.Provider>
  );
}

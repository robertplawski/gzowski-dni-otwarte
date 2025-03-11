import { useCallback, useContext, useState } from "react";
import Door from "../Door";
import { InformationContext } from "../InformationContext";

// dwa okienka teoria i praktyka

function Doors() {
  const { DOORS } = useContext(InformationContext);
  const [isLocked, setLocked] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const onScroll = useCallback(
    (event) => {
      const { target } = event;

      const percentage = target.scrollLeft / target.scrollWidth;
      setScrollPercentage(percentage);
    },
    [setScrollPercentage]
  );

  const getClassname = useCallback(() => {
    console.log(scrollPercentage);
    return `door-container-wrapper ${scrollPercentage != 0 && "can-left "}  ${
      scrollPercentage != 1 && "can-right"
    }`;
  }, [scrollPercentage]);
  return (
    <>
      <h1>Wybierz swoją ścieżkę kariery...</h1>
      <div className={getClassname()} onScroll={onScroll}>
        <div className="door-container">
          {DOORS.map((door) => (
            <Door {...door} {...{ isLocked, setLocked }} />
          ))}
        </div>
      </div>
      <h2>W gzowskim, każde drzwi stoją przed tobą otworem</h2>
    </>
  );
}

export default Doors;

import React from "react";
// import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/howManyParks";
import * as RMFunctions from "./parks/RockyMountain";
// import { trees, wildlife } from "./parks/RockyMountain";

function ColoradoStateParks() {
  return (
    <div>
      <MesaVerde />
    </div>
  )
}

export default ColoradoStateParks;
RMFunctions.wildlife();
console.log(RMFunctions.trees);
RMFunctions.elevation();

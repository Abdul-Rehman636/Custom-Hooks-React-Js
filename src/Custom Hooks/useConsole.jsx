import { useEffect, useState } from "react";

function useConsole() {
  useEffect(() => {
    console.log("Hey, you are using a web page...");
  });
}

export default useConsole;

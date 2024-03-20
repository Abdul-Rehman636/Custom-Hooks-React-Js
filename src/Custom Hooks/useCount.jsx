import { useEffect, useState } from "react";

function useCount(count) {
  useEffect(() => {
    if (count > 1) {
      console.log(count);
    } else {
      console.log(count);
    }
  });
}

export default useCount;

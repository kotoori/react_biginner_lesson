import { memo } from "react";

export const ChildComp3 = memo(() =>{
  console.log("ChildComp3レンダリング");

  return (
    <div>
      <p>ChildComp3</p>
    </div>
  );
});
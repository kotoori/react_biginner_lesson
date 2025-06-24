import { memo } from "react";

export const ChildComp2 = memo(() =>{
  console.log("ChildComp2のレンダリング");

  return (
    <div>
      <p>ChildComp2</p>
    </div>
  );
});
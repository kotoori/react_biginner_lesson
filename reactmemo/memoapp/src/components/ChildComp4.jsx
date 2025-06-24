import { memo } from "react";

export const ChildComp4 = memo(() =>{
  console.log("ChildComp4レンダリング");

  return (
    <div>
      <p>ChildComp4</p>
    </div>
  );
});
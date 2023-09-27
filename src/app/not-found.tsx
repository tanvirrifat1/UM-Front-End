import React from "react";
import img from "../../src/assets/loginImage/error.png";
import Image from "next/image";

export default function NotFoundPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Image
        style={{ width: "1000px", height: "800px" }}
        src={img}
        alt=""
      ></Image>
    </div>
  );
}

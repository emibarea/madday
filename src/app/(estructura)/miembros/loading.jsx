"use client";
import { TailSpin } from "react-loader-spinner";
export default function Loading() {
  return (
    <div className="absolute w-screen h-screen flex items-center justify-center">
      <TailSpin
        height="80"
        width="80"
        color="#cc5803ff"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        className=""
      />
    </div>
  );
}

"use client";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/navigation";
function BackArrow() {
  const router = useRouter();

  return (
    <div>
      <AiOutlineArrowLeft
        onClick={() => router.back()}
        className="cursor-pointer absolute w-10 h-10 left-3 top-3 bg-black/50 p-2 md:w-12 md:h-12 rounded-full z-30"
      />
    </div>
  );
}

export default BackArrow;

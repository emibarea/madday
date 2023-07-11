import React from "react";
import Link from "next/link";
const Links = ({ path, title }) => {
  return (
    <Link
      href={path}
      className="block cursor-pointer hover:underline hover:text-[--tawny] active:scale-90 transition duration-300 ease-out"
    >
      {title}
    </Link>
  );
};

export default Links;

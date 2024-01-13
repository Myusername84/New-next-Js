"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Links() {
  const pathName = usePathname();

  return (
    <div>
      <Link href="/" className={`link ${pathName === "/" ? "active" : ""}`}>
        Home
      </Link>
      <Link
        href="/about"
        className={`link ${pathName === "/about" ? "active" : ""}`}
      >
        About
      </Link>

      <Link
        href="/posts"
        className={`link ${pathName === "/posts" ? "active" : ""}`}
      >
        Posts
      </Link>
    </div>
  );
}

export default Links;

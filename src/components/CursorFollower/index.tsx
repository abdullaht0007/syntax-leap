"use client";

import { ReactNode, useEffect } from "react";
import "./index.css";
interface Props {
  children?: ReactNode;
}
const CursorFollower = ({ children }: Props) => {
  useEffect(() => {
    let xp = 0,
      yp = 0,
      xpDot = 0,
      ypDot = 0;
    let mouseX = 0,
      mouseY = 0;

    const outer = document.querySelector(".cursorFollower") as HTMLSpanElement;
    const inner = document.querySelector(
      ".cursorFollowerDot"
    ) as HTMLSpanElement;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.pageX;
      mouseY = e.pageY;
    };

    const handleMouseDown = () => {
      if (outer) outer.style.transform = "translate(-50%, -50%) scale(0.8)";
      if (inner) inner.style.transform = "translate(-50%, -50%) scale(0.6)";
    };

    const handleMouseUp = () => {
      if (outer) outer.style.transform = "translate(-50%, -50%) scale(1)";
      if (inner) inner.style.transform = "translate(-50%, -50%) scale(1)";
    };

    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    const loop1 = setInterval(() => {
      xp += (mouseX - xp) / 8;
      yp += (mouseY - yp) / 8;
      if (outer) {
        outer.style.left = `${xp}px`;
        outer.style.top = `${yp}px`;
      }
    }, 20);

    const loop2 = setInterval(() => {
      xpDot += (mouseX - xpDot) / 10;
      ypDot += (mouseY - ypDot) / 10;
      if (inner) {
        inner.style.left = `${xpDot}px`;
        inner.style.top = `${ypDot}px`;
      }
    }, 20);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      clearInterval(loop1);
      clearInterval(loop2);
    };
  }, []);

  return (
    <>
      <span className="cursorFollower"></span>
      <span className="cursorFollowerDot"></span>
      {children}
    </>
  );
};

export default CursorFollower;

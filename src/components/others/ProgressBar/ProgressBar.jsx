import { useEffect, useState } from "react";

export default function ProgressBar({ color, level, bgWidth }) {
  const [width, setWidth] = useState("0%");

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(`${level}%`);
    }, 200);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className=" bg-gray-200 rounded-full h-2" style={{width: `${bgWidth}%`}}>
        <div
          className="transition-width ease-out duration-1000 h-full rounded-full"
          style={{ width: width, backgroundColor: color }}
        ></div>
      </div>
    </>
  );
}

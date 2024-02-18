import React, { useEffect, useState } from "react";
import "./Matrix.scss";
import { throttle } from "lodash";

const Matrix = ({ count = 100 }) => {
  const [matrices, setMatrics] = useState([]);

  useEffect(() => {
    const width = window.innerWidth;

    const randomCode = () => {
      const randomCharCode = Math.floor(Math.random() * (127 - 32) + 32);
      return String.fromCharCode(randomCharCode);
    };

    const createMatrixEffect = () => {
      let str = "";
      for (let i = 0; i < 20; i++) {
        str += randomCode();
      }

      return {
        left: `${Math.random() * width}px`,
        transform: `translateZ(${
          (Math.random() - 0.5) * 1000
        }px) translateY(-120%)`,
        animationDelay: `${Math.random() * 8}s`,
        animationDuration: `${2 + Math.random() * 3}s`,
        content: str,
      };
    };

    // use throttle to limite the resizing trigger rate, limit to 200ms
    const handleResize = throttle(() => {
      setMatrics(new Array(count).fill(null).map(createMatrixEffect));
    }, 200);

    window.addEventListener("resize", handleResize);

    return () => {
      handleResize.cancel(); // cancel all non-execuated throttled function
      window.removeEventListener("resize", handleResize);
    };
  }, [count]);

  return (
    <div className="matrix">
      {matrices.map((matrix, index) => (
        <div
          key={index}
          className={"matrix__effect"}
          style={{
            left: matrix.left,
            transform: matrix.transform,
            animationDelay: matrix.animationDelay,
            animationDuration: matrix.animationDuration,
          }}
        >
          {matrix.content}
        </div>
      ))}
    </div>
  );
};

export default Matrix;

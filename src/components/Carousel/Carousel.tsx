import React, { useEffect, useState } from "react";
import CarouselItem from "./CarouselItem";
import "./index.css";

type CarouselProps = {
  items: string[];
  arrowColor?: string;
  arrowSize?: "small" | "medium" | "large";
};

export default function Carousel({
  items,
  arrowColor = "#fff",
  arrowSize = "small",
}: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const sizes = {
    small: "30px",
    medium: "40px",
    large: "60px",
  };

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    console.log("items", items.length);
    console.log("index", activeIndex);
  }, [activeIndex]);

  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {items.map((item) => {
          return <CarouselItem item={item} width={"100%"} />;
        })}
      </div>

      <div className="carousel-buttons">
        <button
          className="button-arrow left"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span
            style={{
              color: arrowColor,
              fontSize: sizes[arrowSize],
            }}
            className={`material-symbols-outlined ${
              activeIndex == 0 ? "disabled" : ""
            }`}
          >
            arrow_back_ios
          </span>{" "}
        </button>

        <button
          className="button-arrow right"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span
            style={{
              color: arrowColor,
              fontSize: sizes[arrowSize],
            }}
            className={`material-symbols-outlined ${
              activeIndex == items.length - 1 ? "disabled" : ""
            }`}
          >
            arrow_forward_ios
          </span>
        </button>
      </div>
    </div>
  );
}

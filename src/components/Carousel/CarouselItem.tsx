import "react";

type CarouselItemProps = {
  item: string;
  width: string;
};

export default function CarouselItem({ item, width }: CarouselItemProps) {
  return (
    <div className="carousel-item" style={{ width: width }}>
      <img className="carousel-img" src={item} />
    </div>
  );
}

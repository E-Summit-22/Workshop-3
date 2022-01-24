import { useState } from "react";

const Slider = () => {
  const images = [
    "https://m.media-amazon.com/images/I/81WCgBqYHhL._AC_SL1500_.jpg",
    "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQ052?wid=4000&hei=1800&fmt=jpeg&qlt=95&.v=1495129815011",
    "https://m.media-amazon.com/images/I/71TBg4r1oNL._AC_SY450_.jpg",
  ];

  const [index, setIndex] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>
        <img style={{ height: "200px" }} src={images[index]} alt="test_image" />
      </div>
      <div>
        <button
          onClick={() => {
            if (index > 0) setIndex(index - 1);
            else setIndex(2);
          }}
        >
          Previous Image
        </button>
        <button
          onClick={() => {
            if (index < images.length - 1) setIndex(index + 1);
            else setIndex(0);
          }}
        >
          Next Image
        </button>
      </div>
    </div>
  );
};

export default Slider;

import Image from "next/image";
import myImage from "../public/images/1.jpg";

const Products = () => {
  return (
    <div>
      <div>
        <Image
          src={myImage}
          width="800"
          height="400"
          quality={30}
          placeholder="blur"
        />
      </div>
      {["1", "2", "3", "4"].map((path) => {
        return (
          <div>
            <Image
              src={`/images/${path}.jpg`}
              width="800"
              height="400"
              quality={30}
              placeholder="blur"
              blurDataURL={`/images/${path}.jpg`}
              loading="lazy"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Products;

import axios from "axios";
import Link from "next/link";

const EpisodeList = ({ productList }) => {
  return (
    <>
      <h1>Products List Page</h1>
      {productList.map((product) => {
        return (
          <div key={product.id}>
            <Link href={`/products/${product.id}`}>
              <h1>
                title: {product.title} - price: {product.price}
              </h1>
            </Link>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default EpisodeList;

export async function getStaticProps() {
  const { data } = await axios.get("http://localhost:4000/products");
  return {
    props: {
      productList: data,
    },
  };
}

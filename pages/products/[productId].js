import axios from "axios";
import { useRouter } from "next/router";

const Episode = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Product Detail Page</h1>
      <h2>
        Title: {product.title} - Price: {product.price}
      </h2>
      <p>{product.description}</p>
    </>
  );
};

export default Episode;

export async function getStaticPaths() {
  return {
    paths: [{ params: { productId: "1" } }],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { data } = await axios.get(
    `http://localhost:4000/products/${params.productId}`
  );
  console.log(`generating the /products/${params.productId} page`);

  return {
    props: {
      product: data,
    },
    revalidate: 10,
  };
}

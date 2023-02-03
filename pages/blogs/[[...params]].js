import { useRouter } from "next/router";

const Blog = () => {
  const router = useRouter();
  const { params } = router.query;

  console.log(params);

  return <h2>catch all routes</h2>;
};

export default Blog;

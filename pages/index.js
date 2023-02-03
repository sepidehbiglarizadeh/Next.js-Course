import Link from "next/link";
import { useRouter } from "next/router";

const HomePage = () => {
  const router = useRouter();

  const clickHandler = () => {
    router.push("/blogs");
  };

  return (
    <>
      <div>This is Home Page</div>
      <Link href="/posts">Go to posts page?</Link>
      <br />
      <button onClick={clickHandler}>Push To Blogs</button>
    </>
  );
};

export default HomePage;

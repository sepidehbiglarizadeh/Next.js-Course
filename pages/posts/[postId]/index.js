import Link from "next/link";
import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { postId } = router.query;

  return (
    <>
      <h2>This is Post- {postId}</h2>
      <Link href="/">Back to Home Page?</Link>
    </>
  );
};

export default Post;

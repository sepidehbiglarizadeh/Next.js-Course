import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { postId } = router.query;
  
  return <h2>This is Post- {postId}</h2>;
};

export default Post;

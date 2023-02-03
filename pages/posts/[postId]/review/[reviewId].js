import { useRouter } from "next/router";

const Review = () => {
  const router = useRouter();
  const { postId, reviewId } = router.query;

  return (
    <h2>
      Reviw {reviewId} for Post {postId}
    </h2>
  );
};

export default Review;

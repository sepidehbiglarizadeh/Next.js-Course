import Link from "next/link";

const PostsList = () => {
  return (
    <>
      <div>This is PostList</div>
      <Link href="/posts/1">Go to Post 1</Link>
      <br />
      <Link href="/posts/2">Go to Post 2</Link>
      <br />
      <Link href="/posts/3" replace>
        Go to Post 3
      </Link>
    </>
  );
};

export default PostsList;

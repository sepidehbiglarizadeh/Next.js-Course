import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <h2>404 - Page Not Found</h2>
      <Link href="/">Go To Home Page</Link>
    </>
  );
};

export default NotFound;

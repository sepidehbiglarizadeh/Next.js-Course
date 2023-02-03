import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <div>This is HomePage</div>
      <Link href="/users">Go To Users Page?</Link>
      <br/>
      <Link href="/episodes">Go To Episodes Page?</Link>
    </>
  );
};

export default HomePage;

import SEO from "@/common/SEO";

const Blogs = (props) => {
  return (
    <div>
      <SEO meta={props} />
      <h1>This is blog page</h1>
    </div>
  );
};

export default Blogs;

export const getServerSideProps = () => {
  return {
    props: {
      title: "Blog-1",
      desc: "This is desc",
    },
  };
};

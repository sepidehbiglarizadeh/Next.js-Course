import axios from "axios";

const BlogsList = ({ blogs }) => {
  return (
    <div>
      <h1>Blog List Page</h1>
      <div>
        {blogs.map((blog) => {
          return (
            <h2 key={blog.id}>
              Title: {blog.title} - Category: {blog.category}
            </h2>
          );
        })}
      </div>
    </div>
  );
};

export default BlogsList;

export async function getServerSideProps(context) {
  const { data } = await axios.get("http://localhost:4000/blogs");
  return {
    props: {
      blogs: data,
    },
  };
}

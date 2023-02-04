import axios from "axios";

const BlogsList = ({ blogs, category }) => {
  return (
    <div>
      <h1>Blogs for category: {category}</h1>
      <div>
        {blogs.map((blog) => {
          return (
            <div key={blog.id}>
              <h2>Title:{blog.title}</h2>
              <p>{blog.description}</p>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogsList;

export async function getServerSideProps(context) {
  const { params,query } = context;
  const { category } = params;
  console.log(query);
  const { data } = await axios.get(`http://localhost:4000/blogs?category=${query.category}`);
  console.log('Generating category page');
  return {
    props: {
      category,
      blogs: data,
    },
  };
}

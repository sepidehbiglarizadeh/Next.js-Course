import User from "@/components/User";
import axios from "axios";

const UsersList = ({userList}) => {
  // console.log(userList);

  return (
    <>
      <h1>UserList Page</h1>
      {userList.results.map((user)=>{
        return (
          <User user={user} key={user.id} />
        )
      })}
    </>
  );
};

export default UsersList;

export async function getStaticProps() {
  const { data } = await axios.get("https://rickandmortyapi.com/api/character");
  return {
    props: {
      userList: data,
    },
  };
}

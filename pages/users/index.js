import axios from "axios";

const UsersList = ({userList}) => {
  console.log(userList);
  
  return (
    <>
      <h1>UserList Page</h1>
      {userList.results.map((user)=>{
        return (
          <div>
            Name: {user.name} - status: {user.status}
          </div>
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

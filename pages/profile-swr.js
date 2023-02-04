import axios from "axios";
import useSWR from "swr";

async function fetcher(url) {
  const { data } = await axios.get(url);
  return data;
}

const Profile = () => {
  const { data, error } = useSWR("getUserData", () =>
    fetcher("http://localhost:4000/profile")
  );

  console.log(data);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Profile Page</h1>
      <h2>
        Name: {data.name} - Transactions: {data.transactions} - Balance:{" "}
        {data.balance}
      </h2>
    </div>
  );
};

export default Profile;

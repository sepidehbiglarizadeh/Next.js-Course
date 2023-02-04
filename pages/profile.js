import axios from "axios";
import { useEffect, useState } from "react";

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000/profile")
      .then((res) => {
        setLoading(false);
        setUserData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>Profile Page</h1>
      <h2>Name: {userData.name} - Transactions: {userData.transactions} - Balance: {userData.balance}</h2>
    </div>
  );
};

export default Profile;

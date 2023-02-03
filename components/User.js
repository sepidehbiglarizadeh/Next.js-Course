const User = ({user}) => {
  return (
    <div>
      Name: {user.name} - status: {user.status}
    </div>
  );
};

export default User;

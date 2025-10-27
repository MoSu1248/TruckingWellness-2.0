import UserPlaceHolder from "./UserPlaceholder";
import "./style.css"

const UserCard = ( {firstName, lastName} ) => {
  let username = `${firstName} `;
  let userSurname = `${lastName} `;
  return (
    <div className="user">
      <UserPlaceHolder name={username} last={userSurname} />
    </div>
  );
};
export default UserCard;

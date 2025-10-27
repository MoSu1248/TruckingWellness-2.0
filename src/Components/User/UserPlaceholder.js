  import React, { useState } from "react";
  import Avatar  from "./Avatar";


const UserPlaceHolder = ({ name, last, note , value }) => {

  const users = [
    {
      firstName: `${name}`,
      lastName: `${last}`,
    },
  ];
    return (
      <>

        {users.map(user => (
          <Avatar user={user}  />
        ))}
      </>

    );
  };
  export default UserPlaceHolder;
  
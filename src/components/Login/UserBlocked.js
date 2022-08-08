import { useNavigate } from "react-router-dom";

import Message from "../UI/Message";

const UserBlocked = () => {
  const navigate = useNavigate();

  return (
    <Message
      type="warning"
      mainMessage="You have no access to the system!"
      secondaryMessage="Please, contact your administrator."
      buttonTitle="OK, Got it!"
      onClick={() => {
        navigate("/", { replace: true });
      }}
    />
  );
};

export default UserBlocked;

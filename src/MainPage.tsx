import { useUserStore } from "./stores/userStore";
import { Link, Outlet } from "react-router-dom";
import { useMachine } from "@xstate/react";
import { appMachine } from "./machines/appMachine";

function MainPage() {
  const userName = useUserStore((state) => state.name);
  const setUserName = useUserStore((state) => state.setName);
  const [state, send] = useMachine(appMachine);

  return (
    <div>
      <div className="">Hello {userName}</div>
      <h1>{`Current State: ${state.value}`}</h1>
      <button onClick={() => setUserName("Denis")}>Update</button>
      <Link to={"browse"}>Go to Browse</Link>
      <Outlet />
    </div>
  );
}

export default MainPage;

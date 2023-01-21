import React from "react";
import { useUserStore } from "../stores/userStore";

const BrowsePage = () => {
  const userName = useUserStore((state) => state.name);

  return <div>BrowsePage from {userName}</div>;
};

export default BrowsePage;

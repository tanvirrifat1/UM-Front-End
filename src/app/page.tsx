import { redirect } from "next/navigation";
import React from "react";

const HomePage = () => {
  return redirect("/login");
};

export default HomePage;

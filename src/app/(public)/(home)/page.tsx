import Home from "./components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bilal Omari",
  description: "Engineering Lead",
};

const page = () => {
  return <Home />;
};

export default page;

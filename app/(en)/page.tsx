import Home from "@pages/home/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ahdaf",
  description: "Ahdaf website",
};
export default function Page() {
  return <Home lang="en" />;
}

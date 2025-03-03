import Donate from "@pages/Donate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate",
  description: "Donate to Ahdaf Charity Endowment",
};
export default function Page() {
  return <Donate />;
}

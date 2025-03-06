import ProgramInfo from "@components/ProgramInfo";
import { InfoCardProps } from "@components/ProgramInfo";

export default function Page() {
  const sampleData: InfoCardProps = {
    title: "Ahdaf School",
    text: "Ahdaf School is a non-profit educational institution, established in response to the decline in educational standards within the official education sector, which posed a serious challenge to the future of our children. There was an urgent need to create a school that adopts modern curricula and effective teaching methods to nurture students capable of pursuing their studies and fulfilling their responsibilities.\nOur approach relies on active methods that engage students, along with a modern curriculum designed to stimulate creativity, encourage discussion, and activate higher- thinking skills (analysis, synthesis, evaluation). This is all facilitated within a safe environment that fosters cooperation and responsibility.\nOur educational methods include:\nProject-based learning\nLearning through play\nUnstructured learning\nSelf-directed learning\nAs a non-profit institution, Ahdaf School is committed to providing an exceptional educational experience that empowers students to reach their full potential and contribute positively to society.",
    images: [
      "/images/programs/eshrakat_elem_1.png",
      "/images/programs/eshrakat_elem_2.png",
      "/images/programs/eshrakat_elem_3.png",
    ], // Replace with actual image URL

    links: [
      {
        name: "مدرسة أهداف",
        url: "#",
        icon: "facebook",
      },
      {
        name: "Ahdafschool",
        url: "#",
        icon: "instagram",
      },
      {
        name: "Ahdaf School",
        url: "#",
        icon: "linkedin",
      },
      {
        name: "Ahdaf.edu.lb",
        url: "https://ahdaf.edu.lb",
        icon: "url",
      },
    ],
  };
  return (
    <div className="">
      <ProgramInfo {...sampleData} />
    </div>
  );
}

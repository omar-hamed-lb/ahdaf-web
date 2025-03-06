import ProgramInfo from "@components/ProgramInfo";
import { InfoCardProps } from "@components/ProgramInfo";

export default function Page() {
  const sampleData: InfoCardProps = {
    title: "ESHRAQAT ELEM",
    text: "Eshraqat Elem Academy is dedicated to empowering vulnerable high school students from both private and public schools through a holistic approach to education. Our programs provide essential academic support, focusing on enhancing students' knowledge and skills to excel in their studies. In addition, we emphasize the development of soft skills such as communication, teamwork, and problem-solving. Recognizing the importance of informed decision-making for future success, Eshraqat Elem Academy also offers personalized university guidance, helping students navigate their options and choose paths that align with their aspirations. Through our comprehensive offerings, we aim to equip students with the tools they need to thrive academically and professionally.",
    images: [
      "/images/programs/eshrakat_elem_1.png",
      "/images/programs/eshrakat_elem_2.png",
      "/images/programs/eshrakat_elem_3.png",
    ], // Replace with actual image URL

    links: [
      {
        name: "Eshraqat Elem-إشراقة علم",
        url: "#",
        icon: "facebook",
      },
      {
        name: "Eshraqatelem",
        url: "#",
        icon: "instagram",
      },
    ],
  };
  return (
    <div className="">
      <ProgramInfo {...sampleData} />
    </div>
  );
}

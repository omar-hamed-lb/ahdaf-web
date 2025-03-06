import ProgramInfo from "@components/ProgramInfo";
import { InfoCardProps } from "@components/ProgramInfo";

export default function Page() {
  const sampleData: InfoCardProps = {
    title: "Eshraqa Academy",
    text: "Addressing the challenges faced by children in marginalized areas in Tripoli and its surrounding areas, Eshraqa endeavors to address challenges arising Eshhraqa Academy is committed to tackling the challenges encountered by children in underprivileged areas of Tripoli and its surroundings. We aim to break down educational obstacles and address learning difficulties that impede academic achievement. By focusing on improving academic performance, preventing school dropouts, and promoting moral development, we empower children and youth in these communities to play an active role in their own growth and the advancement of their surroundings.",
    images: [
      "/images/programs/eshraqa_1.png",
      "/images/programs/eshraqa_2.png",
      "/images/programs/eshraqa_3.png",
    ], // Replace with actual image URL

    links: [
      {
        name: "Eshraqat-إشراقة ",
        url: "#",
        icon: "facebook",
      },
      {
        name: "Eshraqa.ahdaf",
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

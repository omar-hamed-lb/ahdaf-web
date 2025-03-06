import ProgramInfo from "@components/ProgramInfo";
import { InfoCardProps } from "@components/ProgramInfo";

export default function Page() {
  const sampleData: InfoCardProps = {
    title: "Ajwad Centre",
    text: "Ajwad, the Lebanese center for School Development is committed to helping the education system keep pace with and compete against the world's leading schools. We believe that schools are pivotal to transformative change, and our goal is not just to make a difference but to effect real change in the world.\nOur comprehensive administrative, pedagogical, and educational services are designed to meet the diverse needs of schools and enhance their performance across various areas. Ajwad provides professional school improvement through cutting-edge automation software and teaching resources.",
    images: [
      "/images/programs/ajwad_1.png",
      "/images/programs/ajwad_2.png",
      "/images/programs/ajwad_3.png",
    ], // Replace with actual image URL

    links: [
      {
        name: "'المركز اللبناني لتطوير المدارس 'أجود",
        url: "https://www.facebook.com/AjwadEducation/",
        icon: "facebook",
      },
      {
        name: "Ajwadeducation",
        url: "https://www.instagram.com/ajwadeducation/",
        icon: "instagram",
      },
      {
        name: "Ajwad",
        url: "https://www.linkedin.com/company/ajwad/",
        icon: "linkedin",
      },
      {
        name: "Ajwadeducation.com",
        url: "https://Ajwadeducation.com",
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

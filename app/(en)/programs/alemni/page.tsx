import ProgramInfo from "@components/ProgramInfo";
import { InfoCardProps } from "@components/ProgramInfo";

export default function Page() {
  const sampleData: InfoCardProps = {
    title: "Alemni Foundation",
    text: "Alemni Foundation is dedicated to empowering students from underprivileged areas who face barriers to pursuing undergraduate education, despite their academic excellence and aspirations for success. We strive to be a catalyst for change, providing essential support to help these students realize their dreams. Through providing financial scholarships to university students in need, enabling them to pursue their academic goals. Beyond financial support, Alemni provides a range of programs designed to foster personal and intellectual growth. These include life coaching courses, recreational and cultural trips, and social volunteering activities that promote the development of well-rounded individuals within the community.",
    images: [
      "/images/programs/alemni_1.png",
      "/images/programs/alemni_2.png",
      "/images/programs/alemni_3.png",
    ], // Replace with actual image URL

    links: [
      {
        name: "Alemni – علّمني",
        url: "#",
        icon: "facebook",
      },
      {
        name: "alemni_foundation",
        url: "#",
        icon: "instagram",
      },
      {
        name: "alemni foundation",
        url: "#",
        icon: "linkedin",
      },
      {
        name: "https://alemni-foundation.com/",
        url: "https://alemni-foundation.com/",
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

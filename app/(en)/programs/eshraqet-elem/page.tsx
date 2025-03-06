import ProgramInfo from "@components/ProgramInfo";

export default function Page() {
  const sampleData = {
    title: "ESHRAQAT ELEM",
    text: "Eshraqat Elem Academy is dedicated to empowering vulnerable high school students from both private and public schools through a holistic approach to education. Our programs provide essential academic support, focusing on enhancing students' knowledge and skills to excel in their studies. In addition, we emphasize the development of soft skills such as communication, teamwork, and problem-solving. Recognizing the importance of informed decision-making for future success, Eshraqat Elem Academy also offers personalized university guidance, helping students navigate their options and choose paths that align with their aspirations. Through our comprehensive offerings, we aim to equip students with the tools they need to thrive academically and professionally.",
    images: ["/images/eshraqat-elem.png"], // Replace with actual image URL

    links: [
      {
        name: "Eshraqat Elem-إشراقة علم",
        url: "#",
        icon: "/icons/facebook-round_svgrepo.com.png",
      },
      {
        name: "Eshraqatelem",
        url: "#",
        icon: "/icons/instagram_svgrepo.com.png",
      },
    ],
  };
  return (
    <div className="">
      <ProgramInfo {...sampleData} />
    </div>
  );
}

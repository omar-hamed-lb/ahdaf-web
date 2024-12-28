import content from "@/content/home";
import Image from "next/image";

export default function Home({ lang }: { lang: "en" | "ar" }) {
  return (
    <div>
      <h1 className="text-xl text-center mb-4 mt-4">{content.title[lang]}</h1>
      <div>{content.paragraph[lang]}</div>
      <div className="flex justify-center">
        <Image src="/images/ahdaf.png" alt="Ahdaf" width={500} height={500} />
      </div>
    </div>
  );
}

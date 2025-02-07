import Link from "next/link";
import Image from "next/image";

export default function HomePrograms() {
  return (
    <section className="py-16 text-center bg-white">
      <h2 className="text-3xl font-bold text-green-500">OUR PROGRAMS</h2>
      <p className="text-black text-center mt-4 max-w-4xl mx-auto text-xl">
        All the coordinated set of activities, projects, or services carried out
        by AHDAF organization to support educational needs.
      </p>
      <div className="grid grid-cols-1 text-left md:grid-cols-3 gap-6 px-6 mt-8">
        <ProgramCard
          title="ESHRAQAT ELEM"
          description="Provides academic support and life coaching for high school students, guiding them in selecting university majors while enhancing their overall educational experience."
          logo="/logos/isharket-elem-logo.png"
          goto="#"
        />
        <ProgramCard
          title="ALEMNI FOUNDATION"
          description="Empowers university students through scholarships and development programs that enhance their life skills and values, fostering personal growth and community engagement."
          logo="/logos/Alemni-logo.png"
          goto="#"
        />
        <ProgramCard
          title="ESHRAQA ACADEMY"
          description="Focuses on reducing school dropout rates by providing retention support and recreational activities for children aged 8-14, promoting personal growth and community involvement."
          logo="/logos/Eshraqa-logo.png"
          goto="#"
        />
      </div>
      <div className="grid grid-cols-1 text-left md:grid-cols-2 gap-6 px-6 mt-8">
        <ProgramCard
          title="AJWAD CENTER"
          description="Dedicated to improving school development through innovative educational practices, aiming to enhance the overall learning experience for students in Lebanon."
          logo="/logos/ajwad-logo.png"
          goto="#"
        />
        <ProgramCard
          title="AHDAF SCHOOL"
          description="Offers a nurturing educational environment that emphasizes active learning and strong values among students, utilizing modern teaching methods to foster creativity and critical thinking."
          logo="/logos/ahdaf-school-logo.png"
          goto="#"
        />
      </div>
    </section>
  );
}

interface ProgramCardProps {
  title: string;
  description: string;
  logo: string;
  goto: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  description,
  logo,
  goto,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4 w-full max-w-lg transition-transform duration-300 hover:scale-105 mx-auto mb-10">
      <div className="flex flex-1 flex-row justify-between items-center gap-4">
        <div className="flex flex-col space-y-2 flex-grow">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <p className="text-lg text-gray-700">{description}</p>
        </div>
        <div className="flex-shrink-0">
          <Image
            src={logo}
            alt={`${title} Logo`}
            width={100}
            height={93}
            className="object-contain"
          />
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <Link
          href={goto}
          className="bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors duration-300 hover:bg-red-700"
        >
          MORE
        </Link>
      </div>
    </div>
  );
};

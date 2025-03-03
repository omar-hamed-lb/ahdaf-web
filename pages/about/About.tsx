import Image from "next/image";
export function Program({
  title,
  logo,
  width,
  height,
}: {
  title: string;
  logo: string;
  width?: number;
  height?: number;
}) {
  return (
    <div className="flex-1 max-w-[200px] mx-auto my-6">
      <div className="min-h-[5rem] flex justify-center items-center">
        <Image
          className="center block mx-auto brightness-0 invert "
          src={logo}
          alt={title}
          width={width || 120}
          height={height || 120}
        />
      </div>

      <h3 className=" font-bold uppercase mt-4">{title}</h3>
    </div>
  );
}

export default function About() {
  return (
    <section
      className="relative bg-cover bg-center py-28 "
      style={{ backgroundImage: "url('/backgrounds/about_us_bg.png')" }}
    >
      <div className="absolute inset-0 bg-[#0D2853] opacity-90"></div>
      <div className="relative z-10 text-white text-center p-6">
        <h2 className="text-3xl font-bold text-cgreen block">ABOUT US</h2>
        <div className="mt-6 mx-auto max-w-[640px] text-justify lg:text-center lg:text-lg">
          We are a diverse group of individuals from Northern Lebanon
          -educators, businessmen and professionals from diverse fields- united
          by a shared vision to create meaningful change in our community and
          beyond.
        </div>

        {/* Three Benefits */}
        <div className="flex flex-col md:flex-row gap-14 text-white mt-16 text-left px-10 ">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-cbrown  block text-center">
              OUR MISSION
            </h3>
            <p className="text-justify lg:text-center lg:text-lg max-w-lg mx-auto">
              We work together through volunteering and institution-building to
              make Northern Lebanon—its people, values, economy, environment,
              and infrastructure—a source of inspiration for the world.
            </p>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-cbrown  block text-center">
              OUR VISION
            </h3>
            <p className="text-justify lg:text-center lg:text-lg max-w-sm mx-auto">
              We develop the individual to develop the world
              <br /> . نطور الانسان ليطور العالم
            </p>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-cbrown  block text-center">
              OUR VALUES
            </h3>
            <p className="text-justify lg:text-center lg:text-lg max-w-sm mx-auto">
              Transparency - Contemporary - Excellence - Care - Reform.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-cgreen block mt-16">
          OUR PROGRAMS
        </h2>
        <div className="mt-6 mx-auto text-center flex flex-col md:flex-row flex-1 gap-4 justify-center">
          <Program title="Eshraqa" logo="/logos/Eshraqa-logo.png" />
          <Program
            title="Ahdaf"
            logo="/logos/ahdaf-school-logo.png"
            width={60}
            height={60}
          />
          <Program title="Alemni" logo="/logos/Alemni-logo.png" />
          <Program title="Eshraqet Elem" logo="/logos/isharket-elem-logo.png" />
          <Program title="Ahdaf" logo="/logos/ajwad-logo.png" />
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function Donate() {
  return (
    <div className="2xl:container lg:mx-auto md:text-lg xl:text-xl">
      {/* Top Image */}
      <section className="w-full relative mt-20">
        <Image
          src="/images/عطاؤك علمني.png" // Replace with your image path
          alt="Top Image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
          priority
        />
      </section>

      {/* Title Section */}
      <section className="flex flex-col items-center text-center mt-12">
        <h1 className="text-3xl mb-6 font-bold text-cgreen">
          ATA’UKA ALLAMANI
        </h1>
        <p className="w-[90%] max-w-4xl mx-auto text-[#081E3D] mb-8 text-justify lg:text-center md:text-lg xl:text-xl">
          As we welcome the holy month of Ramadan, Ahdaf Charity Endowment calls
          on you to be part of a life-changing mission – Ata’uka Allamani
          Campaign. This urgent initiative aims to collect zakat and sadaqat to
          support over 500 students in Lebanon, including both children and
          university students.
        </p>
      </section>

      {/* Why Support Section */}
      <section
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('/images/donation.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#0D2853] opacity-85"></div>
        <div className="relative z-10 text-white text-center p-6">
          <h2 className="text-3xl font-bold text-cgreen">
            WHY YOUR SUPPORT MATTERS?
          </h2>

          {/* Three Benefits */}
          <div className="flex flex-col md:flex-row gap-14 text-white mt-6 text-left px-10">
            <ol className="flex flex-col md:flex-row gap-14 list-decimal marker:text-[#D9B08C] marker:font-bold md:text-lg xl:text-xl ">
              <li className="flex-1">
                Empowerment through education: Your generosity helps provide
                essential resources, scholarships, and educational programs that
                empower students to reach their full potential.
              </li>
              <li className="flex-1">
                Community development: Every donation contributes to community
                initiatives that foster growth, resilience, and sustainability,
                ensuring that the benefits extend beyond the classroom.
              </li>
              <li className="flex-1">
                A lasting impact: With your help, we can create lasting change
                that resonates through generations, transforming lives and
                uplifting entire communities.
              </li>
            </ol>
          </div>

          <p className="mt-10 mx-auto max-w-[800px] text-justify lg:text-center md:text-lg xl:text-xl">
            Join us in our mission to create opportunities and inspire hope.
            Your contribution today can make all the difference in the world for
            those who need it most. Together, we can build a future filled with
            promise and possibility. Thank you for considering a donation to
            Ahdaf Charity Endowment; your support is invaluable!
          </p>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-10">
        <h2 className="text-center text-3xl font-bold text-cgreen">
          DONATION OPTIONS
        </h2>
        <div className="pr-6">
          {/* Wish Money */}
          <div className="mt-8">
            <div className="bg-[#FF0000] flex items-center p-2 rounded-r-md text-white w-fit pl-8">
              <h4 className="text-lg font-bold">Wish Money</h4>
              <Image
                width={47}
                height={17}
                src="/images/wish icon.png"
                alt="Wish Money"
                className="w-[47px] h-[17px] ml-2"
              />
            </div>
            <p className="mt-4 ml-8">
              Donate on this number: <strong>0096176050224</strong>
            </p>
          </div>

          {/* By Website */}
          <div className="mt-8">
            <div className="bg-[#7A7979] flex items-center p-2 rounded-r-md text-white w-fit pl-8">
              <h4 className="text-lg font-bold">Website</h4>
              <Image
                width={30}
                height={32}
                src="/images/global icon.png"
                alt="Global Giving"
                className="w-[30px] h-[32px] ml-8"
              />
            </div>
            <p className="mt-4 ml-8">
              Donate to ATA&apos;UKA ALLAMANI: Educate 500 Students via this
              link:
            </p>
            <p className="ml-8">
              <a href="http://goto.gg/68973" className="underline">
                http://goto.gg/68973
              </a>
            </p>
          </div>

          {/* By Bank */}
          <div className="mt-8">
            <div className="bg-[#102F5C] flex items-center p-2 rounded-r-md text-white w-fit pl-8">
              <h4 className="text-lg font-bold">Bank</h4>
              <Image
                width={34}
                height={33}
                src="/images/bank icon.png"
                alt="Bank Transfer"
                className="w-[34px] h-[33px] ml-12"
              />
            </div>
            <div className="ml-8 mt-4">
              <p>
                Donate by bank transfer from Lebanon in USD: IBAN NO:{" "}
                <strong>LB69 0127 0003 0023 5300 5169 1015</strong>
              </p>
              <p>Account Details:</p>
              <br />
              <p>
                Account: <strong>003/002/353/0051691/015</strong>
              </p>
              <br />

              <p className="underline font-bold">BENEFICIARY BANK:</p>
              <p>Blom Development Bank Sal</p>
              <p>
                Lebanon, Beirut, Corniche El Mazraa, Boulevard Saeb Salem, BLOM
                Bank Building
              </p>
              <p>Swift: BDBLLBBEXXX</p>
              <br />

              <p className="underline font-bold">INTERMEDIARY BANK:</p>
              <p>BLOM Bank</p>
              <p>Beirut, Lebanon</p>
              <br />
              <p>
                <strong className="underline">Swift: BLOMLBBX</strong>
              </p>
            </div>
          </div>

          {/* By Cash */}
          <div className="mt-8">
            <div className="bg-[#28C76F] flex items-center p-2 rounded-r-md text-white w-fit pl-8">
              <h4 className="text-lg font-bold">Cash</h4>
              <Image
                width={30}
                height={31}
                src="/images/$ icon.png"
                alt="Bank Transfer"
                className="w-[30px] h-[31px] ml-12"
              />
            </div>
            <p className="mt-4 ml-8">
              For donation by cash or check, or for any further enquiry please
            </p>
            <p className="ml-8">
              Send a WhatsApp text message on: 0096176050224
            </p>
            <p className="ml-8">
              Or contact us by email:{" "}
              <a href="mailto:info@ahdaf.org.lb">info@ahdaf.org.lb</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from "react";

export default function Page() {
  return (
    <div className="lg:container lg:mx-auto lg:text-lg">
      {/* Title Section */}
      <section className="flex flex-col items-center text-center mt-28">
        <h1 className="text-4xl font-bold text-[#009B0A]">ATA’UKA ALLAMANI</h1>
        <p className="w-[90%] max-w-3xl mx-auto text-[#081E3D] mb-4">
          Your donation to Ahdaf Charity Endowment will play a crucial role in
          shaping a brighter future for students and their communities. By
          contributing, you are not just giving money; you are investing in the
          dreams and aspirations of those who seek a better life through
          education and support.
        </p>
      </section>

      {/* Why Support Section */}
      <section
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('/images/donation.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#0D2853] opacity-85"></div>
        <div className="relative z-10 text-white text-center p-6">
          <h2 className="text-4xl font-bold text-[#009B0A]">
            WHY YOUR SUPPORT MATTERS?
          </h2>

          {/* Three Benefits */}
          <div className="flex flex-col md:flex-row gap-14 text-white mt-6 text-left px-10">
            <ol className="flex flex-col md:flex-row gap-14 list-decimal marker:text-[#FF0000] marker:font-bold">
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

          <p className="mt-10 mx-auto max-w-[640px]">
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
        <h2 className="text-center text-4xl font-bold text-[#009B0A]">
          DONATION OPTIONS
        </h2>

        {/* Wish Money */}
        <div className="mt-8">
          <div className="bg-[#FF0000] flex items-center p-2 rounded-r-md text-white w-fit pl-8">
            <h4 className="text-lg font-bold">Wish Money</h4>
            <img
              src="/images/wish icon.png"
              alt="Wish Money"
              className="w-[47px] h-[17px] ml-2"
            />
          </div>
          <p className="mt-4 ml-8">
            For donating by Wish Money to the Standing Together campaign:{" "}
            <strong>0096176050224</strong>
          </p>
        </div>

        {/* By Website */}
        <div className="mt-8">
          <div className="bg-[#7A7979] flex items-center p-2 rounded-r-md text-white w-fit pl-8">
            <h4 className="text-lg font-bold">By Website</h4>
            <img
              src="/images/global icon.png"
              alt="Global Giving"
              className="w-[30px] h-[32px] ml-8"
            />
          </div>
          <p className="mt-4 ml-8">
            For donating to the Standing Together campaign:
          </p>
          <p className="ml-8">
            <a
              href="https://www.globalgiving.org/projects/hope-initiative/ "
              className="underline"
            >
              https://www.globalgiving.org/projects/hope-initiative/{" "}
            </a>
            Short link:{" "}
            <a href="http://goto.gg/67781" className="underline">
              http://goto.gg/67781
            </a>
          </p>
        </div>

        {/* By Bank */}
        <div className="mt-8">
          <div className="bg-[#081E3D] flex items-center p-2 rounded-r-md text-white w-fit pl-8">
            <h4 className="text-lg font-bold">By Bank</h4>
            <img
              src="/images/bank icon.png"
              alt="Bank Transfer"
              className="w-[34px] h-[33px] ml-12"
            />
          </div>
          <div className="ml-8 mt-4">
            <p>
              For donating by bank transfer from Lebanon in USD: IBAN NO:{" "}
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
          <div className="bg-[#009B0A] flex items-center p-2 rounded-r-md text-white w-fit pl-8">
            <h4 className="text-lg font-bold">By Cash</h4>
            <img
              src="/images/$ icon.png"
              alt="Bank Transfer"
              className="w-[30px] h-[31px] ml-12"
            />
          </div>
          <p className="mt-4 ml-8">
            For donation by cash or check, or for any further enquiry please
          </p>
          <p className="ml-8">Send a WhatsApp text message on: 0096176050224</p>
          <p className="ml-8">Or contact us by email on:</p>
        </div>
      </section>
    </div>
  );
}

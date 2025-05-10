import React from "react";

const About = () => {
  return (
    <div className=" container min-h-screen pb-12">
      <div className=" flex w-full flex-col items-center mt-12 mb-4">
        <p className="text-3xl font-extrabold text-slate-700 mb-2">ABOUT US</p>
        <div className="bg-red-400 h-1 w-[100px] "></div>
      </div>
      <p className="max-w-4xl mx-auto text-pretty text-justify text-base text-gray-600">
        Welcome to Das InfoTech – your trusted destination for the latest and
        most reliable computer components and accessories. As the official
        online extension of Das InfoTech Private Limited, we bring nearly two
        decades of expertise and passion in the IT distribution industry
        directly to your screen.
      </p>

      <div className="flex flex-col  items-center mt-6">
        <p className="text-3xl mb-4 font-extrabold text-white  bg-amber-500 py-2 px-8 rounded-full w-fit">
          {" "}
          Who We Are{" "}
        </p>
        <p className="max-w-4xl mx-auto text-pretty text-justify text-base text-gray-600">
          Established in 2013, Das InfoTech has grown into one of West Bengal’s
          leading IT distribution companies, known for offering top-tier PC
          components and unmatched customer service. With Das InfoTech, we take
          this legacy forward—empowering tech enthusiasts, gamers, and
          professionals alike with a robust online platform that combines
          quality, convenience, and competitive pricing.
        </p>
      </div>

      <div className="flex flex-col  items-center mt-6">
        <p className="text-3xl mb-4 font-extrabold text-white  bg-lime-500 py-2 px-8 rounded-full w-fit">
          {" "}
          What We Offer{" "}
        </p>
        <p className="max-w-4xl mx-auto text-pretty text-justify text-base text-gray-600">
          At Das InfoTech, we specialize in a wide spectrum of branded IT
          products ranging from processors, graphics cards, RAM, and
          motherboards to power supplies, cases, and peripherals. Whether you’re
          building your dream gaming rig, upgrading your office setup, or
          seeking premium content creation tools—we’ve got you covered. We are
          authorized dealers for globally recognized brands such as:{" "}
          <span className="text-base font-bold">
            {" "}
            AMD, ADATA, Antec, Ant Esports, ASUS, ASRock, Blackmagic Design,
            Circle, Cooler Master, Corsair, Deepcool, Inno3D, Lian Li, MSI,
            Noctua, NZXT, Sapphire, Thermaltake, XPG, ZOTAC,{" "}
          </span>{" "}
          and many more. We also proudly offer products from tech giants like
          <span className="text-base font-bold">
            {" "}
            Dell, Gigabyte, G.Skill, HP, Intel, Lenovo, Logitech, LG, Microsoft,
            Razer, Samsung, Seagate, and Western Digital..{" "}
          </span>
        </p>
      </div>

      <div className="flex flex-col  items-center mt-6">
        <p className="text-3xl mb-4 font-extrabold text-white  bg-orange-500 py-2 px-8 rounded-full w-fit">
          Our Commitment{" "}
        </p>
        <p className="max-w-4xl mx-auto text-pretty text-justify text-base text-gray-600">
          At Das InfoTech, our motto is simple: Deliver superior quality,
          trusted brands, and exceptional after-sales support. We believe in
          creating a WIN-WIN model for every customer, partner, and stakeholder
          we work with. From the moment you land on our site to the second your
          product arrives at your door, we aim to make your shopping experience
          seamless, efficient, and satisfying.
        </p>
      </div>

      <div className="flex flex-col  items-center mt-6">
        <p className="text-3xl mb-4 font-extrabold text-white  bg-blue-500 py-2 px-8 rounded-full w-fit">
          Why Shop With Us{" "}
        </p>

        <ul>
          <li className="max-w-4xl list-disc mx-auto text-pretty text-justify text-base text-gray-600">
            {" "}
            Cutting-edge E-commerce Platform – For a smooth and secure shopping
            journey
          </li>
          <li className="max-w-4xl list-disc mx-auto text-pretty text-justify text-base text-gray-600">
            Expert Buying Team – To bring you the best products at unbeatable
            value
          </li>
          <li className="max-w-4xl list-disc mx-auto text-pretty text-justify text-base text-gray-600">
            Agile Warehouse System – Ensuring prompt and accurate delivery
          </li>
          <li className="max-w-4xl list-disc mx-auto text-pretty text-justify text-base text-gray-600">
            Responsive Customer Care – For quick, friendly, and effective
            support
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;

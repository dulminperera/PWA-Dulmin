import React from "react";
import { healthBg } from "../assets";


const HealthPage = () => {
  return (
    <section className="flex flex-col text-center justify-center items-center h-screen relative">
      <img
        src={healthBg}
        alt={"bg img"}
        className="w-full h-[80%] object-cover absolute -z-50 opacity-40 top-0"
      />
      <h1 className="md:text-5xl font-bold text-3xl">Why is insurtech better in health insurance</h1>
      <p className="md:w-[50%] lg:[100%] text-center mt-10 text-lg">
        Insurtech has emerged as a game-changer in the realm of health
        insurance, offering several advantages over traditional insurance
        methods. Firstly, it brings efficiency to the process by leveraging data
        analytics and AI for accurate risk assessment, resulting in fairer
        premiums. This not only makes health insurance more affordable but also
        accessible to a wider audience. Secondly, insurtech enhances the
        customer experience. With user-friendly online platforms and mobile
        apps, policyholders can easily manage their insurance, from purchasing
        to filing claims. This level of convenience fosters greater transparency
        and satisfaction. Lastly, insurtech promotes preventive healthcare.
        Integration with wearable devices and health apps incentivizes
        policyholders to adopt healthier lifestyles, benefiting both individuals
        and insurers. These innovations collectively make insurtech-driven
        health insurance more important, better, and reliable than its
        traditional counterparts, ultimately transforming the insurance
        landscape for the better.
      </p>
     
    </section>
  );
};

export default HealthPage;

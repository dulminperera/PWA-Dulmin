import React from "react";
import { carBg } from "../assets";

const VehiclePage = () => {
  return (
    <section className="flex flex-col text-center justify-center items-center h-auto relative">
      <img
        src={carBg}
        alt={"bg img"}
        className="w-full h-[80%] object-cover absolute -z-50 opacity-40 top-0"
      />
      <h1 className="text-3xl md:text-5xl font-bold">
        Why is insurtech better in vehicle insurance
      </h1>
      <p className="w-full md:w-[50%] text-center mt-10 text-lg">
        Insurtech has reshaped the landscape of vehicle insurance, offering
        compelling advantages that make it more important, better, and reliable
        than traditional methods. Firstly, insurtech has introduced usage-based
        insurance (UBI) models. By utilizing telematics devices and smartphone
        apps, insurers can monitor policyholders' driving behavior in real-time.
        This allows for personalized premiums based on actual risk, promoting
        safer driving habits and fairer pricing. Secondly, insurtech streamlines
        claims processing. Through automation and digital documentation, claims
        can be verified and settled rapidly, reducing both inconvenience and
        fraud risks. This results in a smoother and more reliable claims
        experience for policyholders. Additionally, insurtech fosters
        preventative measures. The integration of IoT devices and vehicle data
        analytics enables insurers to offer insights and incentives for
        maintenance, thereby reducing accidents and claims, making vehicle
        insurance more reliable and cost-effective. In summary, insurtech's
        impact on vehicle insurance includes personalized pricing through UBI,
        efficient claims processing, and preventive measures. These factors
        collectively make insurtech-driven vehicle insurance more important,
        better, and reliable compared to traditional methods, ultimately
        benefiting both insurers and policyholders by promoting safety
        and reducing costs.
      </p>
    </section>
  );
};

export default VehiclePage;

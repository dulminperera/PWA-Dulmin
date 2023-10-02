import React from "react";
import { lifeBg } from "../assets";

const LifePage = () => {
  return (
    <section className="flex flex-col text-center  justify-center items-center h-auto relative">
      <img
        src={lifeBg}
        alt={"bg img"}
        className="w-full h-[80%] object-cover absolute -z-50 opacity-40 top-0"
      />
      <h1 className="text-3xl md:text-5xl font-bold">
        Why is insurtech better in life insurance
      </h1>
      <p className="w-full md:w-[50%] text-center mt-10 text-lg">
        Insurtech has also brought significant improvements to the world of life
        insurance, offering compelling reasons why it's more important, better,
        and reliable than conventional life insurance methods. Firstly,
        insurtech revolutionizes the underwriting process. By harnessing big
        data and advanced algorithms, insurtech companies can assess an
        individual's risk profile more accurately. This means that life
        insurance policies can be tailored to the specific needs and health
        conditions of the insured, resulting in fairer premiums and greater
        affordability. Secondly, insurtech enhances the customer experience in
        life insurance. Online platforms and mobile apps enable policyholders to
        easily manage their policies, access information, and even update
        beneficiaries. This transparency and convenience foster higher
        satisfaction levels. Furthermore, insurtech offers the potential for
        policyholders to benefit from financial planning tools and integrated
        investment options, making life insurance more than just a safety net
        but a tool for wealth accumulation and protection. In conclusion,
        insurtech's impact on life insurance includes improved underwriting
        accuracy, enhanced customer experiences, and the potential for
        integrated financial planning. These factors make insurtech-driven life
        insurance more important, better, and reliable compared to traditional
        life insurance methods, ultimately offering more tailored and accessible
        coverage for individuals and families.
      </p>
    </section>
  );
};

export default LifePage;

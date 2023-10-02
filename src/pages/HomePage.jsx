import React from "react";
import HomepageCard from "../constance";
import HomeCard from "../components/HomeCard";

const HomePage = () => {
  return (
    <section className="w-full h-auto flex  flex-col justify-center items-center">
      <h1>Employee</h1>
      <div className="mx-auto w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly gap-6 mt-5">
        {HomepageCard.map((card) => (
          <HomeCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default HomePage;

import React from "react";
import { Link } from "react-router-dom";

const HomeCard = ({ title, img, discription,path }) => {
  return (
    <Link to={`/${path}`} className="w-full bg-gray-300 p-2 rounded-md flex flex-col justify-start items-center hover:scale-105">
      <img src={img} loading="lazy" alt={title} className="w-full" />
      <h1 className="text-3xl py-3">{title}</h1>
      <p className="py-3">{discription}</p>
    </Link>
  );
};

export default HomeCard;

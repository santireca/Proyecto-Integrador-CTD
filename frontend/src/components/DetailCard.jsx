import React from "react";

const DetailCard = ({ img, title, subtitle }) => {
  return (
    <div className="flex flex-col w-[350px] h-[300px] sm:flex-row rounded-md justify-between items-center sm:w-[500px] hover:scale-[1.02] cursor-pointer shadow-md bg-primary">
      <img
        className="flex justify-center items-center object-cover w-full h-[150px] sm:w-[240px] sm:h-full rounded-l-md"
        src={img}
        alt={title}
      />
      <div className="flex flex-col w-[250px] p-3">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-xs">{subtitle}</p>
      </div>
    </div>
  );
};

export default DetailCard;

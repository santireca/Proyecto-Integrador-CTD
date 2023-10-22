import React from "react";

const DetailCard = ({ img, title, subtitle }) => {
  return (
    <div className="flex rounded-md justify-between items-center w-[500px] h-[200px] hover:scale-[1.02] cursor-pointer shadow-md bg-primary">
      <img
        className="flex justify-center items-center object-cover w-[230px] h-full rounded-l-md"
        src={img}
        alt={title}
      />
      <div className="flex flex-col w-[250px]">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-xs">{subtitle}</p>
      </div>
    </div>
  );
};

export default DetailCard;

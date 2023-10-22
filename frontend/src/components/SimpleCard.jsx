import React from "react";

const SimpleCard = ({ img, title, subtitle }) => {
  return (
    <div className="flex flex-col rounded-md justify-around items-center w-[248px] h-[200px] hover:scale-[1.02] cursor-pointer shadow-md bg-primary border-none outline-none ">
      <img
        className="flex justify-center items-center h-[150px] w-full rounded-t-md object-cover"
        src={img}
        alt={title}
      />
      <div className="flex flex-col w-full px-3 py-1">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-xs">{subtitle}</p>
      </div>
    </div>
  );
};

export default SimpleCard;

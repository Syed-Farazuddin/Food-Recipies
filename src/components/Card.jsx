import React from "react";

function Card() {
  return (
    <div className="w-[300px] h-[300px] border-2 border-slate-200  flex flex-col items-start justify-start bg-white p-3 rounded-lg">
      <img
        className=""
        src="https://recipe30.com/wp-content/uploads/2023/03/chicken-Biryani.jpg"
        alt=""
      />
      <div className="flex justify-start flex-col items-start gap-1">
        <p className="text-rose-400">Speciality</p>
        <h1>Title of the card</h1>
        <button className="bg-rose-500 rounded-md text-white font-bold p-1 mt-2">
          Recipe Details
        </button>
      </div>
    </div>
  );
}

export default Card;

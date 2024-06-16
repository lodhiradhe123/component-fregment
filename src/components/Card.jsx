import React from "react";

function Card() {
  var cards = [
    {
      title: "radhe",
      des: "shyam",
      instoke: true,
    },
    {
      title: "ravidas",
      des: "radhe",
      instoke: false,
    },
    {
      title: "vishnudas",
      des: "prafjasd",
      instoke: true,
    },
  ];
  return (
    <div className="w-full h-screen bg-zinc-300 flex justify-center items-center gap-10">
      {cards.map((card, index) => (
        <div className="w-52  bg-blue-200  rounded-lg  overflow-hidden">
          <div className="w-full bg-top bg-cover h-32 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1718417286278-b383b8a8ad6d?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <h1 className="uppercase font-bold mt-6 p-2">{card.title}</h1>
          <p className="text-sm capitalize p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            commodi.
          </p>
          <button className={`px-4 py-2 ${card.instoke ? "bg-blue-600": "bg-red-400"} rounded-lg text-white text-sm ml-4 mb-4` }>{card.instoke?"instoke":"out-stoke"}</button>
        </div>
      ))}
    </div>
  );
}

export default Card;

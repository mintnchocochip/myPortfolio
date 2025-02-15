import React from "react";

interface CTFDescriptionProps {
  description: string;
  points: number;
  solved: number;
}

const CTFDescription = ({
  description,
  points,
  solved,
}: CTFDescriptionProps) => {
  return (
    <div className="flex flex-col w-[40%]">
      <span className="font-neuebit w-full text-3xl p-8 border border-white text-left text-ellipsis">
        {description ||
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat ratione nemo ipsum iure amet mollitia dolores eveniet assumenda ab? Quidem earum, esse nam nemo quis labore doloremque beatae eaque veniam."}
      </span>
      <div className="flex flex-row px-8 py-4 text-3xl w-full border border-white justify-between">
        <span className="text-3xl">
          <span className="text-enigma-green pr-2">{points || 0}</span>
          POINTS
        </span>
        <span className="text-3xl">
          <span className="text-enigma-green pr-2">{solved || 0}</span>
          SOLVED
        </span>
      </div>
    </div>
  );
};

export default CTFDescription;

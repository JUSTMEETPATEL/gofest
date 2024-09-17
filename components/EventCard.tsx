import React from 'react';
import MainButton from "./MainButton";
import Link from 'next/link';

interface EventCardProps {
  title: string;
  description: string;
  value: string;
  strength: string;
  bgColor: string;
}

const EventCard = ({
  title,
  description,
  value,
  strength,
  bgColor,
}: EventCardProps) => {
  return (
    <div className={`rounded-lg overflow-hidden shadow-lg transition-transform transform hover:-translate-y-2 bg-${bgColor} p-6 m-6`}>
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold text-white bg-red-500 p-2 rounded-full animate-bounce">+3</div>
        <div className="flex items-center mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" height="20" fill="none">
            <g fill="#000">
              <path d="m2 4c1.10457 0 2-.89543 2-2s-.89543-2-2-2-2 .89543-2 2 .89543 2 2 2z"></path>
              <path d="m2 12c1.10457 0 2-.8954 2-2 0-1.10457-.89543-2-2-2s-2 .89543-2 2c0 1.1046.89543 2 2 2z"></path>
              <path d="m2 20c1.10457 0 2-.8954 2-2s-.89543-2-2-2-2 .8954-2 2 .89543 2 2 2z"></path>
            </g>
          </svg>
        </div>
      </div>
      <div className="text-xl font-bold mt-4">{title}</div>
      <div className="text-gray-600 mt-2">{description.slice(0, 81)}</div>
      {/* <div className="text-sm text-gray-800 mt-4">
        <span className="font-bold">{strength}</span> / 850 |{" "}
        <span className="font-bold">{value}% filled</span>
      </div>
      <div className="mt-4">
        <progress className="w-full h-2" max="100" value={value}></progress>
      </div> */}
      <div className="flex justify-center items-center mt-6">
        <Link
          href="/event-registration"
        >
          <MainButton

            text="Register"
          />
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
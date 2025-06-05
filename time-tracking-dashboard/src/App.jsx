import { useState, useEffect } from "react";

import profileImage from "./assets/images/image-jeremy.png";
import iconWork from "./assets/images/icon-work.svg";
import iconPlay from "./assets/images/icon-play.svg";
import iconStudy from "./assets/images/icon-study.svg";
import iconExercise from "./assets/images/icon-exercise.svg";
import iconSocial from "./assets/images/icon-social.svg";
import iconSelfCare from "./assets/images/icon-self-care.svg";
import iconEllipsis from "./assets/images/icon-ellipsis.svg";

function App() {
  const [timeframe, setTimeframe] = useState("daily");
  const [data, setData] = useState([]);

  const icons = [
    iconWork,
    iconPlay,
    iconStudy,
    iconExercise,
    iconSocial,
    iconSelfCare,
  ];

  const colors = [
    "bg-orange-300",
    "bg-blue-300",
    "bg-pink-400",
    "bg-green-400",
    "bg-purple-700",
    "bg-yellow-300",
  ];

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        const modified = data.map((item, index) => ({
          ...item,
          icon: icons[index],
          color: colors[index],
        }));
        setData(modified);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <main className="min-h-screen bg-navy-950 flex flex-col items-center justify-center">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 md:max-w-3xl lg:max-w-5xl">
          {/* profile card */}
          <div className="bg-navy-900 rounded-lg md:col-span-3 lg:col-span-1 lg:row-span-2">
            {/* Profile Image and Name */}
            <div className="bg-purple-600 rounded-lg p-6 flex items-center gap-4 lg:flex-col lg:items-start lg:gap-8">
              <img
                className="w-16 border-3 rounded-full border-white"
                src={profileImage}
                alt="profile-image"
              />
              <div>
                <p className="text-preset6 text-navy-200">Report for</p>
                <h1 className="text-preset4 text-white mt-1 lg:mb-10">
                  Jeremy Robson
                </h1>
              </div>
            </div>
            {/* Timeframe Buttons */}
            <div className="flex justify-around p-6 text-purple-500 lg:flex-col lg:items-start lg:gap-4">
              <button
                onClick={() => setTimeframe("daily")}
                className={`hover:cursor-pointer ${
                  timeframe === "daily" ? "text-white" : "text-purple-500"
                }`}
              >
                Daily
              </button>
              <button
                onClick={() => setTimeframe("weekly")}
                className={`hover:cursor-pointer ${
                  timeframe === "weekly" ? "text-white" : "text-purple-500"
                }`}
              >
                Weekly
              </button>
              <button
                onClick={() => setTimeframe("monthly")}
                className={`hover:cursor-pointer ${
                  timeframe === "monthly" ? "text-white" : "text-purple-500"
                }`}
              >
                Monthly
              </button>
            </div>
          </div>
          {/* Cards */}
          {data.map((item, index) => (
            <div key={index} className={`card ${item.color} rounded-lg`}>
              {/* Card image */}
              <div className="relative h-12 w-full overflow-hidden">
                <img
                  className="absolute right-3 -top-1"
                  src={item.icon}
                  alt={item.title}
                />
              </div>
              {/* Card content */}
              <div className="bg-navy-900 rounded-lg p-6">
                {/* Card title and ellipsis icon */}
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-white text-preset5-medium">
                    {item.title}
                  </h2>
                  <img src={iconEllipsis} alt="More options" />
                </div>
                {/* Card timeframes */}
                <div className="flex justify-between items-center md:flex-col md:items-start gap-2">
                  <p className="text-white text-preset3">
                    {item.timeframes[timeframe].current}hrs
                  </p>
                  <p className="text-navy-200 text-preset6">
                    {timeframe == "daily"
                      ? "Yestereday"
                      : timeframe == "weekly"
                      ? "Last Week"
                      : "Last Month"}{" "}
                    - {item.timeframes[timeframe].previous}hrs
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;

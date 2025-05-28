import avatar from "./assets/images/avatar-michelle.jpg";
import drawers from "./assets/images/drawers.jpg";
import facebookIcon from "./assets/images/icon-facebook.svg";
import pinterestIcon from "./assets/images/icon-pinterest.svg";
import twitterIcon from "./assets/images/icon-twitter.svg";

import { useState } from "react";

function App() {
  const [ShowShare, setShowShare] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-grey-200 flex items-center justify-center">
        <div className="w-[80%] max-w-[700px] bg-white rounded-lg shadow-lg md:flex">
          <div className="max-h-[220px] md:max-h-none overflow-hidden">
            <img
              className="rounded-t-lg md:rounded-l-lg md:rounded-t-none md:h-[100%]"
              src={drawers}
              alt="drawers image"
            />
          </div>
          <div className="p-6">
            <h1 className="text-preset1 text-grey-900 my-2">
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </h1>
            <p className="text-preset2-medium text-grey-500 my-6">
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I've got some simple tips to
              help you make any room feel complete.
            </p>
            <div className="relative">
              {/* <-- This makes the share box position relative to this container */}
              <div
                className={`flex items-center gap-4 mt-10 ${
                  ShowShare ? "hidden md:flex" : ""
                }`}
              >
                <img
                  className="w-[40px] rounded-full"
                  src={avatar}
                  alt="profile photo"
                />
                <div>
                  <h2 className="text-preset2-bold text-grey-900">
                    Michelle Appleton
                  </h2>
                  <time
                    className="text-preset2-medium text-grey-400"
                    dateTime="2020-06-28"
                  >
                    28 Jun 2020
                  </time>
                </div>
                <button
                  onClick={() => setShowShare(!ShowShare)}
                  className="ml-auto bg-grey-200 rounded-full p-3 z-10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="13"
                    className="text-grey-500"
                    viewBox="0 0 15 13"
                  >
                    <path
                      fill="currentColor"
                      d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
                    />
                  </svg>
                </button>
              </div>
              {/* Desktop Share Box */}
              {ShowShare && (
                <div className="absolute bottom-full right-3 translate-x-1/2 mb-4 z-20">
                  <div className="hidden md:flex items-center gap-4 bg-grey-900 p-6 rounded-xl">
                    <p className="text-preset3 text-grey-400">SHARE</p>
                    <img src={facebookIcon} alt="facebook icon" />
                    <img src={twitterIcon} alt="twitter icon" />
                    <img src={pinterestIcon} alt="pinterest icon" />
                  </div>
                  <div className="hidden md:block w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-grey-900 mx-auto"></div>
                </div>
              )}
            </div>
          </div>
          {ShowShare && (
            <div className="flex md:hidden items-center gap-4 bg-grey-900 p-6 rounded-b-lg">
              <p className="text-preset3 text-grey-400">SHARE</p>
              <img src={facebookIcon} alt="facebook icon" />
              <img src={twitterIcon} alt="twitter icon" />
              <img src={pinterestIcon} alt="pinterest icon" />
              <button
                onClick={() => setShowShare(!ShowShare)}
                className="ml-auto bg-grey-500 rounded-full p-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="13"
                  className="text-white"
                  viewBox="0 0 15 13"
                >
                  <path
                    fill="currentColor"
                    d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;

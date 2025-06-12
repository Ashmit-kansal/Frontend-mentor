import { useState } from "react";

function App() {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const ratings = [1, 2, 3, 4, 5];

  return (
    <>
      <main className="min-h-screen flex items-center justify-center bg-gray-950">
        <div className="p-8 bg-linear-to-b from-gradient-1-from to-gradient-1-to rounded-2xl max-w-[412px] w-11/12">
          {!submitted ? (
            <div>
              <div className="bg-grey-900 p-3 md:p-5 w-fit rounded-full">
                <svg
                  className="w-[14px] h-[14px] md:w-[17px] md:h-[17px]"
                  viewBox="0 0 17 16"
                  width="17"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
                    fill="#FC7614"
                  />
                </svg>
              </div>
              <h1 className="text-preset2 md:text-[28px]/[35px] my-5 md:my-7 text-white">
                How did we do?
              </h1>
              <p className="text-preset5 md:text-[15px]/[24px] text-grey-500">
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
              </p>
              <div className="flex justify-between mt-5 md:mt-7">
                {ratings.map((num) => (
                  <button
                    key={num}
                    className={`bg-grey-900 rounded-full aspect-square w-12 md:w-15 text-grey-500 text-preset5-bold md:text-[16px]/[24px] hover:bg-white hover:cursor-pointer hover:text-grey-900 ${
                      rating === num ? "bg-orange-500 text-grey-900" : ""
                    }`}
                    onClick={() => setRating(num)}
                  >
                    {num}
                  </button>
                ))}
              </div>
              <button
                className="p-4 rounded-4xl bg-orange-500 w-full mt-5 md:mt-8 text-grey-950 text-preset5-bold md:font-semibold md:leading-[24px] md:tracking-[0.17px] hover:cursor-pointer hover:bg-white"
                onClick={() => setSubmitted(true)}
              >
                Submit
              </button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </main>
    </>
  );
}

export default App;

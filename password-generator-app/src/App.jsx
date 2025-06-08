import { useState } from "react";

function App() {
  return (
    <>
      <main>
        <div className="h-screen flex items-center justify-center bg-grey-950">
          {/* Container for Password Generator App */}
          <div className="w-11/12 max-w-[540px]">
            <h1 className="text-preset4 text-grey-600 text-center">Password Generator</h1>
            {/* Password and copy button */}
            <div className="w-full flex justify-between p-4 bg-grey-800 relative my-4">
              <input className="text-grey-700 text-preset2" type="text" readOnly value="GeneratedPassword" />
              <button className="absolute right-5 top-1/2 transform -translate-y-1/2">
                <svg width="21" height="24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z"
                    fill="#A4FFAF"
                  />
                </svg>
              </button>
            </div>
            {/* Password options */}
            <div className="bg-grey-800 p-4 flex flex-col gap-4 text-grey-200 text-preset4">
              <div className="flex justify-between items-center">
                <p>Character Length</p>
                <p className="text-preset2 text-green-200">0</p>
              </div>
              <input className="range-slider mb-5" type="range" min="0" max="20" step="1" value="0" />
              <label className="flex gap-2">
                <input className="appearance-none w-4 h-4 peer border-2 border-grey-200" type="checkbox" />
                <span>Include Uppercase Letters</span>
              </label>
              <label className="flex gap-2">
                <input className="appearance-none w-4 h-4 peer border-2 border-grey-200" type="checkbox" />
                <span>Include Lowercase Letters</span>
              </label>
              <label className="flex gap-2">
                <input className="appearance-none w-4 h-4 peer border-2 border-grey-200" type="checkbox" />
                <span>Include Numbers</span>
              </label>
              <label className="flex gap-2">
                <input className="appearance-none w-4 h-4 peer border-2 border-grey-200" type="checkbox" />
                <span>Include Symbols</span>
              </label>
              {/* strength of the password */}
              <div className="flex justify-between items-center p-4 bg-grey-850">
                <p className="text-grey-600">Strength</p>
                <div className="flex items-center gap-2">
                  <p>MEDIUM</p>
                  <div className="w-[10px] h-[28px] border"></div>
                  <div className="w-[10px] h-[28px] border"></div>
                  <div className="w-[10px] h-[28px] border"></div>
                  <div className="w-[10px] h-[28px] border"></div>
                </div>
              </div>
              <button className="w-full bg-green-200 text-grey-800 text-preset3 p-3">
                Generate{" "}
                <svg className="inline" width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#24232C"
                    d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;

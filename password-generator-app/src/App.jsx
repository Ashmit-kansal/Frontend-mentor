import { useReducer } from "react";

const initialState = {
  length: 0,
  includeUppercase: false,
  includeLowercase: false,
  includeNumbers: false,
  includeSymbols: false,
  password: "",
  strength: "",
  copied: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_LENGTH":
      return { ...state, length: action.value };
    case "TOGGLE_UPPERCASE":
      return { ...state, includeUppercase: !state.includeUppercase };
    case "TOGGLE_LOWERCASE":
      return { ...state, includeLowercase: !state.includeLowercase };
    case "TOGGLE_NUMBERS":
      return { ...state, includeNumbers: !state.includeNumbers };
    case "TOGGLE_SYMBOLS":
      return { ...state, includeSymbols: !state.includeSymbols };
    case "SET_PASSWORD":
      return { ...state, password: action.value };
    case "SET_STRENGTH":
      return { ...state, strength: action.value };
    case "TOGGLE_COPIED":
      return { ...state, copied: !state.copied };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const passwordGenerator = () => {
    const {
      length,
      includeUppercase,
      includeLowercase,
      includeNumbers,
      includeSymbols,
    } = state;
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()?";
    let charSet = "";
    let requiredChars = [];

    if (includeUppercase) {
      charSet += uppercaseChars;
      requiredChars.push(
        uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)]
      );
    }
    if (includeLowercase) {
      charSet += lowercaseChars;
      requiredChars.push(
        lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)]
      );
    }
    if (includeNumbers) {
      charSet += numberChars;
      requiredChars.push(
        numberChars[Math.floor(Math.random() * numberChars.length)]
      );
    }
    if (includeSymbols) {
      charSet += symbolChars;
      requiredChars.push(
        symbolChars[Math.floor(Math.random() * symbolChars.length)]
      );
    }

    if (charSet.length === 0) {
      dispatch({ type: "SET_PASSWORD", value: "" });
      dispatch({ type: "SET_STRENGTH", value: "TOO WEAK!" });
      return;
    }

    let passwordArray = [...requiredChars];
    for (let i = requiredChars.length; i < length; i++) {
      passwordArray.push(charSet[Math.floor(Math.random() * charSet.length)]);
    }

    // Shuffle password to avoid predictable order
    for (let i = passwordArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [passwordArray[i], passwordArray[j]] = [
        passwordArray[j],
        passwordArray[i],
      ];
    }

    const password = passwordArray.join("");
    dispatch({ type: "SET_PASSWORD", value: password });

    // Strength logic
    let strength = "TOO WEAK!";
    if (
      length >= 8 &&
      includeUppercase &&
      includeLowercase &&
      includeNumbers &&
      includeSymbols
    ) {
      strength = "STRONG";
    } else if (
      length >= 6 &&
      (includeUppercase || includeLowercase) &&
      (includeNumbers || includeSymbols)
    ) {
      strength = "MEDIUM";
    } else if (
      length >= 4 &&
      (includeUppercase || includeLowercase || includeNumbers || includeSymbols)
    ) {
      strength = "WEAK";
    }
    dispatch({ type: "SET_STRENGTH", value: strength });

    // Ensure the password length is at least the number of required characters
    if (state.length < requiredChars.length) {
      dispatch({ type: "SET_LENGTH", value: requiredChars.length });
      return;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(state.password);
    dispatch({ type: "TOGGLE_COPIED" });
    setTimeout(() => {
      dispatch({ type: "TOGGLE_COPIED" });
    }, 2000);
  };

  return (
    <>
      <main>
        <div className="h-screen flex items-center justify-center bg-grey-950">
          {/* Container for Password Generator App */}
          <div className="w-11/12 max-w-[540px]">
            <h1 className="text-preset4 text-grey-600 text-center">
              Password Generator
            </h1>
            {/* Password and copy button */}
            <div className="w-full flex justify-between p-4 bg-grey-800 relative my-4">
              <input
                className="text-white text-preset2 focus:outline-none"
                type="text"
                readOnly
                placeholder="P4$5W0rD!"
                value={state.password}
              />
              <button
                className="absolute right-5 top-1/2 transform -translate-y-1/2 flex gap-4"
                onClick={() => handleCopy()}
              >
                <p
                  className={`text-preset3 text-green-200 ${
                    state.copied ? "" : "hidden"
                  }`}
                >
                  COPIED
                </p>
                <svg
                  className="fill-current text-green-200 hover:cursor-pointer hover:text-white"
                  width="21"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z" />
                </svg>
              </button>
            </div>
            {/* Password options */}
            <div className="bg-grey-800 p-4 flex flex-col gap-4 text-grey-200 text-preset4">
              <div className="flex justify-between items-center">
                <p>Character Length</p>
                <p className="text-preset2 text-green-200">{state.length}</p>
              </div>
              <input
                className="range-slider mb-5"
                type="range"
                min="0"
                max="20"
                step="1"
                value={state.length}
                onChange={(e) =>
                  dispatch({ type: "SET_LENGTH", value: e.target.value })
                }
                style={{
                  "--value": state.length,
                  "--min": 0,
                  "--max": 20,
                }}
              />
              <label className="flex gap-2">
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={state.includeUppercase}
                  onChange={() => dispatch({ type: "TOGGLE_UPPERCASE" })}
                />
                <span>Include Uppercase Letters</span>
              </label>
              <label className="flex gap-2">
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={state.includeLowercase}
                  onChange={() => dispatch({ type: "TOGGLE_LOWERCASE" })}
                />
                <span>Include Lowercase Letters</span>
              </label>
              <label className="flex gap-2">
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={state.includeNumbers}
                  onChange={() => dispatch({ type: "TOGGLE_NUMBERS" })}
                />
                <span>Include Numbers</span>
              </label>
              <label className="flex gap-2">
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={state.includeSymbols}
                  onChange={() => dispatch({ type: "TOGGLE_SYMBOLS" })}
                />
                <span>Include Symbols</span>
              </label>
              {/* strength of the password */}
              <div className="flex justify-between items-center p-4 bg-grey-850">
                <p className="text-grey-600">Strength</p>
                <div className="flex items-center gap-2">
                  <p>{state.strength}</p>
                  <div
                    className={`w-[10px] h-[28px] border ${
                      state.strength == "TOO WEAK!"
                        ? "bg-red-500"
                        : state.strength == "WEAK"
                        ? "bg-orange-400"
                        : state.strength == "MEDIUM"
                        ? "bg-yellow-300"
                        : state.strength == "STRONG"
                        ? "bg-green-200"
                        : ""
                    }`}
                  ></div>
                  <div
                    className={`w-[10px] h-[28px] border ${
                      state.strength == "WEAK"
                        ? "bg-orange-400"
                        : state.strength == "MEDIUM"
                        ? "bg-yellow-300"
                        : state.strength == "STRONG"
                        ? "bg-green-200"
                        : ""
                    }`}
                  ></div>
                  <div
                    className={`w-[10px] h-[28px] border ${
                      state.strength == "MEDIUM"
                        ? "bg-yellow-300"
                        : state.strength == "STRONG"
                        ? "bg-green-200"
                        : ""
                    }`}
                  ></div>
                  <div
                    className={`w-[10px] h-[28px] border ${
                      state.strength == "STRONG" ? "bg-green-200" : ""
                    }`}
                  ></div>
                </div>
              </div>
              <button
                className="w-full bg-green-200 text-grey-800 text-preset3 p-3 hover:bg-grey-800 hover:border hover:border-green-200 hover:text-green-200 transition-colors duration-300"
                onClick={() => passwordGenerator()}
              >
                Generate{" "}
                <svg
                  className="fill-current inline"
                  width="12"
                  height="12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z" />
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

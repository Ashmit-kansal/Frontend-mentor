import illustration from "./assets/images/illustration-sign-up-mobile.svg";
import illustrationDesktop from "./assets/images/illustration-sign-up-desktop.svg";
import iconList from "./assets/images/icon-list.svg";
import iconSuccess from "./assets/images/icon-success.svg";

import { useState } from "react";

function App() {
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValid) {
      setError(true);
      return;
    }
    setSuccess(true);
  };

  const handleDismiss = () => {
    setSuccess(false);
    setEmail("");
    setError(false);
  };

  return (
    <>
      <main className="bg-blue-700 h-screen md:flex items-center justify-center">
        {!success ? (
          <div className="bg-white md:max-w-2xl lg:max-w-4xl h-screen md:h-auto md:rounded-4xl lg:flex lg:flex-row-reverse items-center">
            <div>
              <img
                className="w-full md:p-6 md:mt-4 md:rounded-t-[40px] lg:hidden"
                src={illustration}
                alt="illustration"
              />
              <img
                className="hidden lg:block h-full p-8"
                src={illustrationDesktop}
                alt="illustration"
              />
            </div>
            <div className="p-6 text-blue-800">
              <h1 className="text-preset1-mobile">Stay updated!</h1>
              <p className="text-preset2-regular my-5">
                Join 60,000+ product managers receiving monthly updates on:
              </p>
              <ul>
                <li className="flex items-start gap-4 mb-2 text-preset2-regular">
                  <img src={iconList} alt="list-icon" />
                  Product discovery and building what matters
                </li>
                <li className="flex items-start gap-4 mb-2 text-preset2-regular">
                  <img src={iconList} alt="list-icon" />
                  Measuring to ensure updates are a success
                </li>
                <li className="flex items-start gap-4 mb-2 text-preset2-regular">
                  <img src={iconList} alt="list-icon" />
                  And much more!
                </li>
              </ul>
              <form className="mt-8" onSubmit={(e) => handleSubmit(e)}>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="email" className="text-preset3">
                    Email address
                  </label>
                  {error && (
                    <span className="text-red text-preset3 text-xs">
                      Valid email required
                    </span>
                  )}
                </div>
                <input
                  className={`block w-full p-3 border rounded-lg my-2 ${
                    error ? "outline-red text-red bg-red-100" : "outline-grey"
                  }`}
                  type="text"
                  placeholder="Enter your email address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className={`text-preset2-bold text-white w-full p-4 rounded-lg my-4 
      ${
        email
          ? "bg-gradient-to-r from-gradient-left to-gradient-right"
          : "bg-blue-800"
      }`}
                  type="submit"
                >
                  Subscribe to monthly newsletter
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="bg-white md:max-w-xl lg:max-w-2xl h-screen md:h-auto md:rounded-4xl flex items-start justify-center flex-col p-6 md:p-18 max-w-lg">
            <img src={iconSuccess} alt="success-icon" />
            <h1 className="text-preset1-mobile md:text-preset1 text-blue-800 mt-6">
              Thank you for subscribing!
            </h1>
            <p className="text-preset2-regular my-5 text-blue-800">
              A confirmation email has been sent to{" "}
              <span className="font-bold">{email}</span>. Please open it and
              click the button inside to confirm your subscription.
            </p>
            <button
              className="text-preset2-bold text-white bg-blue-800 w-full p-4 rounded-lg my-4"
              onClick={handleDismiss}
            >
              Dismiss message
            </button>
          </div>
        )}
      </main>
    </>
  );
}

export default App;

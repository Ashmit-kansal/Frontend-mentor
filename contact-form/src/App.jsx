import { useState } from "react";

function App() {
  const [queryType, setQueryType] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [values, setValues] = useState({
    first: "initial",
    last: "initial",
    email: "initial",
    queryType: "initial",
    message: "initial",
    consent: "initial",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    setValues({
      first: data.firstName,
      last: data.lastName,
      email: data.email,
      queryType: data.queryType,
      message: data.message,
      consent: data.consent,
    });

    if (
      !data.firstName?.trim() ||
      !data.lastName?.trim() ||
      !data.email?.trim() ||
      !data.message?.trim() ||
      !data.consent ||
      !queryType
    ) {
      return;
    }

    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 4000); // Hide after 2 seconds
    e.target.reset();
    setQueryType("");
  };

  return (
    <>
      {showAlert && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-grey-900 text-white px-6 py-3 rounded-md z-50">
          <p className="body-md-bold text-white">✅ Message Sent!</p>
          <p className="text-white body-sm">
            Thanks for completing the form. We'll be in touch soon!
          </p>
        </div>
      )}
      <form
        className="bg-green-200 text-grey-900 p-4 min-h-screen flex items-center justify-center body-sm"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-auto">
          <h1 className="heading mb-6">Contact Us</h1>
          <div className="md:flex md:justify-between md:gap-3">
            <div className="mb-4 w-full">
              <label className="block mb-1" htmlFor="firstName">
                First Name <span className="text-green-600">*</span>
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                className={`w-full outline ${
                  values.first ? "outline-grey-500" : "outline-red-error"
                } rounded-md p-2 focus:outline-green-600 hover:outline-green-600`}
                required
              />
              {!values.first && (
                <p className="text-red-error body-sm">First name is required</p>
              )}
            </div>
            <div className="mb-4 w-full">
              <label className="block mb-1" htmlFor="lastName">
                Last Name <span className="text-green-600">*</span>
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                className={`w-full outline ${
                  values.first ? "outline-grey-500" : "outline-red-error"
                } rounded-md p-2 focus:outline-green-600 hover:outline-green-600`}
                required
              />
              {!values.last && (
                <p className="text-red-error body-sm">Last name is required</p>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="email">
              Email Address <span className="text-green-600">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className={`w-full outline ${
                values.first ? "outline-grey-500" : "outline-red-error"
              } rounded-md p-2 focus:outline-green-600 hover:outline-green-600`}
              required
            />
            {!values.email && (
              <p className="text-red-error body-sm">Email is required</p>
            )}
          </div>
          <fieldset className=" md:flex md:justify-between md:gap-3">
            <legend className="block mb-1">
              Query Type <span className="text-green-600">*</span>
            </legend>
            <div
              className={`mb-4 flex items-center outline outline-grey-500 ${
                queryType === "general" ? "bg-green-200 outline-green-600" : ""
              } rounded-md p-2 w-full hover:outline-green-600`}
            >
              <input
                id="general"
                name="queryType"
                type="radio"
                onChange={() => setQueryType("general")}
                className="mr-2 accent-green-600"
                required
              />
              <label htmlFor="general" className="body-md">
                General Enquiry
              </label>
            </div>
            <div
              className={`mb-4 flex items-center outline outline-grey-500 ${
                queryType === "support" ? "bg-green-200 outline-green-600" : ""
              } rounded-md p-2 w-full hover:outline-green-600`}
            >
              <input
                id="support"
                name="queryType"
                type="radio"
                onChange={() => setQueryType("support")}
                className="mr-2 accent-green-600"
              />
              <label htmlFor="support" className="body-md">
                Support Request
              </label>
            </div>
          </fieldset>
          {!values.queryType && (
            <p className="text-red-error body-sm mb-4">
              Please select a query type
            </p>
          )}
          <div className="mb-4">
            <label className="block mb-1" htmlFor="message">
              Message <span className="text-green-600">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              className={`w-full outline ${
                values.first ? "outline-grey-500" : "outline-red-error"
              } rounded-md p-2 focus:outline-green-600 hover:outline-green-600 h-36`}
              required
            />
            {!values.message && (
              <p className="text-red-error body-sm">Message is required</p>
            )}
          </div>
          <div className="mb-6 flex items-start">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              className="mr-2 my-auto w-5 h-5 border-2 border-grey-500 rounded accent-green-600"
              required
            />
            <label htmlFor="consent" className="font-normal">
              I consent to being contacted by the team{" "}
              <span className="text-green-600">*</span>
            </label>
          </div>
          {!values.consent && (
            <p className="text-red-error body-sm mb-4">Consent is required</p>
          )}
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-bold py-4 rounded-md hover:bg-grey-900"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default App;

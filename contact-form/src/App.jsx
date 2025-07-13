function App() {
  return (
    <>
      <form className="bg-green-200 p-4 min-h-screen flex items-center justify-center body-sm">
        <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-auto">
          <h1 className="heading mb-6">Contact Us</h1>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="firstName">
              First Name <span className="text-green-600">*</span>
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              className="w-full border border-grey-500 rounded-md p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="lastName">
              Last Name <span className="text-green-600">*</span>
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              className="w-full border border-grey-500 rounded-md p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="email">
              Email Address <span className="text-green-600">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full border border-grey-500 rounded-md p-2"
              required
            />
          </div>
          <fieldset className=" md:flex md:justify-between md:gap-2">
            <legend className="block mb-1">
              Query Type <span className="text-green-600">*</span>
            </legend>
            <div className="mb-4 flex items-center border border-grey-500 rounded-md p-2 w-full">
              <input
                id="general"
                name="queryType"
                type="radio"
                className="mr-2"
                required
              />
              <label htmlFor="general" className="body-md">
                General Enquiry
              </label>
            </div>
            <div className="mb-4 flex items-center border border-grey-500 rounded-md p-2 w-full">
              <input
                id="support"
                name="queryType"
                type="radio"
                className="mr-2"
              />
              <label htmlFor="support" className="body-md">
                Support Request
              </label>
            </div>
          </fieldset>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="message">
              Message <span className="text-green-600">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full border border-grey-500 rounded-md p-2 h-32"
              required
            />
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
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-bold py-4 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default App;

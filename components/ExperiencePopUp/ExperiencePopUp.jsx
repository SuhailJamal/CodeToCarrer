const ExperiencePopUp = () => {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
        <div className="bg-white rounded-lg shadow-lg p-8 w-3/4 max-w-md h-auto">
          <h2 className="text-2xl font-semibold mb-4 pt-4 text-center">
            Experience Level
          </h2>
          <h3 className="text-xl font-semibold mb-6 text-center">
            How experienced are you with this language?
          </h3>
          <form id="experience-form">
            <div className="flex flex-col space-y-4 mb-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="experience"
                  value="Beginner"
                  className="mr-2 text-blue-600 focus:ring-blue-500"
                />
                <span>Beginner</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="experience"
                  value="Intermediate"
                  className="mr-2 text-blue-600 focus:ring-blue-500"
                />
                <span>Intermediate</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="experience"
                  value="Advanced"
                  className="mr-2 text-blue-600 focus:ring-blue-500"
                />
                <span>Advanced</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="experience"
                  value="Expert"
                  className="mr-2 text-blue-600 focus:ring-blue-500"
                />
                <span>Expert</span>
              </label>
            </div>
            <p className="text-gray-500 text-center mb-6">
              Please select your experience level.
            </p>
            <button
              type="submit"
              className="flex items-center justify-center w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Submit Experience
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5-5 5M6 12h12"
                ></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ExperiencePopUp;

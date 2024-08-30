import ToggleSwitch from "./ToggleBtn";

const MyForm = () => {
  return (
    <>
      <form className="flex flex-col gap-4 items-center justify-center bg-white p-16 rounded-2xl min-w-[700px]">
        <div className="username flex flex-col w-full">
          <label htmlFor="">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter username"
            className="border-2 border-black rounded p-2 text-xl border-b-4"
          />
        </div>
        <div className="email flex flex-col w-full">
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            className="border-2 border-black rounded p-2 text-xl border-b-4"
          />
        </div>
        <div className="phoneNumber flex mt-5 w-full">
          <input
            type="number"
            name="phonenumber"
            id="phonenumber"
            placeholder="Enter phone number"
            className="border-2 border-black rounded p-2 text-lg border-b-4 flex-1"
          />
          <button
            disabled={true}
            className="w-32 text-sm p-4 border-2 border-blue-500 border-b-4 rounded text-blue-500 ml-2"
          >
            Verify
          </button>
        </div>
        <div className="personalID w-full flex flex-col relative">
          <label htmlFor="personalID">Personal Id Number</label>
          <div className="relative">
            <input
              type="text"
              name="personalID"
              id="personalID"
              defaultValue={"Value"}
              className="border-2 border-black rounded p-2 pr-8 text-xl border-b-4 w-full"
            />
            <p className="absolute top-3 right-3">✅</p>
          </div>
        </div>
        <div className="flex items-center justify-between w-full mt-2">
          <div>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="male"
                className="w-6 h-6 text-blue-500 bg-gray-100 border-gray-300 focus:ring-blue-500"
              />
              <span>Male</span>
            </label>
          </div>
          <div>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="female"
                className="w-6 h-6 text-blue-500 bg-gray-100 border-gray-300 focus:ring-blue-500"
              />
              <span>Female</span>
            </label>
          </div>
          <div>
            <ToggleSwitch />
          </div>
        </div>
        <div className="anything flex flex-col w-full">
          <label htmlFor="">Enter Anything</label>
          <input
            type="text"
            name="anything"
            id="anything"
            placeholder="Write your text here"
            className="border-2 border-black rounded p-2 text-xl border-b-4"
          />
        </div>
        <div className="selectOption flex flex-col w-full">
          <label htmlFor="select">Select Option</label>
          <select
            name="select"
            id="select"
            defaultValue=""
            className="border-2 border-black rounded p-2 text-xl border-b-4 bg-white"
          >
            <option value="" disabled>
              Select Options
            </option>
            <option value="hello">Hello</option>
            <option value="world">World</option>
          </select>
        </div>
        <div className="dateSelector flex flex-col w-full">
          <label htmlFor="date">Select Date</label>
          <input
            type="date"
            name="date"
            id="date"
            className="border-2 border-black rounded p-2 text-xl border-b-4"
          />
        </div>
        <div className="termsAndConditions flex w-full">
          <input type="checkbox" name="termsAndConditions" />
          <p className="ml-2">
            Terms and Conditions
          </p>
        </div>
      </form>
    </>
  );
};

export default MyForm;

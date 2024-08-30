import { useEffect, useRef, useState } from "react";
import ToggleBtn from "./ToggleBtn";
import toast, { Toaster } from "react-hot-toast";

interface InputType {
  username: string;
  email: string;
  phoneNumber: string;
  personalID: string;
  gender: string;
  anything: string;
  select: string;
  date: string;
  termsAndConditions: boolean;
}

const MyForm = () => {
  const [inputState, setInputState] = useState<InputType>({
    username: "",
    email: "",
    phoneNumber: "",
    personalID: "",
    gender: "",
    anything: "",
    select: "",
    date: "",
    termsAndConditions: false,
  });

  const handleChange = (e: any) => {
    const { name, type, checked, value } = e.target;
    setInputState((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputState);
    toast("Form Submitted Successfully !")
    setInputState({
      username: "",
      email: "",
      phoneNumber: "",
      personalID: "",
      gender: "",
      anything: "",
      select: "",
      date: "",
      termsAndConditions: false,
    });
  };

  const usernameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (usernameRef.current) {
      usernameRef.current.focus();
    }
  }, []);

  return (
    <>
      <Toaster />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-center justify-center bg-white p-16 rounded-2xl min-w-[700px]"
      >
        <div className="username flex flex-col w-full">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter username"
            className="border-2 border-black rounded p-2 text-xl border-b-4"
            value={inputState.username}
            onChange={handleChange}
            ref={usernameRef}
            required
          />
        </div>

        <div className="email flex flex-col w-full">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            className="border-2 border-black rounded p-2 text-xl border-b-4"
            value={inputState.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="phoneNumber flex mt-5 w-full">
          <input
            type="number"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Enter phone number"
            className="border-2 border-black rounded p-2 text-lg border-b-4 flex-1"
            value={inputState.phoneNumber}
            onChange={handleChange}
            required
          />
          <button
            disabled
            className="w-32 text-sm p-4 border-2 border-blue-500 border-b-4 rounded text-blue-500 ml-2"
          >
            Verify
          </button>
        </div>

        <div className="personalID w-full flex flex-col relative">
          <label htmlFor="personalID">Personal ID Number</label>
          <div className="relative">
            <input
              type="text"
              name="personalID"
              id="personalID"
              className="border-2 border-black rounded p-2 pr-8 text-xl border-b-4 w-full"
              value={inputState.personalID}
              onChange={handleChange}
              required
            />
            <p className="absolute top-3 right-3">✅</p>
          </div>
        </div>

        <div className="flex items-center justify-between w-full mt-2">
          <div>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="gender"
                value="male"
                className="w-6 h-6 text-blue-500 bg-gray-100 border-gray-300 focus:ring-blue-500"
                checked={inputState.gender === "male"}
                onChange={handleChange}
                required
              />
              <span>Male</span>
            </label>
          </div>
          <div>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="gender"
                value="female"
                className="w-6 h-6 text-blue-500 bg-gray-100 border-gray-300 focus:ring-blue-500"
                checked={inputState.gender === "female"}
                onChange={handleChange}
                required
              />
              <span>Female</span>
            </label>
          </div>
          <div>
            <ToggleBtn />
          </div>
        </div>

        <div className="anything flex flex-col w-full">
          <label htmlFor="anything">Enter Anything</label>
          <input
            type="text"
            name="anything"
            id="anything"
            placeholder="Write your text here"
            className="border-2 border-black rounded p-2 text-xl border-b-4"
            value={inputState.anything}
            onChange={handleChange}
            required
          />
        </div>

        <div className="selectOption flex flex-col w-full">
          <label htmlFor="select">Select Option</label>
          <select
            name="select"
            id="select"
            className="border-2 border-black rounded p-2 text-xl border-b-4 bg-white"
            value={inputState.select}
            onChange={handleChange}
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
            value={inputState.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="termsAndConditions flex w-full">
          <input
            type="checkbox"
            name="termsAndConditions"
            checked={inputState.termsAndConditions}
            onChange={handleChange}
            required
          />
          <p className="ml-2">Terms and Conditions</p>
        </div>

        <div className="submit w-full mt-5">
          <button
            type="submit"
            className="bg-[#4a3ee6] text-white items-center w-full py-3 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default MyForm;

import { useState } from "react";
import OtpInput from "react-otp-input";

const OtpForm = () => {
  const [otp, setOtp] = useState("");

  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-center bg-white p-16 rounded-2xl min-w-[700px]">
        <h1 className="font-bold text-5xl">Verify OTP</h1>
        <div className="flex gap-4 justify-center items-center">
          <h3 className="text-[#9748ff] text-2xl">Time Left</h3>
          <div className="bg-[#9748ff] px-4 py-2 text-xl rounded-lg text-white">
            00 : 00
          </div>
        </div>
        <div>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span></span>}
            renderInput={(props) => {
              return (
                <div className="py-4 px-8 border-2 border-black border-b-4 mx-2 rounded-md">
                  <input
                    {...props}
                    className="border-none outline-none text-2xl"
                    placeholder="*"
                  />{" "}
                </div>
              );
            }}
          />
        </div>
      </div>
    </>
  );
};

export default OtpForm;

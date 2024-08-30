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
        <div className="phoneNumber flex mt-2 w-full">
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
      </form>
    </>
  );
};

export default MyForm;

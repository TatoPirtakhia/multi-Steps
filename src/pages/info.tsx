function Info() {
  return (
    <main className="bg-white w-[90%] mt-[-77px] rounded-[10px] flex flex-col pl-[24px] pt-[32px]">
      <h1 className="ubuntu text-xl font-bold  mb-[9px]   ">Personal info</h1>
      <p className="ubuntu font-normal text-grey text-base w-[90%] mb-6 ">
        Please provide your name, email address, and phone number.
      </p>
      <div className="flex flex-col mb-[25px]">
        <label
          htmlFor="name"
          className="text-Denim ubuntu font-normal text-[12px] "
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="e.g. Tato Pirtakhia"
          className="text-Denim font-medium text-base outline-none pl-[16px] w-[86%] h-[40px] rounded-[4px] border-[1px] border-borderColor "
        />
      </div>
      <div className="flex flex-col  mb-[25px]">
        <label
          htmlFor="name"
          className="text-Denim ubuntu font-normal text-[12px]"
        >
          Email Address
        </label>
        <input
          type="text"
          id="name"
          placeholder="e.g. tatopirtakhia@gmail.com"
          className="text-Denim font-medium text-base outline-none pl-[16px] w-[86%] h-[40px] rounded-[4px] border-[1px] border-borderColor "
        />
      </div>
      <div className="flex flex-col  mb-[25px]">
        <label
          htmlFor="name"
          className="text-Denim ubuntu font-normal text-[12px]"
        >
          Email Address
        </label>
        <input
          type="text"
          id="name"
          placeholder="e.g. +995 571 031 252"
          className="text-Denim font-medium text-base outline-none pl-[16px] w-[86%] h-[40px] rounded-[4px] border-[1px] border-borderColor "
        />
      </div>
    </main>
  );
}
export default Info;
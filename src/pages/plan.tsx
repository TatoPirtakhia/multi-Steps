import React, { useEffect, useState } from "react";
import Advanced from "../images/advanced";
import Arcade from "../images/arcade";
import Pro from "../images/pro";

function Plan() {
  const [clicked, setClicked] = useState<string>("");
  const [twomonth, setTwomonth] = useState<string>("");
  const [yearly, setYearly] = useState<boolean>(false);
  const [arcade, setArcade] = useState<String>("$9/mo");
  const [advanced, setAdvanced] = useState<String>("$12/mo");
  const [pro, setPro] = useState<String>("$15/mo");
  const changeYearly = () => {
    setYearly(!yearly);
  };
  useEffect(() => {
    if (yearly) {
      setArcade("$90/yr");
      setAdvanced("$120/yr");
      setPro("$150/yr");
      setTwomonth("2 months free");
    } else {
      setArcade("$9/mo");
      setAdvanced("$12/mo");
      setPro("$15/mo");
      setTwomonth("");
    }
  }, [yearly]);

  const getId = (event: React.MouseEvent<HTMLDivElement>) => {
    const clickedDivId = event.currentTarget.id;
    setClicked(clickedDivId);
  };

  return (
    <main className="bg-white shadow-custom w-[90%] mt-[-77px] rounded-[10px] flex flex-col pl-[24px] pt-[32px]">
      <h1 className="ubuntu text-xl font-bold  mb-[9px]   ">
        Select your plan
      </h1>
      <p className="ubuntu font-normal text-grey text-base w-[90%] mb-6 ">
        You have the option of monthly or yearly billing.
      </p>
      <div
        onClick={getId}
        id="1"
        className={`mb-3 flex items-start gap-3 pl-4 pt-3 pb-4 w-[93%] rounded-[8px] border-[1px] ${clicked === '1' ? ' border-[#483EFF]' : ' border-lightGrey'}  `}
      >
        <Arcade />
        <div className="flex flex-col gap-[5px] mt-[-5px]">
          <p className="ubuntu text-Denim text-[16px] font-medium">Arcade</p>
          <p className="ubuntu text-grey text-[14px] font-normal ">{arcade}</p>
          <p className="ubuntu text-Denim text-[12px] font-normal">
            {twomonth}
          </p>
        </div>
      </div>
      <div
      onClick={getId}
        id="2"
        className={`mb-3  flex items-start pt-3 pb-4  gap-3 pl-4 w-[93%]  rounded-[8px] border-[1px] ${clicked === '2' ? ' border-[#483EFF]' : ' border-lightGrey'}`}
      >
        <Advanced />
        <div className="flex flex-col gap-[5px] mt-[-5px]">
          <p className="ubuntu text-Denim text-[16px] font-medium">Advanced</p>
          <p className="ubuntu text-grey text-[14px] font-normal ">
            {advanced}
          </p>
          <p className="ubuntu text-Denim text-[12px] font-normal">
            {twomonth}
          </p>
        </div>
      </div>
      <div
        onClick={getId}
        id="3"
        className={`mb-6  flex items-start pt-3 pb-4  gap-3 pl-4 w-[93%] rounded-[8px] border-[1px] ${clicked === '3' ? ' border-[#483EFF]' : ' border-lightGrey'}`}
      >
        <Pro />
        <div className="flex flex-col gap-[5px] mt-[-5px]">
          <p className="ubuntu text-Denim text-[16px] font-medium">Pro</p>
          <p className="ubuntu text-grey text-[14px] font-normal ">{pro}</p>
          <p className="ubuntu text-Denim text-[12px] font-normal">
            {twomonth}
          </p>
        </div>
      </div>
      <div className="mb-[32px] flex items-center justify-center gap-6 h-[48px] bg-[#F8F9FF] w-[93%] rounded-[8px] cursor-pointer ">
        <p>Monthly</p>
        <div
          className={`w-10 h-5 rounded-[10px] bg-Denim  pt-1  transition-all ${
            yearly ? "pl-6" : "pl-1"
          }`}
          onClick={changeYearly}
        >
          <div className="w-3 h-3 rounded-[50%] bg-white"></div>
        </div>

        <p>Yearly</p>
      </div>
    </main>
  );
}
export default Plan;

import React, { useState } from "react";
import CheckMark from "../images/checkMark";
import { useNavigate } from "react-router-dom";
import { ArrayOfObject, user } from "../userType";

function AddOns(props: {
  user: user;
  yearly: boolean;
  array: ArrayOfObject[];
  setYearly: React.Dispatch<React.SetStateAction<boolean>>;
  setArray: React.Dispatch<React.SetStateAction<ArrayOfObject[]>>;
  setUser: React.Dispatch<React.SetStateAction<user>>;
}) {
  const navigate = useNavigate();
  const [validation, setValidation] = useState<string>("");
  const [checkService, setCheckService] = useState<boolean>(() => {
    const itemExists = props.user.addOns.some((item) => item.id === "1");
    if (itemExists) return true;
    return false;
  });
  const [checkStorage, setCheckStorage] = useState<boolean>(() => {
    const itemExists = props.user.addOns.some((item) => item.id === "2");
    if (itemExists) return true;
    return false;
  });
  const [checkprofile, setCheckprofile] = useState<boolean>(() => {
    const itemExists = props.user.addOns.some((item) => item.id === "3");
    if (itemExists) return true;
    return false;
  });

  const chooseOne = () => {
    const itemExists = props.array.some((item) => item.id === "1");
    if (!itemExists) {
      const obj: ArrayOfObject = {
        id: "1",
        name: "Online service",
        price: !props.yearly ? 1 : 10,
      };
      const newArray = [...props.array, obj];
      props.setArray(newArray);
    } else {
      const newArray = props.array.filter((item) => item.id !== "1");
      props.setArray(newArray);
    }

    setCheckService(!checkService);
  };
  const chooseTwo = () => {
    const itemExists = props.array.some((item) => item.id === "2");
    if (!itemExists) {
      const obj: ArrayOfObject = {
        id: "2",
        name: "Larger storage",
        price: !props.yearly ? 2 : 20,
      };
      const newArray = [...props.array, obj];
      props.setArray(newArray);
    } else {
      const newArray = props.array.filter((item) => item.id !== "2");
      props.setArray(newArray);
    }
    setCheckStorage(!checkStorage);
  };
  const chooseThree = () => {
    const itemExists = props.array.some((item) => item.id === "3");
    if (!itemExists) {
      const obj: ArrayOfObject = {
        id: "3",
        name: "Customizable profile",
        price: !props.yearly ? 2 : 20,
      };
      const newArray = [...props.array, obj];
      props.setArray(newArray);
    } else {
      const newArray = props.array.filter((item) => item.id !== "3");
      props.setArray(newArray);
    }
    setCheckprofile(!checkprofile);
  };
  const submmit = () => {
    if (props.array.length === 0) {
      setValidation("border-red-500");
    } else {
      navigate("/4");
    }
  };
  return (
    <div className="flex flex-col items-center gap-[141px] xxl:gap-[120px] w-full xxl:w-[50%]">
      <main className="bg-white shadow-custom xxl:shadow-none w-[90%] xxl:w-full  mt-[-77px] xxl:mt-0 rounded-[10px] flex flex-col xxl:justify-between pl-[24px] pt-[32px] xxl:p-0 xxl:pt-10 xxl:h-[371px]">
        <h1 className="ubuntu text-xl font-bold  mb-[9px]   ">Pick add-ons</h1>
        <p className="ubuntu font-normal text-grey text-base w-[90%] mb-6 ">
          Add-ons help enhance your gaming experience.
        </p>
        <div
          onClick={chooseOne}
          className={`flex mb-3 pt-[13px] gap-4 pl-[16px] w-[93%] cursor-pointer xxl:pt-[18px] xxl:pb-[18px] xxl:hover:border-purple ${
            checkService
              ? "border-purple bg-[#F8F9FF] "
              : "border-lightGrey  bg-white"
          } h-[62px] xxl:h-[81px] rounded-[8px] border-[1px]
          ${props.array.length === 0 ? validation : ""} `}
        >
          <div
            className={`flex items-center justify-center w-5 h-5  ${
              checkService ? "border-[0px] bg-purple" : "border-[1px] bg-white"
            } border-lightGrey rounded-[4px]  mt-[7px] xxl:mt-[12px] ${
              props.array.length === 0 ? validation : ""
            }  `}
          >
            <CheckMark />
          </div>
          <div className="flex flex-col gap-0 w-[164px] xxl:w-[290px]">
            <p className="ubuntu font-medium text-Denim text-sm xxl:text-base ">
              Online service
            </p>
            <p className="ubuntu font-normal text-grey text-[12px] xxl:text-sm">
              Access to multiplayer games
            </p>
          </div>
          {!props.yearly ? (
            <p className="ubuntu font-normal text-purple text-[12px] mt-[7px] xxl:mt-[12px]  xxl:text-sm">
              +$1/mo
            </p>
          ) : (
            <p className="ubuntu font-normal text-purple text-[12px] mt-[7px] xxl:mt-[12px]  xxl:text-sm ">
              +$10/yr
            </p>
          )}
        </div>

        <div
          onClick={chooseTwo}
          className={`flex mb-3 pt-[13px] pl-[16px] gap-4 w-[93%] xxl:pt-[18px] cursor-pointer xxl:pb-[18px] xxl:hover:border-purple ${
            checkStorage
              ? "border-purple bg-[#F8F9FF] "
              : "border-lightGrey  bg-white"
          } h-[62px] xxl:h-[81px] rounded-[8px] border-[1px]
          ${props.array.length === 0 ? validation : ""}`}
        >
          <div
            className={`flex items-center justify-center w-5 h-5 ${
              checkStorage ? "border-[0px] bg-purple" : "border-[1px] bg-white"
            } border-lightGrey rounded-[4px]  mt-[7px]  xxl:mt-[12px]${
              props.array.length === 0 ? validation : ""
            } `}
          >
            <CheckMark />
          </div>
          <div className="flex flex-col gap-0 w-[164px]  xxl:w-[290px]">
            <p className="ubuntu font-medium text-Denim text-sm xxl:text-base">
              Larger storage
            </p>
            <p className="ubuntu font-normal text-grey text-[12px] xxl:text-sm">
              Extra 1TB of cloud save
            </p>
          </div>
          {!props.yearly ? (
            <p className="ubuntu font-normal text-purple text-[12px] mt-[7px] xxl:mt-[12px] xxl:text-sm">
              +$2/mo
            </p>
          ) : (
            <p className="ubuntu font-normal text-purple text-[12px] mt-[7px] xxl:mt-[12px] xxl:text-sm">
              +$20/yr
            </p>
          )}
        </div>

        <div
          onClick={chooseThree}
          className={`flex mb-8 pt-[13px] pl-[16px] gap-4 w-[93%] xxl:pt-[18px] cursor-pointer xxl:pb-[18px] xxl:hover:border-purple ${
            checkprofile
              ? "border-purple bg-[#F8F9FF] "
              : "border-lightGrey  bg-white"
          } h-[62px] xxl:h-[81px] rounded-[8px] border-[1px] ${
            props.array.length === 0 ? validation : ""
          }`}
        >
          <div
            className={`flex items-center justify-center w-5 h-5 ${
              checkprofile ? "border-[0px] bg-purple" : "border-[1px] bg-white"
            } border-lightGrey rounded-[4px]  mt-[7px] xxl:mt-[12px] ${
              props.array.length === 0 ? validation : ""
            } `}
          >
            <CheckMark />
          </div>
          <div className="flex flex-col gap-0 w-[164px] xxl:w-[290px]">
            <p className="ubuntu font-medium text-Denim text-sm xxl:text-base ">
              Customizable profile
            </p>
            <p className="ubuntu font-normal text-grey text-[12px] xxl:text-sm">
              Custom theme on your profile
            </p>
          </div>
          {!props.yearly ? (
            <p className="ubuntu font-normal text-purple text-[12px] mt-[7px] xxl:text-sm">
              +$2/mo
            </p>
          ) : (
            <p className="ubuntu font-normal text-purple text-[12px] mt-[7px] xxl:text-sm">
              +$20/yr
            </p>
          )}
        </div>
      </main>
      <footer className="w-full h-[72px] shadow-custom xxl:shadow-none bg-white flex items-center justify-between p-[16px]">
        <p
          onClick={() => {
            navigate("/2");
          }}
          className="ubuntu font-medium text-grey text-[14px] xxl:text-base cursor-pointer xxl:hover:text-Denim"
        >
          Go Back
        </p>
        <button
          onClick={submmit}
          className="ubuntu xxl:mr-5 text-[16px] rounded-[4px] font-medium w-[97px] h-10 bg-Denim text-white flex items-center justify-center xxl:w-[123px] xxl:h-12 xxl:rounded-[8px] xxl:cursor-pointer xxl:hover:bg-[#164A8A]  "
        >
          Next Step
        </button>
      </footer>
    </div>
  );
}
export default AddOns;

import React, { useEffect, useState } from "react";
import Advanced from "../images/advanced";
import Arcade from "../images/arcade";
import Pro from "../images/pro";
import { useNavigate } from "react-router-dom";
import { user } from "../userType";

function Plan(props: {
  user: user;
  setUser: React.Dispatch<React.SetStateAction<user>>;
  setYearly: React.Dispatch<React.SetStateAction<boolean>>;
  yearly: boolean;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  value: number;
}) {
  const user = props.user;
  const navigate = useNavigate();
  const [validation, setValidation] = useState<string>("");
  const [clicked, setClicked] = useState<string>(user.plan.id);
  useEffect(() => {
    setClicked(user.plan.id);
  }, []);

  const validate = () => {
    if (clicked === "") {
      setValidation("border-red-500");
    } else {
      submmit();
    }
  };

  const changeYearly = () => {
    props.setValue(user.plan.price);
    props.setYearly(!props.yearly);
    const updatedUser = {
      ...user,
      plan: {
        id: user.plan.id,
        name: user.plan.name,
        price:
          clicked === "1" && props.yearly
            ? 9
            : clicked === "1" && !props.yearly
            ? 90
            : clicked === "2" && props.yearly
            ? 12
            : clicked === "2" && !props.yearly
            ? 120
            : clicked === "3" && props.yearly
            ? 15
            : 150,
      },
    };
    props.setUser(updatedUser);
  };

  const getId = (event: React.MouseEvent<HTMLDivElement>) => {
    setValidation("");
    const id = event.currentTarget.id;
    const updatedUser = {
      ...user,
      plan: {
        id: id,
        name:  
        id === "1" 
        ? 'Arcade'
        : id === "2"
        ? "Advanced"
        :"Pro"
        ,
        price:
          id === "1" && !props.yearly
            ? 9
            : id === "1" && props.yearly
            ? 90
            : id === "2" && !props.yearly
            ? 12
            : id === "2" && props.yearly
            ? 120
            : id === "3" && !props.yearly
            ? 15
            : 150,
      },
    };
    props.setUser(updatedUser);
    setClicked(id);
    props.setValue(
      id === "1" && !props.yearly
        ? 9
        : id === "1" && props.yearly
        ? 90
        : id === "2" && !props.yearly
        ? 12
        : id === "2" && props.yearly
        ? 120
        : id === "3" && !props.yearly
        ? 15
        : 150
    );
  };

  const submmit = () => {
    navigate("/3");
  };

  return (
    <div className="flex items-center flex-col gap-6">
      <main className="bg-white shadow-custom w-[90%] mt-[-77px] rounded-[10px] flex flex-col pl-[24px] pt-[32px]">
        <h1 className="ubuntu text-xl font-bold  mb-[9px]   ">
          Select your plan
        </h1>
        <p className="ubuntu font-normal text-grey text-base w-[90%] mb-6 ">
          You have the option of monthly or props.yearly billing.
        </p>
        <div
          onClick={getId}
          id="1"
          className={`mb-3 flex items-start gap-3 pl-4 pt-3 pb-4 w-[93%] rounded-[8px] border-[1px] ${
            clicked === "1" ? " border-[#483EFF]" : " border-lightGrey"
          }  ${clicked === "" ? validation : ""} `}
        >
          <Arcade />
          <div className="flex flex-col gap-[5px] mt-[-5px]">
            <p className="ubuntu text-Denim text-[16px] font-medium">Arcade</p>
            {props.yearly ? (
              <p className="ubuntu text-grey text-[14px] font-normal ">
                $90/yr
              </p>
            ) : (
              <p className="ubuntu text-grey text-[14px] font-normal ">$9/mo</p>
            )}
            {props.yearly ? (
              <p className="ubuntu text-Denim text-[12px] font-normal">
                2 months free
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
        <div
          onClick={getId}
          id="2"
          className={`mb-3  flex items-start pt-3 pb-4  gap-3 pl-4 w-[93%]  rounded-[8px] border-[1px] ${
            clicked === "2" ? " border-[#483EFF]" : " border-lightGrey"
          } ${clicked === "" ? validation : ""}`}
        >
          <Advanced />
          <div className="flex flex-col gap-[5px] mt-[-5px]">
            <p className="ubuntu text-Denim text-[16px] font-medium">
              Advanced
            </p>
            {props.yearly ? (
              <p className="ubuntu text-grey text-[14px] font-normal ">
                $120/yr
              </p>
            ) : (
              <p className="ubuntu text-grey text-[14px] font-normal ">
                $12/mo
              </p>
            )}
            {props.yearly ? (
              <p className="ubuntu text-Denim text-[12px] font-normal">
                2 months free
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
        <div
          onClick={getId}
          id="3"
          className={`mb-6  flex items-start pt-3 pb-4  gap-3 pl-4 w-[93%] rounded-[8px] border-[1px] ${
            clicked === "3" ? " border-[#483EFF]" : " border-lightGrey"
          } ${clicked === "" ? validation : ""}`}
        >
          <Pro />
          <div className="flex flex-col gap-[5px] mt-[-5px]">
            <p className="ubuntu text-Denim text-[16px] font-medium">Pro</p>
            {props.yearly ? (
              <p className="ubuntu text-grey text-[14px] font-normal ">
                $150/yr
              </p>
            ) : (
              <p className="ubuntu text-grey text-[14px] font-normal ">
                $15/mo
              </p>
            )}
            {props.yearly ? (
              <p className="ubuntu text-Denim text-[12px] font-normal">
                2 months free
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="mb-[32px] flex items-center justify-center gap-6 h-[48px] bg-[#F8F9FF] w-[93%] rounded-[8px] cursor-pointer ">
          <p>Monthly</p>
          <div
            className={`w-10 h-5 rounded-[10px] bg-Denim  pt-1  transition-all ${
              props.yearly ? "pl-6" : "pl-1"
            }`}
            onClick={changeYearly}
          >
            <div className="w-3 h-3 rounded-[50%] bg-white"></div>
          </div>

          <p>Yearly</p>
        </div>
      </main>
      <footer className="w-full h-[72px] shadow-custom bg-white flex items-center justify-between p-[16px]">
        <p
          onClick={() => {
            navigate("/1");
          }}
          className="ubuntu font-medium text-grey text-[14px]"
        >
          Go Back
        </p>
        <button
          onClick={validate}
          className="ubuntu text-[16px] rounded-[4px] font-medium w-[97px] h-10 bg-Denim text-white flex items-center justify-center "
        >
          Next Step
        </button>
      </footer>
    </div>
  );
}
export default Plan;

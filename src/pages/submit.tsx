import { useNavigate } from "react-router-dom";
import { ArrayOfObject, user } from "../userType";
import { useState } from "react";
import Thank from "../images/thank";
import PostData from "../request/Axios";

function Submit(props: {
  yearly: boolean;
  value: number;
  array: ArrayOfObject[];
  user: user;
  setUser: React.Dispatch<React.SetStateAction<user>>;
}) {
  const [hidden, setHidden] = useState<boolean>(true);
  const navigate = useNavigate();
  const calculateTotal = () => {
    const { plan, addOns } = props.user;
    let Price: number = 0;
    addOns.map((item) => {
      return (Price += item.price);
    });

    return plan.price + Price;
  };
  const submit = async () => {
    props.setUser({
      name: "",
      email: "",
      phone: "",
      plan: { id: "", price: 0, name: "" },
      addOns: [],
    });
    setHidden(false);
    setTimeout(() => {
      navigate("/1");
      setHidden(true);
    }, 3000);
    await PostData(props.user);
  };
  return (
    <div className="flex items-center flex-col justify-between xxl:h-[550px] w-full xxl:w-[60%]">
      <div
        className={`bg-white ${
          hidden ? "hidden" : ""
        } shadow-custom w-[90%] mt-[-77px] xxl:mt-0 xxl:pt-[165px] xxl:shadow-none rounded-[10px] flex flex-col items-center  pt-[80px] mb-[190px] `}
      >
        <Thank />
        <h1 className="ubuntu text-Denim font-bold text-xl mt-6  xxl:text-[32px] xxl:mb-[14px]">Thank you!</h1>
        <p className="w-[88%] mt-3 mb-[80px] text-center ubuntu text-grey text-base font-normal">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
      <main
        className={`bg-white ${
          hidden ? "" : "hidden"
        } shadow-custom xxl:shadow-none w-[90%] xxl:w-full  mt-[-77px] xxl:mt-0 rounded-[10px] flex flex-col xxl:justify-between pl-[24px] pt-[32px] xxl:p-0 xxl:pt-10 `}
      >
        <h1 className="ubuntu text-xl font-bold  mb-[9px] xxl:text-[32px]  ">Finishing up</h1>
        <p className="ubuntu font-normal text-grey text-base w-[90%] mb-4 ">
          Double-check everything looks OK before confirming.
        </p>
        <div className="flex flex-col items-start pt-4 pl-4 w-[93%] pr-4">
          <div className="flex flex-col xxl:pr-6 xxl:pl-6 xxl:pt-4 xxl:bg-[#F8F9FF]  w-full">
            <div className="flex  items-center justify-between w-full pb-3 border-b-[1px]  border-grey-20 mb-3 ">
              <div>
                <p className="ubuntu font-medium text-Denim text-sm">
                  {props.user.plan.name}
                  {`(${props.yearly ? "Yearly" : "Monthly"})`}
                </p>
                <p
                  onClick={() => {
                    navigate("/2");
                  }}
                  className="ubuntu font-normal underline text-grey  text-sm xxl:hover:text-purple cursor-pointer"
                >
                  Change
                </p>
              </div>
              <p className="ubuntu font-bold text-Denim text-sm">
                ${props.user.plan.price}/{props.yearly ? "yr" : "mo"}
              </p>
            </div>
            {props.user.addOns.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex w-full items-center justify-between mb-3"
                >
                  <p className="ubuntu font-normal  text-grey  text-sm">
                    {item.name}
                  </p>
                  <p className="ubuntu font-normal  text-Denim  text-sm">{`$${
                    item.price
                  }/${props.yearly ? "yr" : "mo"}`}</p>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-between w-full mt-6 mb-8 xxl:pl-6 xxl:pr-6">
            <p className="ubuntu font-normal  text-grey  text-sm">{`Total (per ${
              props.yearly ? "Yearly" : "Monthly"
            })`}</p>
            <p className="ubuntu font-bold text-purple text-base">{`+${calculateTotal()}/${
              props.yearly ? "yr" : "mo"
            }`}</p>
          </div>
        </div>
      </main>

      <footer
        className={`w-full ${
          hidden ? "" : "hidden"
        } h-[72px] shadow-custom xxl:shadow-none bg-white flex items-center justify-between p-[16px]`}
      >
        <p
          onClick={() => {
            navigate("/3");
          }}
          className="ubuntu font-medium text-grey text-[14px] xxl:text-base xxl:hover:text-Denim cursor-pointer"
        >
          Go Back
        </p>
        <button
          onClick={submit}
          className="ubuntu text-[16px] rounded-[4px] font-medium w-[97px] h-10 bg-purple text-white flex items-center justify-center xxl:mr-[55px] xxl:h-12 xxl:w-[123px] xxl:hover:bg-[#928CFF] cursor-pointer "
        >
          Confirm
        </button>
      </footer>
    </div>
  );
}
export default Submit;

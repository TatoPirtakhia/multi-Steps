import React, { useEffect, useState } from "react";
import { user } from "../userType";
function Info() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const handleKeyPress: React.KeyboardEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const key = event.key;
    const allowedKeys = [
      "+",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "Delete",
      "Backspace",
    ];

    if (!allowedKeys.includes(key)) {
      event.preventDefault();
    }
  };

  let user: user = {
    name: "",
    email: "",
    phone: "",
    plan: {},
    addOns: [],
    planId: "",
    planPrice: "",
  };
  const data = localStorage.getItem("user");
  if (data) {
    user = JSON.parse(data);
  }
  useEffect(()=>{
    if(data){
        setName(user.name)
        setEmail(user.email)
        setPhone(user.phone)
    }
  },[])

  const inputName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
   
    user.name = value;
    localStorage.setItem("user", JSON.stringify(user));
  };
  const inputEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    user.email = value;
    localStorage.setItem("user", JSON.stringify(user));
  };
  const inputPhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    user.phone = value;
    localStorage.setItem("user", JSON.stringify(user));
  };

  return (
    <main className="bg-white shadow-custom w-[90%] mt-[-77px] rounded-[10px] flex flex-col pl-[24px] pt-[32px]">
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
         value={name}
          onInput={inputName}
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
        value={email}
          onInput={inputEmail}
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
          Phone Number
        </label>
        <input
       value={phone}
          onInput={inputPhone}
          onKeyDown={handleKeyPress}
          type="text"
          id="name"
          maxLength={15}
          placeholder="e.g. +995 571 031 252"
          className="text-Denim font-medium text-base outline-none pl-[16px] w-[86%] h-[40px] rounded-[4px] border-[1px] border-borderColor "
        />
      </div>
    </main>
  );
}
export default Info;

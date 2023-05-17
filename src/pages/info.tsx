import React, { useEffect } from "react";
import { useForm, SubmitHandler, useWatch } from "react-hook-form";

import { Inputs, user } from "../userType";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';

function Info(props:{
  user:user,
  setUser:React.Dispatch<React.SetStateAction<user>>
}) {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required").email("Invalid email"),
    phone: Yup.string().required("Phone number is required"),
  });
 
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
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(validationSchema),

  });
 

  useEffect(() => {
      setValue('name', props.user.name)
      setValue('email',props.user.email)
      setValue('phone',props.user.phone)
    }, []);

   
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
     props.user.name = data.name
     props.user.email = data.email
     props.user.phone = data.phone
     localStorage.setItem("user", JSON.stringify(props.user));
     navigate('/2')
  }
  const submit = () =>{
    handleSubmit(onSubmit)();
  }


  useEffect(() => {
    // Perform actions based on errors.name value
    if (errors && errors.name) {
      console.log("Name has an error:", errors.name.message);
    } else {
      console.log("Name is valid");
    }
  }, [errors]);

  return (
    <div className="flex flex-col items-center  gap-[120px] xxl:w-[58%] xxl:gap-[50px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-custom w-[90%] mt-[-77px] rounded-[10px] flex flex-col pl-6 pt-8
              xxl:mt-0 xxl:shadow-none  xxl:w-full xxl:pt-10 xxl:pl-0
        "
      >
        <h1 className="ubuntu text-xl font-bold  mb-[9px] xxl:text-[32px] xxl:mb-[15px]  ">Personal info</h1>
        <p className="ubuntu font-normal text-grey text-base w-[90%]  mb-6 xxl:w-full xxl:mb-[35px] ">
          Please provide your name, email address, and phone number.
        </p>
        <div className="flex flex-col mb-[25px]">
          <label
            htmlFor="name"
            className="text-Denim ubuntu font-normal text-[12px] xxl:text-sm xxl:mb-1 "
          >
            Name
          </label>
          <input
            {...register("name", { required: true })} 
            type="text"
            id="name"
            placeholder="e.g. Tato Pirtakhia"
            className={`text-Denim font-medium text-base outline-none pl-[16px] w-[86%] h-10 xxl:h-12 xxl:rounded-[8px] rounded-[4px]  border-[1px] ${errors && errors.name ? 'border-red-600':' border-borderColor'} xxl:cursor-pointer xxl:hover:border-[#483EFF]`}
          />
          {errors.name && <span>Please insert name </span>}
        </div>
        
        <div className="flex flex-col  mb-[25px]">
          <label
            htmlFor="email"
            className="text-Denim ubuntu font-normal text-[12px] xxl:text-sm xxl:mb-1"
          >
            Email Address
          </label>
          <input
            {...register("email", { required: true })} 
            type="email"
            id="email"
            placeholder="e.g. tatopirtakhia@gmail.com"
            className={`text-Denim font-medium text-base outline-none pl-[16px] w-[86%] h-10 xxl:h-12 xxl:rounded-[8px] rounded-[4px]  border-[1px] ${errors && errors.email ? 'border-red-600':' border-borderColor'} xxl:cursor-pointer xxl:hover:border-[#483EFF]`}
          />
         {errors.email && <span>Please insert email</span>}
        </div>
       
        <div className="flex flex-col  mb-[25px]">
          <label
            htmlFor="phone"
            className="text-Denim ubuntu font-normal text-[12px] xxl:text-sm xxl:mb-1"
          >
            Phone Number
          </label>
          <input
           {...register("phone", { required: true })} 
            onKeyDown={handleKeyPress}
            type="text"
            id="phone"
            maxLength={15}
            placeholder="e.g. +995 571 031 252"
            className={`text-Denim font-medium text-base outline-none pl-[16px] w-[86%] h-10 xxl:h-12 xxl:rounded-[8px] rounded-[4px]  border-[1px] ${errors && errors.phone ? 'border-red-600':' border-borderColor'} xxl:cursor-pointer xxl:hover:border-[#483EFF]`}
          />
         {errors.phone && <span>Please insert phone</span>} 
        </div>
        
      </form>

      <footer className="w-full h-[72px] shadow-custom bg-white flex items-center justify-between p-[16px] xxl:w-[76%] xxl:shadow-none">
        <p></p>
        <button onClick={submit} className="ubuntu text-[16px] rounded-[4px] font-medium w-[97px] h-10 bg-Denim text-white flex items-center justify-center xxl:w-[123px] xxl:h-12 xxl:rounded-[8px] xxl:cursor-pointer xxl:hover:bg-[#164A8A]  ">
        Next Step
        </button>
      </footer>
    </div>
  );
}
export default Info;

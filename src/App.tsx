import { useEffect, useState } from "react";
import { Routes, Route, Link, Navigate, useLocation } from "react-router-dom";
import Info from "./pages/info";
import Plan from "./pages/plan";
import AddOns from "./pages/addOns";
import Submit from "./pages/submit";

function App() {
  const location = useLocation();
  return (
    <div className="flex flex-col items-center justify-between min-h-[100vh]">
      <div className="flex flex-col items-center w-full ">
        <header className="flex flex-row justify-center gap-[16px] pt-[32px] bg-cover bg-no-repeat bg-center bg_mobile h-[172px] w-full ">
          <Link
            to="/1"
            className={
              location.pathname === "/1"
                ? "ubuntu font-bold flex items-center justify-center  text-textColor w-[33px] h-[33px] rounded-full bg-blue"
                : "ubuntu font-bold flex items-center justify-center  text-white w-[33px] h-[33px] rounded-full border-[1px] border-white"
            }
          >
            1
          </Link>
          <Link
            to="/2"
            className={
              location.pathname === "/2"
                ? "ubuntu font-bold flex items-center justify-center  text-textColor w-[33px] h-[33px] rounded-full bg-blue"
                : "ubuntu font-bold flex items-center justify-center  text-white w-[33px] h-[33px] rounded-full border-[1px] border-white"
            }
          >
            2
          </Link>
          <Link
            to="/3"
            className={
              location.pathname === "/3"
                ? "ubuntu font-bold flex items-center justify-center  text-textColor w-[33px] h-[33px] rounded-full bg-blue"
                : "ubuntu font-bold flex items-center justify-center  text-white w-[33px] h-[33px] rounded-full border-[1px] border-white"
            }
          >
            3
          </Link>
          <Link
            to="/4"
            className={
              location.pathname === "/4"
                ? "ubuntu font-bold flex items-center justify-center  text-textColor w-[33px] h-[33px] rounded-full bg-blue"
                : "ubuntu font-bold flex items-center justify-center  text-white w-[33px] h-[33px] rounded-full border-[1px] border-white"
            }
          >
            4
          </Link>
        </header>
        <Routes>
          <Route path="/" element={<Navigate to="/1" />} />
          <Route path="/1" element={<Info />} />
          <Route path="/2" element={<Plan />} />
          <Route path="/3" element={<AddOns />} />
          <Route path="/4" element={<Submit />} />
        </Routes>
      </div>
      <footer className="w-full h-[72px] bg-white flex items-center justify-between p-[16px]">
        {location.pathname !== "/1" ? (
          <Link
            className="text-[14px] font-medium ubuntu text-goBeck"
            to={
              location.pathname === "/2"
                ? "/1"
                : location.pathname === "/3"
                ? "/2"
                : location.pathname === "/4"
                ? "/3"
                : ""
            }
          >
            Go Back
          </Link>
        ) : (
          <p></p>
        )}
        {location.pathname !== "/4" ? (
          <Link
            className="ubuntu text-[16px] rounded-[4px] font-medium w-[97px] h-10 bg-Denim text-white flex items-center justify-center "
            to={
              location.pathname === "/1"
                ? "/2"
                : location.pathname === "/2"
                ? "/3"
                : location.pathname === "/3"
                ? "/4"
                : ""
            }
          >
            Next Step
          </Link>
        ) : (
          <button className="w-[97px] h-10 bg-confirm text-white ubuntu font-[14px] rounded-[4px] ">
            Confirm
          </button>
        )}
      </footer>
    </div>
  );
}

export default App;

import { Routes, Route, Link, Navigate, useLocation } from "react-router-dom";
import Info from "./pages/info";
import Plan from "./pages/plan";
import AddOns from "./pages/addOns";
import Submit from "./pages/submit";
import { ArrayOfObject, user } from "./userType";
import { useEffect, useState } from "react";
function App() {
  const [example, setExample] = useState<boolean>(false);
  const [yearly, setYearly] = useState<boolean>(false);
  const [valuePlan, setValuePlan] = useState<number>(0);
  const [array, setArray] = useState<ArrayOfObject[]>([]);
  const [user, setUser] = useState<user>({
    name: "",
    email: "",
    phone: "",
    plan: { id: "", price: 0, name: "" },
    addOns: [],
  });
  useEffect(() => {
    setUser({ ...user, addOns: array });
  }, [array]);
  useEffect(() => {
    setUser({ ...user, addOns: [] });
    setArray([]);
  }, [yearly]);
  const location = useLocation();
  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      setUser(JSON.parse(data));
    }
    setExample(true);
  }, []);

  useEffect(() => {
    if (example) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center xxl:items-start  xxl:flex-row xxl:w-[950px] xxl:gap-[100px] xxl:p-4 xxl:rounded-[15px] xxl:bg-white">
      <header
        className="flex flex-row justify-center gap-4 pt-[32px] bg-cover bg-no-repeat bg-center bg_mobile h-[172px] w-full 
          xxl:bg-desktop xxl:h-[568px] xxl:w-[274px] xxl:flex-col xxl:justify-start xxl:pl-12 xxl:pt-10 xxl:gap-8
        "
      >
        <div className="flex  xxl:items-center gap-4">
          <Link
            to="/1"
            className={`ubuntu font-bold flex items-center justify-center w-[33px] h-[33px] rounded-full
              ${
                location.pathname === "/1"
                  ? " text-textColor  bg-blue"
                  : " text-white      border-[1px] border-white"
              }`}
          >
            1
          </Link>
          <div className="hidden xxl:block">
            <p className="ubuntu font-normal text-lightBlue text-[12px]">
              STEP 1
            </p>
            <p className="ubuntu font-bold text-white  text-sm tracking-[1px]">
              YOUR INFO
            </p>
          </div>
        </div>
        <div className="flex xxl:items-center gap-4">
          <Link
            to="/2"
            className={`ubuntu font-bold flex items-center justify-center w-[33px] h-[33px] rounded-full
              ${
                location.pathname === "/2"
                  ? " text-textColor  bg-blue"
                  : " text-white      border-[1px] border-white"
              }`}
          >
            2
          </Link>
          <div className="hidden xxl:block">
            <p className="ubuntu font-normal text-lightBlue text-[12px]">
              STEP 2
            </p>
            <p className="ubuntu font-bold text-white  text-sm tracking-[1px]">
              SELECT PLAN
            </p>
          </div>
        </div>
        <div className="flex xxl:items-center gap-4">
          <Link
            to="/3"
            className={`ubuntu font-bold flex items-center justify-center w-[33px] h-[33px] rounded-full
              ${
                location.pathname === "/3"
                  ? " text-textColor  bg-blue"
                  : " text-white      border-[1px] border-white"
              }`}
          >
            3
          </Link>
          <div className="hidden xxl:block">
            <p className="ubuntu font-normal text-lightBlue text-[12px]">
              STEP 3
            </p>
            <p className="ubuntu font-bold text-white  text-sm tracking-[1px]">
              ADD-ONS
            </p>
          </div>
        </div>
        <div className="flex xxl:items-center gap-4">
          <Link
            to="/4"
            className={`ubuntu font-bold flex items-center justify-center w-[33px] h-[33px] rounded-full
              ${
                location.pathname === "/4"
                  ? " text-textColor  bg-blue"
                  : " text-white      border-[1px] border-white"
              }`}
          >
            4
          </Link>
          <div className="hidden xxl:block">
            <p className="ubuntu font-normal text-lightBlue text-[12px]">
              STEP 4
            </p>
            <p className="ubuntu font-bold text-white  text-sm tracking-[1px]">
              SUMMARY
            </p>
          </div>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Navigate to="/1" />} />
        <Route path="/1" element={<Info setUser={setUser} user={user} />} />
        <Route
          path="/2"
          element={
            <Plan
              setValue={setValuePlan}
              value={valuePlan}
              setUser={setUser}
              user={user}
              setYearly={setYearly}
              yearly={yearly}
            />
          }
        />
        <Route
          path="/3"
          element={
            <AddOns
              user={user}
              setUser={setUser}
              setYearly={setYearly}
              yearly={yearly}
              array={array}
              setArray={setArray}
            />
          }
        />
        <Route
          path="/4"
          element={
            <Submit
              setUser={setUser}
              user={user}
              yearly={yearly}
              array={array}
              value={valuePlan}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;

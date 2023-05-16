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
    plan: {id: '', price: 0, name: ''},
    addOns: [],
  });
  useEffect(()=>{
    setUser({ ...user, addOns:array });
  },[array])
  useEffect(()=>{
    setUser({ ...user, addOns:[]});
    setArray([])
  },[yearly])
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
    <div className="flex flex-col items-center justify-between ">
      <div className="flex flex-col items-center w-full  ">
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
            element={<AddOns  user={user} setUser={setUser}  setYearly={setYearly} yearly={yearly} array={array} setArray={setArray}/>}
          />
          <Route path="/4" element={<Submit setUser={setUser}  user={user}   yearly={yearly} array={array}  value={valuePlan} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

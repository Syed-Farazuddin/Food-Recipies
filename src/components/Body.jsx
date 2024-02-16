import { useContext } from "react";
import { GlobalContext } from "../context/Context";

function Body() {
  const { darkMode, recipies, loading } = useContext(GlobalContext);
  if (loading) {
    return <h1>Loading.......</h1>;
  }
  return (
    <div className={`${darkMode ? "bg-slate-800" : "bg-rose-50"} p-10 `}>
      <div className="flex flex-wrap gap-8">
        {recipies.length > 0 &&
          recipies.map((item, index) => (
            <div
              className="w-[300px]  border-2 border-slate-200  flex flex-col items-start justify-start bg-white p-3 rounded-lg"
              key={index}
            >
              <img src={item.image_url} className="w-full h-[65%]" alt="" />
              <div className="flex justify-start flex-col items-start gap-1">
                <p className="text-rose-400">Speciality</p>
                <h1>{item.title}</h1>
                <button className="bg-rose-500 rounded-md text-white font-bold p-1 mt-2">
                  Recipe Details
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Body;

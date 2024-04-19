import { Link } from "react-router-dom";

const categories = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="bg-gradient-to-r from-[#4661E6] to-[#AD1FEA] text-white px-6 h-[137px] rounded-lg flex flex-col justify-end pb-6 shadow">
        <h1 className="font-bold text-lg">Frontend Mentor</h1>
        <span className="mt-1 text-gray-300">Feedback Board</span>
      </div>
      <div className="bg-white px-6 rounded-lg py-6 flex flex-wrap gap-4">
        {categories.map((item) => (
          <div className="bg-[#F2F4FF] text-[#4661E6] font-semibold px-3 py-1 text-sm cursor-pointer rounded">
            {item}
          </div>
        ))}
      </div>
      <div className="bg-white px-6 rounded-lg py-6">
        <div className="flex justify-between">
          <p className="text-[#3A4374] font-bold">Roadmap</p>
          <Link
            to={"/roadmap"}
            className="text-[#4661E6] underline text-sm font-semibold"
          >
            View
          </Link>
        </div>
        <div className="mt-3 space-y-1">
          <div className="flex justify-between">
            <span className="text-[#647196]">Planned</span>
            <span className="font-bold text-[#647196] text-sm">2</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#647196]">In-Progress</span>
            <span className="font-bold text-[#647196] text-sm">5</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#647196]">Live</span>
            <span className="font-bold text-[#647196] text-sm">1</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

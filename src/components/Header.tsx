// Components
import { Link } from "react-router-dom";
// React icons
import { IoBulbOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="bg-[#373F68] w-full flex justify-between p-6 rounded-lg">
      <div className="flex items-center text-white ">
        <IoBulbOutline size={24} />
        <p className="font-bold ml-2">6 Suggestions</p>

        <div className="ml-6">Sort by: Most Upvotes</div>
      </div>
      <div>
        <Link
          to={"/new-feedback"}
          className="text-white rounded-lg text-sm px-6 py-3 font-bold bg-[#AD1FEA]"
        >
          + Add Feedback
        </Link>
      </div>
    </header>
  );
};

export default Header;

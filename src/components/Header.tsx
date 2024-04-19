// Components
import { Button } from "./";
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
        <Button primary onClick={() => {}}>
          + Add Feedback
        </Button>
      </div>
    </header>
  );
};

export default Header;

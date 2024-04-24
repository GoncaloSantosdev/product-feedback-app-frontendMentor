// React router
import { Link } from "react-router-dom";
// Types
import { FeedbackType } from "../../types";
// React Icons
import { FaComment } from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";

type FeedbackProps = {
  feedback: FeedbackType;
};

const FeedbackCard: React.FC<FeedbackProps> = ({ feedback }) => {
  const { title, description, category, votes, comments } = feedback;

  return (
    <div className="bg-white rounded-lg flex items-center justify-between p-6">
      <div className="flex items-center gap-x-8">
        <div className="bg-[#F2F4FF] flex flex-col items-center rounded-xl px-4 py-2 cursor-pointer">
          <MdKeyboardArrowUp color="#4661E6" fontSize={20} />
          <span className="text-[#3A4374] font-semibold text-sm">{votes}</span>
        </div>
        <div>
          <Link to={"/feedback-detail/1"}>
            <h2 className="text-[#3A4374] font-bold">{title}</h2>
          </Link>
          <p className="text-[#647196] text-sm mt-2">{description}</p>
          <div className="mt-4">
            <span className="bg-[#F2F4FF] text-[#4661E6] font-semibold text-sm px-4 py-2 rounded">
              {category}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <FaComment color="#CDD2EE" />
        <span className="text-[#3A4374] font-bold">{comments}</span>
      </div>
    </div>
  );
};

export default FeedbackCard;

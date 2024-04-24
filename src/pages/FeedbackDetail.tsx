// React Router
import { Link } from "react-router-dom";
// Components
import { AddComment, Comments, FeedbackCard } from "../components";
// Data
import { feedbacksData } from "../data/feedbacksData";
// React Icons
import { MdKeyboardArrowLeft } from "react-icons/md";

const FeedbackDetail = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <Link
          to={"/feedbacks"}
          className="text-[#647196] font-bold text-sm flex items-center gap-2"
        >
          <MdKeyboardArrowLeft size={20} color="#4661E6" /> Go Back
        </Link>

        <Link
          to={"/edit-feedback/1"}
          className="bg-[#4661E6] text-white rounded-lg text-sm px-6 py-3 font-bold"
        >
          Edit Feedback
        </Link>
      </div>

      <div className="mt-6">
        {feedbacksData.length > 0 && (
          <FeedbackCard feedback={feedbacksData[0]} key={feedbacksData[0].id} />
        )}
      </div>

      <div className="mt-6 bg-white rounded-lg p-6">
        <Comments />
      </div>

      <div className="mt-6 bg-white rounded-lg p-6">
        <AddComment />
      </div>
    </div>
  );
};

export default FeedbackDetail;

// Components
import { FeedbackCard, Header, Sidebar } from "../components";
// Data
import { feedbacksData } from "../data/feedbacksData";

const Feedbacks = () => {
  return (
    <div className="flex gap-x-6">
      <div className="w-1/4">
        <Sidebar />
      </div>
      <div className="w-9/12">
        <Header />
        <div className="mt-6 space-y-6">
          {feedbacksData.map((feedback) => (
            <FeedbackCard feedback={feedback} key={feedback.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;

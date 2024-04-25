// React Router
import { Link, useParams } from "react-router-dom";
// React Query
import { useQuery } from "@tanstack/react-query";
// API
import { getFeedback } from "../services/apiFeedbacks";
// Components
import { AddComment, Comments, FeedbackCard } from "../components";
// React Icons
import { MdKeyboardArrowLeft } from "react-icons/md";

const FeedbackDetail = () => {
  const { id } = useParams();

  const { data, isFetching, error } = useQuery({
    queryKey: ["feedback"],
    queryFn: () => getFeedback(id),
  });

  if (error) return <h1>Failed fetching feedback</h1>;

  return (
    <>
      {isFetching ? (
        <h1>Loading...</h1>
      ) : (
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
            {data?.map((item) => (
              <FeedbackCard feedback={item} key={item.id} />
            ))}
          </div>

          <div className="mt-6 bg-white rounded-lg p-6">
            <Comments />
          </div>

          <div className="mt-6 bg-white rounded-lg p-6">
            <AddComment />
          </div>
        </div>
      )}
    </>
  );
};

export default FeedbackDetail;

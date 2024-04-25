// React Query
import { useQuery } from "@tanstack/react-query";
// Components
import { FeedbackCard, Header, Sidebar } from "../components";
// Data
import { getFeedbacks } from "../services/apiFeedbacks";

const Feedbacks = () => {
  // fetch feedbacks from db
  const { data, isFetching, error } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: getFeedbacks,
  });

  if (error) return <h1>Failed fetching feedbacks</h1>;

  return (
    <div className="flex gap-x-6">
      <div className="w-1/4">
        <Sidebar />
      </div>
      <div className="w-9/12">
        <Header />
        <div className="mt-6 space-y-6">
          {isFetching ? (
            <h1>Loading...</h1>
          ) : (
            <>
              {data?.map((feedback) => (
                <FeedbackCard feedback={feedback} key={feedback.id} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;

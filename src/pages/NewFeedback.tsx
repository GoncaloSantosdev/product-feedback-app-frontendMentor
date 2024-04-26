// React Router
import { Link, useNavigate } from "react-router-dom";
// React Query
import { useMutation, useQueryClient } from "@tanstack/react-query";
// React Hook Form
import { useForm } from "react-hook-form";
// API
import { createFeedback } from "../services/apiFeedbacks";
// Components
import { Button } from "../components";
// React Icons
import { MdKeyboardArrowLeft } from "react-icons/md";

interface FormData {
  title: string;
  category: string;
  description: string;
}

const NewFeedback = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  // Access the client
  const queryClient = useQueryClient();

  // Create feedback
  const { mutate } = useMutation({
    mutationFn: createFeedback,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["feedbacks"] });
      navigate("/feedbacks");
    },
  });

  const onSubmit = (data: FormData) => {
    mutate(data);
  };

  return (
    <div className="max-w-lg mx-auto">
      <div>
        <Link
          to={"/feedbacks"}
          className="text-[#647196] font-bold text-sm flex items-center gap-2"
        >
          <MdKeyboardArrowLeft size={20} color="#4661E6" /> Go Back
        </Link>
      </div>

      <div className="bg-[#FFFFFF] mt-16 p-6 rounded-lg relative">
        <div className="rounded-full mt-[-30px] bg-gradient-to-r from-[#4661E6] to-[#AD1FEA] absolute top-0 w-[56px] h-[56px] text-white text-4xl">
          <span className="flex items-center justify-center h-full mt-[-3px]">
            +
          </span>
        </div>

        <h3 className="text-[#3A4374] mt-8 font-bold text-lg">
          Create New Feedback
        </h3>

        <form className="mt-4 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="text-[#3A4374] font-semibold mb-2">
              Feedback Title
            </label>
            <p className="text-[#647196] text-sm mt-1">
              Add a short, descriptive headline
            </p>
            <input
              {...register("title")}
              type="text"
              required
              className="bg-[#F7F8FD] w-full p-3 rounded-lg mt-2"
            />
          </div>

          <div>
            <label className="text-[#3A4374] font-semibold mb-2">
              Category
            </label>
            <p className="text-[#647196] text-sm mt-1">
              Choose a category for your feedback
            </p>
            <select
              {...register("category")}
              required
              className="bg-[#F7F8FD] w-full p-3 rounded-lg mt-2 "
            >
              <option value="all">All</option>
              <option value="ui">UI</option>
              <option value="ux">UX</option>
              <option value="enhancement">Enhancement</option>
              <option value="bug">Bug</option>
              <option value="feature">Feature</option>
            </select>
          </div>

          <div>
            <label className="text-[#3A4374] font-semibold mb-2">
              Feedback Detail
            </label>
            <p className="text-[#647196] text-sm mt-1">
              Include any specific comments on what should be improved, added,
              etc.
            </p>
            <textarea
              {...register("description")}
              required
              className="bg-[#F7F8FD] w-full p-3 rounded-lg mt-2 text-sm h-[120px]"
            />
          </div>

          <div className="flex justify-end gap-4">
            <Button type="reset">Cancel</Button>
            <Button type="submit" primary>
              Add Feedback
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewFeedback;

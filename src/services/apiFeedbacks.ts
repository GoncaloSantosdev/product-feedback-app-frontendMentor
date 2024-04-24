import supabase from "../utils/supabase";

export const getFeedbacks = async () => {
  const { data, error } = await supabase.from("feedbacks").select("*");

  if (error) {
    console.error(error);
    throw new Error("Feedbacks could not be loaded");
  }

  return data;
};

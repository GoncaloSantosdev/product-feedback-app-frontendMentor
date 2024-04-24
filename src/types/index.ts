export type ButtonType = {
  children: React.ReactNode;
  onClick?: () => void;
  type: "button" | "submit" | "reset";
  primary?: boolean;
};

export type FeedbackType = {
  id: number;
  title: string;
  description: string;
  category: string;
  votes: number;
  comments: number;
};

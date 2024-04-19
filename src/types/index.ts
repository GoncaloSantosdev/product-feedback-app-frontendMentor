export type ButtonType = {
  children: React.ReactNode;
  onClick: () => void;
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

// React Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// React Query
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// Pages
import {
  EditFeedback,
  FeedbackDetail,
  Feedbacks,
  NewFeedback,
  Roadmap,
} from "./pages";

const queryClient = new QueryClient();

const App = () => {
  return (
    <div className="bg-[#F7F8FD]">
      <div className="lg:max-w-[960px] lg:py-12 lg:mx-auto min-h-screen">
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route index element={<Navigate replace to="/feedbacks" />} />
              <Route path="/feedbacks" element={<Feedbacks />} />
              <Route path="/feedback-detail/:id" element={<FeedbackDetail />} />
              <Route path="/new-feedback" element={<NewFeedback />} />
              <Route path="/edit-feedback/:id" element={<EditFeedback />} />
              <Route path="/roadmap" element={<Roadmap />} />
            </Routes>
          </BrowserRouter>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </div>
    </div>
  );
};

export default App;

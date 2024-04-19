// React Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// Pages
import {
  EditFeedback,
  FeedbackDetail,
  Feedbacks,
  NewFeedback,
  Roadmap,
} from "./pages";

const App = () => {
  return (
    <div className="bg-[#F7F8FD]">
      <div className="lg:max-w-[960px] lg:py-12 lg:mx-auto min-h-screen">
        <BrowserRouter>
          <Routes>
            <Route index element={<Navigate replace to="/feedbacks" />} />
            <Route path="/feedbacks" element={<Feedbacks />} />
            <Route path="/feedback-detail" element={<FeedbackDetail />} />
            <Route path="/new-feedback" element={<NewFeedback />} />
            <Route path="/edit-feedback" element={<EditFeedback />} />
            <Route path="/roadmap" element={<Roadmap />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;

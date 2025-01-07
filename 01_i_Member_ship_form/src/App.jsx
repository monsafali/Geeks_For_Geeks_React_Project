// import React from "react";
// import Header from "./Header";
// import MembershipForm from "./MembershipForm";

// function App() {
//   return (
//     <div className="h-auto max-w-[960px] border border-red-400 mx-auto p-5 bg-green-100 rounded-xl">
//       <Header />
//       <MembershipForm />
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MembershipForm from "./MembershipForm";
import ThankYou from "./componenet/ThankYou";
import Header from "./Header";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="h-auto max-w-[960px] border border-red-400 mx-auto p-5 bg-green-100 rounded-xl">
              <Header />
              <MembershipForm />
            </div>
          }
        />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
};

export default App;

// // src/App.js
// // import React from "react";
// // import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// // import MockInterview from "./pages/MockInterview";
// // import HistoryComponent from "./pages/HistoryComponent";
// // import InterviewDetails from "./pages/InterviewDetails"; 
// // import AdminSetup from "./components/AdminSetup";
// // function App() {
// //   return (
// //     <Router>
// //       <div className="App">
// //         <Routes>
// //           <Route exact path="/" element={<MockInterview />} />
// //           <Route path="/history" element={<HistoryComponent />} />
// //           <Route exact path="/admin-tpo" element={<AdminSetup />} />
// //           <Route
// //             path="/interview-details/:interviewId"
// //             element={<InterviewDetails />}
// //           />{" "}
// //           {/* Add the new route */}
// //         </Routes>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;
// // import React from "react";
// // import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// // import MockInterview from "./pages/MockInterview";
// // import HistoryComponent from "./pages/HistoryComponent";
// // import InterviewDetails from "./pages/InterviewDetails";
// // import AdminSetup from "./components/AdminSetup";
// // // import Dashboard from "./pages/Dashboard"; // Import the Dashboard component

// // function App() {
// //   return (
// //     <Router>
// //       <div className="App">
// //         {/* Navbar */}
// //         <div className="bg-gray-800 sticky top-0 z-50 w-full">
// //           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //             <nav className="flex" aria-label="Tabs">
// //               <Link to="/history" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
// //                 History
// //               </Link>
// //               <Link to="/dashboard" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
// //                 Dashboard
// //               </Link>
// //               <Link to="/admin-tpo" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
// //                 Admin TPO
// //               </Link>
// //             </nav>
// //           </div>
// //         </div>

// //         {/* Routes */}
// //         <Routes>
// //           {/* <Route exact path="/" element={<MockInterview />} /> */}
// //           <Route path="/history" element={<HistoryComponent />} />
// //           <Route path="/dashboard" element={<MockInterview />} /> {/* Add the Dashboard route */}
// //           <Route path="/admin-tpo" element={<AdminSetup />} />
// //           <Route path="/interview-details/:interviewId" element={<InterviewDetails />} />
// //         </Routes>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;


// import React from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Import Link from react-router-dom
// import MockInterview from "./pages/MockInterview";
// import HistoryComponent from "./pages/HistoryComponent";
// import InterviewDetails from "./pages/InterviewDetails";
// import AdminSetup from "./components/AdminSetup";
// // import Dashboard from "./pages/Dashboard"; // Import the Dashboard component

// function App() {
//   return (
//     <Router>
//       <div className="App">
    

//         {/* Routes */}
//         <Routes>
//           {/* <Route exact path="/" element={<MockInterview />} /> */}
//           <Route path="/history" element={<HistoryComponent />} />
//           <Route path="/dashboard" element={<MockInterview />} /> {/* Add the Dashboard route */}
//           <Route path="/admin-tpo" element={<AdminSetup />} />
//           <Route path="/interview-details/:interviewId" element={<InterviewDetails />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MockInterview from "./pages/MockInterview";
import HistoryComponent from "./pages/HistoryComponent";
import InterviewDetails from "./pages/InterviewDetails"; 
import AdminSetup from "./components/AdminSetup";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<MockInterview />} />
          <Route path="/history" element={<HistoryComponent />} />
          <Route exact path="/admin-tpo" element={<AdminSetup />} />
          <Route
            path="/interview-details/:interviewId"
            element={<InterviewDetails />}
          />{" "}
          {/* Add the new route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

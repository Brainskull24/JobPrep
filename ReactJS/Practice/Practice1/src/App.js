import "./App.css";
// import { useState } from "react";
// import Stopwatch from "./components/StopWatch";
import TodoList from "./components/TodoList";
// import Todo from "./pages/Todo";
// import Tabs from "./components/Tabs";
// import Accordion from "./components/Accordion";
// import InputField from "./components/InputField";
// import Modal from "./components/Modal";
// import Toggle from "./components/Toggle";
// import SearchBar from "./components/SearchBar";
// import InfiniteScroll from "./components/InfiniteScroll";
// import Pagination from "./components/Pagination";
// import PropsDrill from "./components/PropsDrill";
// import CustomHook from "./components/CustomHook";
// import FetchApi from "./components/FetchApi";
// import Counter from "./components/Counter";
// import Form from "./components/Form";

function App() {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* <Counter /> */}
      {/* <Form /> */}
      {/* <FetchApi /> */}
      {/* <CustomHook /> */}
      {/* <PropsDrill/> */}
      {/* <Pagination /> */}
      {/* <InfiniteScroll /> */}
      {/* <SearchBar /> */}
      {/* <h1>Portal Modal Demo</h1>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Hello from Modal!</h2>
      </Modal> */}
      {/* <Toggle /> */}
      {/* <InputField/> */}
      {/* <Accordion /> */}
      {/* <Tabs /> */}
      {/* <Todo /> */}
      {/* <Stopwatch /> */}
      <TodoList/>
    </>
  );
}

export default App;

// import React from "react";
// import "./App.css"
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { AuthProvider, AuthContext } from "./context/AuthContext";
// import Todo from "./pages/Todo";
// import Login from "./pages/Login";
// import Register from "./pages/Register";

// function PrivateRoute({ children }) {
//   const { user } = React.useContext(AuthContext);
//   return user ? children : <Navigate to="/login" replace />;
// }

// export default function App() {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route
//             path="/"
//             element={
//               <PrivateRoute>
//                 <Todo />
//               </PrivateRoute>
//             }
//           />
//         </Routes>
//       </BrowserRouter>
//     </AuthProvider>
//   );
// }

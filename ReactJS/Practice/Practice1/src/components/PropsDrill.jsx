import React, { useState, useContext } from "react";
import PropsContext from "./PropsContext";

const PropsDrill = () => {
  const [data, setData] = useState("Hello from Props Drill");
  return (
    <>
      <PropsContext.Provider value={data}>
        <div className="PropsDrill">
          <h1>Props Drill</h1>
          <ChildComponent />
          <button onClick={() => setData("Data updated from Parent Component")}>
            Update Data
          </button>
        </div>
      </PropsContext.Provider>
    </>
  );
};

const ChildComponent = () => {
  return (
    <div className="ChildComponent">
      <h1>Child Component 1</h1>
      <ChildComponent2 />
    </div>
  );
};

const ChildComponent2 = () => {
  const propsData = useContext(PropsContext);
  return (
    <div className="ChildComponent2">
      <h1>Child Component 2</h1>
      <p>{propsData}</p>
    </div>
  );
};

// const PropsDrill = () => {
//     const [data, setData] = useState("Hello from Props Drill");
//     return (
//       <>
//         <div className="PropsDrill">
//           <h1>Props Drill</h1>
//           <ChildComponent data={data} />
//           <button onClick={() => setData("Data updated from Parent Component")}>
//             Update Data
//           </button>
//         </div>
//       </>
//     );
//   };

//   const ChildComponent = ({ data }) => {
//     return (
//       <div className="ChildComponent">
//         <h1>Child Component 1</h1>
//         <ChildComponent2 data={data} />
//       </div>
//     );
//   };

//   const ChildComponent2 = (props) => {
//     return (
//       <div className="ChildComponent2">
//         <h1>Child Component 2</h1>
//         <p>{props.data}</p>
//       </div>
//     );
//   };

export default PropsDrill;

import React, { useState } from "react";
// import Link from 'next/link';
// import MultiStep from "react-multistep";
// import AllList from "../../components/ApplicationManagers/AllList";
// import ApplyList from "../../components/ApplicationManagers/ApplyList";
// import PendingList from "../../components/ApplicationManagers/PendingList";
import applications from '../../Data/applications'



//path - http://localhost:3000/applicationmanager

export default function ApplicatonManager({ applications }) {

  const [showData, setShowData] = useState(false);

  const handleClick = () => {
    setShowData(!showData);
  };
  const handleClicks = () => {
    setShowData(!showData);
  };
  const handleClickss = () => {
    setShowData(!showData);
  };

  const applicationDate = applications?.applicationDate;
  if (applicationDate !== undefined) {
    console.log("we")
  } else {
    console.log("yes")
  }





  return (

    <main >
      <h1 className='font-bold text-2xl px-[100px] mt-[100px] mb-[30px]'> Application Manager</h1>
      <section>
        {/* className={{
          style: {
            border: "1px solid blue",
            height: '750px',
            width: '300px',
            height: '300px',
          },
        }} */}
        <div style={{
          border: "1px solid blue",
          height: '770px',
          width: '900px',
          height: '700px',
          margin: "0 auto",
          borderRadius: '12px',
        }}>
          <div style={{
            marginTop: "60px",
            // marginLeft: '40px',
            gap: "20px",
            borderBottom: "1px solid blue",

          }}>
            <div style={{ marginBottom: "20px" }}>
              <button onClick={handleClick} style={{ paddingRight: "70px",paddingLeft: "70px", fontWeight: "bold"}}>AllList</button>
              <button onClick={handleClicks} style={{ paddingRight: "70px", fontWeight: "bold"}}>ApplyList</button>
              <button onClick={handleClickss} style={{ paddingRight: "30px", fontWeight: "bold"}}>Pending</button>
            </div>
          </div>
          <div className="flex flex-row mb-4 gap-4 ml-4 mt-4 ">
          <div>
            <div className="flex w-[120px] h-[40px] border border-indigo-600 justify-center items-center">
                <select name="applicationType">
                <option> data  </option>
                <option value="Individual"> month </option>
                <option value="Company"> Company </option>
              </select>
            </div>
          </div>
          <div className="flex w-[120px] h-[40px]  border border-indigo-600 justify-center items-center">
            <div>
                <select name="applicationType">
                <option> Year  </option>
                <option value="Individual"> month </option>
                <option value="Company"> day </option>
              </select>
            </div>
          </div>
          </div>
          {showData ? (
            <p>Here is the data that should be displayed when the button is clicked.
              rrrrwrwrwrwwtwtwywyw
              gdggdggdgdgdggdgdgggdgdgd hhhfhfjdjud
              dfdfdgd hhddhdhdhdn  fsgshsjnf
              cvbnjyf gdgdgdhhdyd qeewwwiow
              fsfrwtwyueioee bgfhfuewopwks njd
            </p>
          ) : (
            <p>No data to display yet.</p>
          )}

        </div>
      </section>
    </main>
  )
}

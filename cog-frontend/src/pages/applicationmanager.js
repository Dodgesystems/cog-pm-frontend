"use client"


import { useState, useEffect } from "react";
import applications from '../../Data/applications'



//path - http://localhost:3000/applicationmanager

export default function ApplicatonManager() {

  const [applications, setApplications] = useState([]);

  const fetchApplications = async () => {
    const response = await fetch(`/api/applications`);
    const data = await response.json();
    setApplications(data);
  };
  useEffect(() => {
    fetchApplications();
  }, []);





  // function handleClick(event) {
  //   const buttonClicked = event.target.name;

  //   if (buttonClicked === 'All') {
  //     const filtered = applications.filter(item => item.property === 'All');
  //      setApplications(filtered);
  //   } else if (buttonClicked === 'ApplyList') {
  //     const filtered = applications.filter(item => item.property === 'ApplyList');
  //      setApplications(filtered);
  //   }else if(buttonClicked === 'pending'){
  //    const filtered = applications.filter(item => item.property === 'pending');
  //     setApplications(filtered);
  //   }
  // }


    

  const handleClick = (e) => {
    let word = e.target.value;
   

    if (word === 'All') {
      setApplications(applications)
    } else if (word === 'ApplyList') {
      const filtered = applications.filter(item => item.Property === 'ApplyList')
      setApplications(filtered)
    } else if (word === 'pending') {
      const filtered = applications.filter(item => item.Property === 'pending')
      setApplications(filtered)
    }
  }

  return (

    <main className='mb-5'>
      <h1 className='font-bold text-2xl px-[100px] mt-[100px] mb-[30px]'> Application Manager</h1>
      <section>
        <div style={{
          border: "2px solid #62909F",
          height: '700px',
          width: '900px',
          height: '700px',
          margin: "0 auto",
          borderRadius: '12px',
        }}>
          <div style={{
            marginTop: "60px",
            gap: "20px",
            borderBottom: "3px solid #62909F",
          }}>
         <div style={{ marginBottom: "20px" }}>
              <button   value='All' onClick={handleClick} style={{ paddingRight: "70px", paddingLeft: "70px", fontWeight: "bold" }}>All</button>
              <button value='ApplyList' onClick={handleClick} style={{ paddingRight: "70px", fontWeight: "bold" }}>ApplyList</button>
              <button  value='pending' onClick={handleClick} style={{ paddingRight: "30px", fontWeight: "bold" }}>Pending</button>
            </div> 
        </div>
         <div className="flex flex-row mb-4 gap-4 ml-4 mt-4 ">
            <div>
              <div className="flex w-[120px] h-[40px] border border-[#62909F] justify-center items-center">
                <select name="applicationType ">
                  <option> date  </option>
                  <option value="Individual"> month </option>
                  <option value="Company"> date </option>
                </select>
              </div>
            </div>
            <div className="flex w-[120px] h-[40px]  border border-[#62909F] justify-center items-center">
              <div>
                <select name="applicationType">
                  <option> Year  </option>
                  <option value="Individual"> month </option>
                  <option value="Company"> day </option>
                </select>
              </div>
            </div>
          </div>

         <div>
         {applications.map((application) => {
            return (
             
               <div key={application.id} style={{ marginTop: "10px", overFlowY: 'hidden',display: 'flex', paddingRight: '30px' ,justifyContent: 'center', alignItem: 'center'}}>
                  <div style={{  paddingRight: '30px'}}>
                    <input type="checkbox" />
                  </div>
                  <p style={{  paddingRight: '30px',   paddingBottom: '25px'}}>{application.applicationDate}</p>
                  <p style={{  paddingRight: '30px' ,paddingBottom: '25px'}}>{application.listName}</p>
                  <p style={{  paddingRight: '30px', paddingBottom: '25px' }}>{application.propertyName}</p>
                  <p style={{  paddingRight: '30px', paddingBottom: '25px' }}>{application.rentalpropertyamount}</p>
            
              </div> 
            );
          })}
         </div>
        </div>
      </section>
    </main>
  )
}

import React, { Fragment, useState } from 'react'
import { FiBell } from 'react-icons/fi'
import { stagesData } from '../../../Data/prospectStages'
import Dashboard from '../../../components/Layout/Dashboard'
import Amount from '../../../components/ProspectStages/Amount'
import ProgressBar from '../../../components/Create/ProgressBar'
import Summary from '../../../components/ProspectStages/Summary'
import Demography from '../../../components/ProspectStages/Demography'
import SigningDate from '../../../components/ProspectStages/SigningDate'
import ClientDetails from '../../../components/ProspectStages/ClientDetails'
import PropertyDetails from '../../../components/ProspectStages/PropertyDetails'

const addProspect = () => {
  const [activeStage, setActiveStage] = useState(1)
  const [activeSubStage, setActiveSubStage] = useState(1)

  const [clientType, setClientType] = useState("")
  
  const handleNextSubStage = () => {
    if (activeSubStage < stagesData[activeStage].subStages.length) {
      setActiveSubStage((prevSubStage) => prevSubStage + 1)
    } 
    else handleNextStage()
  }

  const handlePreviousSubStage = () => {
    if (activeSubStage > 0) {
      setActiveSubStage((prevSubStage) => prevSubStage - 1)
    } 
    else handlePreviousStage()
  }


  const handleNextStage = () => {
    if (activeStage < stagesData.length - 1) {
      setActiveStage((prevStage) => prevStage + 1)
      setActiveSubStage(1)
    }
  }

  const handlePreviousStage = () => {
    if (activeStage > 0) {
      setActiveStage((prevStage) => prevStage - 1)
      setActiveSubStage(stagesData[activeStage - 1].subStages.length - 1)
    }
  }
   
  return (
    <Dashboard>
      <section className="p-8 pt-0 grid min-h-full">
        <header className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-semibold">Prospect</h2>
            <h3 className="text-xl font-semibold opacity-50 mt-4">Add Prospect</h3>
          </div>

          <div className="flex items-center gap-4">
            <button>
              <FiBell className="text-2xl" />
            </button>

            <div>
              <div className="bg-[#E0CA04] ml-auto h-10 w-10 mb-2 rounded-full grid place-items-center font-semibold">PA</div>
              <small className="opacity-50">User ID: 12345678</small>
            </div>
          </div>
        </header>

        {/* Main */}
        <div className="m-8 mb-0 p-8 border border-primary flex justify-between h-[80vh]">
          <ProgressBar 
            stagesData={stagesData} 
            activeStage={activeStage}
            activeSubStage={activeSubStage}
          />

          <div className="border flex flex-col border-primary w-3/5 p-6 mx-auto overflow-y-scroll">
            <Fragment>
              {activeStage === 1 && (
                <ClientDetails 
                  subStage={activeSubStage} 
                  clientType={clientType}
                  setClientType={setClientType}
                />
              )}
              {activeStage === 2 && (
                <PropertyDetails subStage={activeSubStage} />
              )}
              {activeStage === 3 && (
                <Demography subStage={activeSubStage} />
              )}
              {activeStage === 4 && (
                <Amount subStage={activeSubStage} />
              )}
              {activeStage === 5 && <SigningDate />}
              {activeStage === 6 && <Summary />}
            </Fragment>

            {activeStage !== 6 && (
              <div className="flex gap-3 items-end justify-end mt-auto">
                <button 
                  onClick={handlePreviousSubStage}
                  className="text-primary border border-primary w-40 p-2 rounded-md hover:text-white hover:bg-primary"
                >
                  Back
                </button>
                <button 
                  onClick={handleNextSubStage}
                  className="bg-primary text-white border border-primary w-40 p-2 rounded-md hover:bg-white hover:text-primary"
                >
                  Continue
                </button>
              </div>
            )}
          </div>

          {activeStage === 6 && (
            <div className="flex flex-col gap-3">
              <button 
                // onClick={handleNextSubStage}
                className="bg-primary text-white border border-primary w-40 p-2 rounded-md hover:bg-white hover:text-primary"
              >
                Submit
              </button>
              <button 
                onClick={handlePreviousSubStage}
                className="text-primary border border-primary w-40 p-2 rounded-md hover:text-white hover:bg-primary"
              >
                Edit
              </button>
          </div>
          )}
        </div>
      </section>
    </Dashboard>
  )
}

export default addProspect
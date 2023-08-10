import React, { Fragment, useState } from 'react'
import { FiBell } from 'react-icons/fi'
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

  // Client Details
  const [clientType, setClientType] = useState("company")
  const [clientName, setClientName] = useState("")
  const [clientContact, setClientContact] = useState({
    email: "",
    number: ""
  })
  const [checklist, setChecklist] = useState({
    CAC: "",
    tax: "",
    creditReport: "",
    identity: "",
    creditReportTwo: "",
    confirmation: "",
    policeReport: ""
  })
  const [upload, setUpload] = useState("")
 
  // Property Details
  const [applicationType, setApplicationType] = useState("")
  const [propertyType, setPropertyType] = useState("")
  const [location, setLocation] = useState({
    state: "",
    LGA: "",
    ward: ""
  })
  const [unitID, setUnitID] = useState("")
  const [unitFeatures, setUnitFeatures] = useState({
    sittingRooms: "",
    bedRooms: "",
    restRooms: ""
  })

  // Demography
  const [gender, setGender] = useState("")
  const [religion, setReligion] = useState("")
  const [tribe, setTribe] = useState("")
  const [occupation, setOccupation] = useState({
    occupation: "",
    industryType: ""
  })
  const [ageRange, setAgeRange] = useState("")
  const [industryType, setIndustryType] = useState("")
  const [establishment, setEstablishment] = useState("")

  // Amount
  const [totalAmount, setTotalAmount] = useState("")
  const [renewalAmount, setRenewalAmount] = useState({
    subsequent: "",
    recurring: ""
  })
  const [agreementPeriod, setAgreementPeriod] = useState("")

  // Signing Date
  const [signingDate, setSigningDate] = useState("")

  const prospect = {
    clientName,
    clientType,
    clientContact,
    gender,
    religion,
    tribe,
    occupation,
    ageRange,
    applicationType,
    propertyType,
    location,
    unitID,
    unitFeatures,
    signingDate
  }

  const stagesData = [
    {
      stage: "Client Details",
      subStages: [
        "Client type",
        "Client name",
        "Client contact",
        "Verification checklist",
        "Verification upload",
      ]
    },
    {
      stage: "Property Details",
      subStages: [
        "Application type",
        "Property type",
        "Location",
        "Unit ID",
        "Unit features",
      ]
    },
    {
      stage: "Demography",
      subStages: clientType === "induvidual" ? ["Gender", "Religion", "Tribe", "Occupation", "Age range"] : ["Industry type", "Years of establishment"]
    },
    {
      stage: "Amount",
      subStages: [
        "Total amount for new tenant or buyer",
        "Renewal amount and recurring fees",
        "Total agreement period",
      ]
    },
    {
      stage: "Signing date",
      subStages: []
    },
    {
      stage: "Summary",
      subStages: []
    },
]
  
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
                  upload={upload}
                  checklist={checklist} 
                  clientType={clientType}
                  clientName={clientName}
                  clientContact={clientContact}
                  setUpload={setUpload}
                  setChecklist={setChecklist}
                  setClientType={setClientType}
                  setClientName={setClientName}
                  setClientContact={setClientContact}
                />
              )}
              {activeStage === 2 && (
                <PropertyDetails 
                  subStage={activeSubStage}
                  unitID={unitID}
                  location={location}
                  propertyType={propertyType}
                  unitFeatures={unitFeatures}
                  applicationType={applicationType}
                  setUnitID={setUnitID}
                  setLocation={setLocation}
                  setPropertyType={setPropertyType}
                  setUnitFeatures={setUnitFeatures}
                  setApplicationType={setApplicationType}
                />
              )}
              {activeStage === 3 && (
                <Demography 
                  clientType={clientType}
                  subStage={activeSubStage} 
                  tribe={tribe}
                  gender={gender}
                  religion={religion}
                  ageRange={ageRange}
                  occupation={occupation}
                  industryType={industryType}
                  establishment={establishment}
                  setTribe={setTribe}
                  setGender={setGender}
                  setReligion={setReligion}
                  setAgeRange={setAgeRange}
                  setOccupation={setOccupation}
                  setIndustryType={setIndustryType}
                  setEstablishment={setEstablishment}
                />
              )}
              {activeStage === 4 && (
                <Amount 
                  subStage={activeSubStage} 
                  totalAmount={totalAmount}
                  renewalAmount={renewalAmount}
                  agreementPeriod={agreementPeriod}
                  setTotalAmount={setTotalAmount}
                  setRenewalAmount={setRenewalAmount}
                  setAgreementPeriod={setAgreementPeriod}
                />
              )}
              {activeStage === 5 && <SigningDate signingDate={signingDate} setSigningDate={setSigningDate} />}
              {activeStage === 6 && <Summary prospect={prospect} />}
            </Fragment>

            {activeStage !== 6 && (
              <div className="flex gap-3 items-end justify-end mt-auto">
                <button 
                  disabled={(activeStage === 1 && activeSubStage === 1)}
                  onClick={handlePreviousSubStage}
                  className="text-primary border border-primary w-40 p-2 rounded-md hover:text-white hover:bg-primary disabled:pointer-events-none disabled:opacity-70"
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
                onClick={handleNextSubStage}
                className="bg-primary text-white border border-primary w-40 p-2 rounded-md hover:bg-white hover:text-primary"
              >
                Submit
              </button>
              <button 
                onClick={handlePreviousStage}
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
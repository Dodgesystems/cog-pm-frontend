import React, { Fragment } from 'react'

const Amount = ({ subStage }) => {
  return (
    <div>
      {subStage === 1 && <TotalAmount />}
      {subStage === 2 && <RenewalAmount />}
      {subStage === 3 && <AgreementPeriod />}
    </div>
  )
}

export default Amount

const Wrapper = ({ children, header, subHead }) => {
  return (
      <div className="flex flex-col gap-12">
        <div>
            <h3 className="text-xl font-semibold opacity-70">{header}</h3>
            <p className="opacity-60 mt-4">{subHead}</p>
        </div>

        <Fragment>
            {children}
        </Fragment>
      </div>
  )
}

const TotalAmount = () => {
  return (
    <Wrapper
      header="Total amount for new tenant or buyer"
      subHead="Input property purchase or rental amount for initial rent period (inclusive of onboarding, commission and agreement fees)"
    >
      <ul className="list-disc ml-6">
          <li>
              <p className="font-semibold opacity-70">Enter amount</p>
              <input 
                  type="text" 
                  placeholder="Enter amount"
                  className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
              />
          </li>
      </ul>
    </Wrapper>
  )
}

const RenewalAmount = () => {
  return (
    <Wrapper
      header="Renewal amount and recurring fees"
      subHead="Input property service charges and rental renewal amount. Recurring fees includes services like maintenance, waste disposal, electricity bills"
    >
      <ul className="list-disc mb-8 grid gap-8 ml-6">
          <li>
              <p className="font-semibold opacity-70">Subsequent rental amount</p>
              <input 
                  type="text" 
                  placeholder="Enter rental amount"
                  className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
              />
          </li>

          <li>
              <p className="font-semibold opacity-70">Recurring fees</p>
              <input 
                  type="text" 
                  placeholder="Enter recurring fees"
                  className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
              />
          </li>
      </ul>
    </Wrapper>
  )
}

const AgreementPeriod = () => {
  return (
    <Wrapper
      header="Total agreement period"
      subHead="Input property agreement period"
    >
      <ul className="list-disc ml-6 mb-8">
          <li>
              <p className="font-semibold opacity-70">Duration</p>
              <input 
                type="text" 
                placeholder="Enter duration"
                className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
              />
          </li>
      </ul>
    </Wrapper>
  )
}
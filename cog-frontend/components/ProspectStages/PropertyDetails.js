import React, { Fragment } from 'react'

const PropertyDetails = ({ subStage }) => {
  return (
    <div>
        {subStage == 1 && <ApplicationType />}
        {subStage == 2 && <PropertyType />}
        {subStage == 3 && <Location />}
        {subStage == 4 && <UnitID />}
        {subStage == 5 && <UnitFeatures />}
    </div>
  )
}

export default PropertyDetails

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

const ApplicationType = () => {
  return (
    <Wrapper
      header="Application Type"
      subHead="This is where you enter the details of the type of application from the prospect"
    >
      <ul className="list-disc ml-6">
          <li>
              <p className="font-semibold opacity-70">Application type</p>
              <select id="" className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4">
                <option value="Property rental">Property rental</option>
                <option value="Property purchase">Property purchase</option>
              </select>
          </li>
      </ul>
    </Wrapper>
  )
}

const PropertyType = () => {
  const inputs = ["Flat/appartment", "Warehouse/storage facility", "Whole home", "Office space", "Warehouse/storage facility", "Retail shop space"]
  return (
    <Wrapper
      header="Property type"
      subHead="This is where you enter the details of the type of property being prospected"
    >
      <div className="flex flex-col gap-4 mb-8">
        {inputs.map((input, i) => (
          <div key={i}>
            <input type="radio" name="type" className="cursor-pointer mr-2" />
            <span>{input}</span>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

const Location = () => {
  return (
    <Wrapper
      header="Location"
      subHead="This is where you enter the location of the property being prospected"
    >
      <ul className="list-disc ml-6 mb-8 flex flex-col gap-6">
          <li>
              <p className="font-semibold opacity-70">State</p>
              <input 
                type="text" 
                placeholder="Enter state"
                className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
              />
          </li>
          <li>
              <p className="font-semibold opacity-70">Local Governmental Area</p>
              <input 
                type="text" 
                placeholder="Enter LGA"
                className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
              />
          </li>
          <li>
              <p className="font-semibold opacity-70">Landmark/ward</p>
              <input 
                type="text" 
                placeholder="Enter landmark/ward"
                className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
              />
          </li>
      </ul>
    </Wrapper>
  )
}

const UnitID = () => {
  return (
    <Wrapper
      header="Unit ID"
      subHead="This is where you enter the identity of the property unit being prospected. A 
      property can have sub-units within it. This is to identify the specific unit the prospect is interested in"
    >
      <ul className="list-disc ml-6 mb-8">
          <li>
              <p className="font-semibold opacity-70">Unit ID</p>
              <input 
                  type="text" 
                  placeholder="Enter unit ID"
                  className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
              />
          </li>
      </ul>
    </Wrapper>
  )
}

const UnitFeatures = () => {
  return (
    <Wrapper
      header="Unit features"
      subHead="This is where you enter the details of the property unit being prospected"
    >
      <ul className="list-disc ml-6 mb-8 flex flex-col gap-6">
        <li>
            <p className="font-semibold opacity-70">Number of sitting rooms</p>
            <input 
              type="text" 
              placeholder="Enter number of sitting rooms"
              className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
            />
        </li>
        <li>
            <p className="font-semibold opacity-70">Number of bedrooms</p>
            <input 
              type="text" 
              placeholder="Enter number of bedrooms"
              className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
            />
        </li>
        <li>
            <p className="font-semibold opacity-70">Number of rest rooms</p>
            <input 
              type="text" 
              placeholder="Enter number of rest rooms"
              className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
            />
        </li>
      </ul>
    </Wrapper>
  )
}
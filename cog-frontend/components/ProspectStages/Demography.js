import React, { Fragment, useState } from 'react'

const Demography = ({ subStage }) => {
  return (
    <div>
      {subStage === 1 && <Gender />}
      {subStage === 2 && <Religion />}
      {subStage === 3 && <Tribe />}
      {subStage === 4 && <Occupation />}
      {subStage === 5 && <AgeRange />}
    </div>
  )
}

export default Demography

const Wrapper = ({ children, subHead }) => {
  return (
      <div className="flex flex-col gap-12">
          <div>
              <h3 className="text-xl font-semibold opacity-70">Demography</h3>
              <p className="opacity-60 mt-4">{subHead}</p>
          </div>

          <Fragment>
              {children}
          </Fragment>
      </div>
  )
}

const Gender = () => {
  return (
    <Wrapper subHead="Select the client’s gender">
      <div>
          <div className="mb-10">
              <input type="radio" name="gender" className="cursor-pointer mr-2" />
              <span>Male</span>
          </div>

          <div>
              <input type="radio" name="gender" className="cursor-pointer mr-2" />
              <span>Female</span>
          </div>
      </div>
    </Wrapper>
  )
}

const Religion = () => {
  return (
    <Wrapper subHead="Kindly select the religious background of the individual prospect. This field is optional">
      <div className="grid gap-6 mb-6">
          <div>
              <input type="radio" name="religion" className="cursor-pointer mr-2" />
              <span>Islam</span>
          </div>

          <div>
              <input type="radio" name="religion" className="cursor-pointer mr-2" />
              <span>Christianity</span>
          </div>

          <div>
              <input type="radio" name="religion" className="cursor-pointer mr-2" />
              <span>African traditionalist</span>
          </div>

          <div>
              <input type="radio" name="religion" className="cursor-pointer mr-2" />
              <span>Prefer nor to disclose</span>
          </div>
      </div>
    </Wrapper>
  )
}

const Tribe = () => {
  const [checked, setChecked] = useState(false)
  const tribes = ["Yoruba", "Fulani", "Hausa", "Igbo", "Tiv", "Urhobo/Itsekiri"]
  return (
    <Wrapper subHead="Kindly select the ethnic background of the individual prospect. This field is optional">
      <div className="grid gap-6 mb-6">
        {tribes.map((tribe, i) => (
          <div key={i}>
              <input type="radio" name="tribe" className="cursor-pointer mr-2" />
              <span>{tribe}</span>
          </div>
        ))}

        <div className="flex items-start">
          <input 
            value={checked} 
            type="radio" 
            name="tribe" 
            onChange={e => setChecked(e.target.checked)}
            className="group cursor-pointer mr-2" 
          />

          <div>
            <span>Other</span>
            {checked && (
              <input 
                type="text" 
                placeholder="Enter other tribe"
                className="block border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-2"
              />
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Occupation = () => {
  return (
    <Wrapper subHead="Kindly enter the professional background of the individual prospect. This field is optional">
      <ul className="list-disc ml-6 mb-8 grid gap-8">
        <li>
          <p className="font-semibold opacity-70">Occupation</p>
          <input 
              type="text" 
              placeholder="Enter occupation"
              className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
          />
        </li>

        <li>
          <p className="font-semibold opacity-70">Industry type</p>
          <input 
              type="text" 
              placeholder="Enter industry type"
              className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
          />
        </li>
      </ul>
    </Wrapper>
  )
}

const AgeRange = () => {
  const ranges = ["18-23", "24-29", "30-35", "36-41", "42-47", "54-59", "60-64", "65-70", "71 and above"]
  return (
    <Wrapper subHead="Select the age range of the prospect">
      <div className="grid gap-6 mb-6">
        {ranges.map((tribe, i) => (
          <div key={i}>
              <input type="radio" name="tribe" className="cursor-pointer mr-2" />
              <span>{tribe}</span>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}
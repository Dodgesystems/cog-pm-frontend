import React from 'react'

const Summary = () => {
  return (
    <article className="flex flex-col gap-16">
        <h3 className="text-3xl text-[#2255A0] font-semibold">Prospect summary</h3>

        <article className="flex flex-col gap-10 w-full">
          <div>
              <h2 className="text-2xl font-medium">Client Information</h2>

              <div className="border border-borderGrey rounded-lg p-4 mt-4 flex flex-col gap-6">
                <div className="flex flex-col">
                  <small>Name:</small>
                  <span></span>
                </div>

                <div className="flex flex-col">
                  <small>Client type:</small>
                  <span></span>
                </div>
                
                <div className="flex flex-col">
                  <small>Email address:</small>
                  <span></span>
                </div>

                <div className="flex flex-col">
                  <small>Phone number:</small>
                  <span></span>
                </div>

                <div className="flex flex-col">
                  <small>Gender:</small>
                  <span></span>
                </div>

                <div className="flex flex-col">
                    <small>Religion:</small>
                    <span></span>
                </div>

                <div className="flex flex-col">
                  <small>Tribe:</small>
                  <span></span>
                </div>

                <div className="flex flex-col">
                  <small>Age:</small>
                  <span></span>
                </div>
              </div>
          </div>

          <div>
              <h2 className="text-2xl font-medium">Property details</h2>

              <div className="border border-borderGrey rounded-lg p-4 mt-4 flex flex-col gap-6">
                  <div className="flex flex-col">
                    <small>Application type:</small>
                    <span></span>
                  </div>

                  <div className="flex flex-col">
                    <small>Property type:</small>
                    <span></span>
                  </div>

                  <div className="flex flex-col">
                    <small>Property name:</small>
                    <span></span>
                  </div>

                  <div className="flex flex-col">
                    <small>Location:</small>
                    <span></span>
                  </div>

                  <div className="flex flex-col">
                    <small>Unit ID:</small>
                    <span></span>
                  </div>

                  <div className="flex flex-col">
                    <small>Unit features:</small>
                    <span></span>
                  </div>

                  <div className="flex flex-col">
                    <small>Potential move in date:</small>
                    <span></span>
                  </div>                  
              </div>
          </div>

          <div>
              <h2 className="text-2xl font-medium">Financial details</h2>

              <div className="border border-borderGrey rounded-lg p-4 mt-4 flex flex-col gap-6">
                  <div className="flex flex-col">
                    <small>Rental fee at inception:</small>
                    <span></span>
                  </div>

                  <div className="flex flex-col">
                    <small>Subsequent rental fee:</small>
                    <span></span>
                  </div>

                  <div className="flex flex-col">
                    <small>Service charges:</small>
                    <span></span>
                  </div>

                  <div className="flex flex-col">
                    <small>Agreement period:</small>
                    <span></span>
                  </div>
              </div>
          </div>
      </article>
    </article>
  )
}

export default Summary
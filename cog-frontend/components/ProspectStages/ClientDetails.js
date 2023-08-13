import Image from 'next/image'
import React, { Fragment } from 'react'

const ClientDetails = ({ 
    subStage,
    clientType,
    setClientType
}) => {
  return (
    <div>
        {subStage == 1 && <ClientType />}
        {subStage == 2 && <ClientName />}
        {subStage == 3 && <VerificationChecklist />}
        {subStage == 4 && <VerificationUpload />}
    </div>
  )
}

export default ClientDetails

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

const ClientType = () => {
    return (
        <Wrapper 
            header="Client type" 
            subHead="Select client type"
        >
            <div>
                <div className="mb-10">
                    <input type="radio" name="type" className="cursor-pointer mr-2" />
                    <span>Company/organization</span>
                </div>

                <div>
                    <input type="radio" name="type" className="cursor-pointer mr-2" />
                    <span>Individual</span>
                </div>
            </div>
        </Wrapper>
    )
}

const ClientName = () => {
    return (
        <Wrapper 
            header="Client name" 
            subHead="Enter client name"
        >
            <ul className="list-disc ml-6">
                <li>
                    <p className="font-semibold opacity-70">Client name</p>
                    <input 
                        type="text" 
                        placeholder="Enter state"
                        className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
                    />
                </li>
            </ul>
        </Wrapper>
    )
}

const VerificationChecklist = () => {
    const list = ["CAC Incorporation Certificate", "Tax certificate", "Credit report"]
    return (
        <Wrapper 
            header="Verification checklist" 
            subHead="Select identity verification type"
        >
            <div className="grid gap-4">
                {list.map((item, i) => (
                    <div key={i}>
                        <input 
                            type="checkbox" 
                            className="cursor-pointer [&:not(input:checked)]:appearance-none outline-none accent- h-5 w-5 border border-[#B1B1B4] bg-[#E2E4F0] rounded-sm mr-2"
                        />
                        <span>{item}</span>
                    </div>
                ))}
            </div>
        </Wrapper>
    )
}

const VerificationUpload = () => {
    return (
        <Wrapper 
            header="Verification upload" 
            subHead="Upload identity verification selection"
        >
            <input type="file" id="file" className="hidden" />
            <label htmlFor="file" className="border border-dashed border-primary p-4 flex items-center gap-12 cursor-pointer">
                <Image 
                    src="/assets/icons/download-icon.png"
                    alt="Download"
                    width={60}
                    height={60}
                    priority
                />

                <div>
                    <h4 className="uppercase text-lg">Drag file here or <span className="text-primary">browse</span></h4>
                    <p className="my-1 opacity-70">Supported file types: JPG, PNG, PDF</p>
                    <p className="opacity-70">The file size can be up to 20MB</p>
                </div>
            </label>
        </Wrapper>
    )
}
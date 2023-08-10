import React from 'react'
import { FiBell } from 'react-icons/fi'
import Dashboard from '../../../components/Layout/Dashboard'

const AllProspects = () => {
  return (
    <Dashboard>
        <section className="p-8 min-h-full">
            <header className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-semibold">Prospect</h2>
                    <h3 className="text-xl font-semibold opacity-50 mt-4">All Prospect</h3>
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
        </section>
    </Dashboard>
  )
}

export default AllProspects
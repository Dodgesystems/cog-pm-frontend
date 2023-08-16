import topNav_Styles from "../../cog-frontend/src/styles/topNav.module.css"
import { useState } from "react"
import Link from 'next/link'

function TopNav() {
 const [openPopup, setOpenPopup]=useState(false)
    const togglePopupHandler =()=>{
      setOpenPopup(prop => !prop)
    }
    return (
        <div className={topNav_Styles.topBTN}>
                <button className={topNav_Styles.topBTNone}> Home</button>
                

                <button className={topNav_Styles.topBTNone}  onClick={togglePopupHandler} > Applications</button>
                {
                  openPopup && <div className="absolute left-[520px] top-[163px] bg-white border-[#62909F] border-[1px] text-[15px]" >
                  <Link href="/Table">
                      <span className="flex p-2 gap-x-2 hover:bg-[#D2F4FF] cursor-pointer whitespace-no-wrap" >
                       Sent Applications
                      </span>
                  </Link>

                  <Link href="/Table">
                      <span className="flex p-2 gap-x-2 hover:bg-[#D2F4FF] cursor-pointer whitespace-no-wrap" >
                        Offers
                      </span>
                  </Link>
                  <Link href="/Table">
                      <span className="flex p-2 gap-x-2 hover:bg-[#D2F4FF] cursor-pointer whitespace-no-wrap" >
                       Agreement
                      </span>
                  </Link>
              </div>
                }



                <button className={topNav_Styles.topBTNone}> Payments</button>
                <button className={topNav_Styles.topBTNone}> Documents</button>
        </div>
    )
}
export default TopNav
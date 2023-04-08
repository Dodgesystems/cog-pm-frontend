import React from "react";



export default function AllList({ showData, setShowData, handleClick,  handleClicks,  handleClickss}) {
  <>
   <button handleClick={handleClick}>handleClick</button>
   {/* <button handleClicks={handleClicks}}>handleClicks</button>
   <button handleClickss={handleClickss}>handleClickss</button> */}
  {showData ? (
    <p>Here is the data that should be displayed when the button is clicked.
      rrrrwrwrwrwwtwtwywyw
      gdggdggdgdgdggdgdgggdgdgd hhhfhfjdjud
      dfdfdgd hhddhdhdhdn  fsgshsjnf
      cvbnjyf gdgdgdhhdyd qeewwwiow
      fsfrwtwyueioee bgfhfuewopwks njd
    </p>
    ) : (
    <p>No data to display yet.</p>
    )}  
  </>
}



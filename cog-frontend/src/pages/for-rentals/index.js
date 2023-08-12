
import Layout from "../../../components/Layout/Layout";
import Property from "../porpertysearch"
import { useState } from "react";
// import Image from 'next/image'
import BR_styles  from "../../styles/renters.module.css"

import TopNav from "../../../components/topNav";
// import styles
import PD from "../../styles/propertyDetails.module.css"
import Link from "next/link";
import { useEffect } from "react";

const index = () => {

  return(
      <Layout  title='home'>
          <main>
             <div>
                 <Property />

             </div> 
             </main>
      </Layout>
  );
}






export default index
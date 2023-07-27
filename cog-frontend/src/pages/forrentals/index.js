import Image from "next/image";
// import juli from '../../public/assets/images/image 11.png'
import juli from '../../../public/assets/images/image 11.png'

import Layout from "../../../components/Layout/Layout";
import Property from "../porpertysearch"

const index = () => {
  return(
      <Layout  title='home'>
          <main>
            <Property />
          </main>


      </Layout>



  )
}

export default index
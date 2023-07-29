import Image from "next/image";
import Hero from '../../public/assets/images/image 8.png'
import Odu from '../../public/assets/images/image 32.png'
import left from '../../public/assets/icons/fi_arrow-right-circle.svg'
import right from '../../public/assets/icons/fi_arrow-right-circle.png'
import Card from '@/pages/card'
import { AiFillLinkedin,AiFillInstagram,AiOutlineTwitter,AiFillStar } from 'react-icons/ai' 
import {AiOutlineHeart} from 'react-icons/ai'

const propertylister = () => {
  return (
    <div>
        <h1 className="font-bold  text-xl ml-8  mt-8">
            Property lister page
        </h1>
           
            <div className="flex flex-col  border border-black hero top_g mt-16">
              <div className="">
             <Image src={Hero} alt="Managers Image" className="heroo" />
              </div>

              <div  className="grid grid-cols-4 p-4">

                <div className="ml-6" >
                  <Image src={Odu} />
                </div>
      
                <div  className="col-span-2 p-1 ">
                  <div className="flex flex-col">
                    <div>
                      <p>Biodun Odeleye & Co</p>
                    </div>
                    <div className="mt-3">
                      <p>We provide the best houses for client who wants the best</p>
                    </div>
                    <div className="flex gap-10 mt-3">
                    <AiFillInstagram /> <AiFillLinkedin />  <AiOutlineTwitter />
                    </div>
                  </div>
                </div>
                <div className="ml-32">
                <AiOutlineHeart/> 
                </div>

              </div>
              <div className="flex justify-between mt-4">
                <div className="ml-10 font-bold">Featured properties </div>
                <div className="flex">
                  <Image src={left} />
                  <Image src={right} />
                </div>
              </div>
          <div  className="x-factor heey flex ">
            <Card /> <Card /> <Card /> <Card /> <Card /> <Card />
            
          </div>
          <div className="flex justify-between mt-10">
                <div className="ml-10 font-bold">Available properties </div>
                <div className="flex">
                  <Image src={left} />
                  <Image src={right} />
                </div>
              </div>
                                                
              <div  className="x-factor heey flex ">
            <Card /> <Card /> <Card /> <Card /> <Card /> <Card />
            
          </div>

                                       
               </div>

              



            
    </div>
  )
}

export default propertylister
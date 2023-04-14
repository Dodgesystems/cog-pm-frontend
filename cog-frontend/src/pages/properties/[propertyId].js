import Link from "next/link";
import Image from "next/image";
import foward from "../../../public/assets/icons/foward.png";
import backward from "../../../public/assets/icons/backward.png";
const Property = ({ property }) => {
  return (
    <section className="w-3/4 m-auto border border-managerColor   my-4">
      <div className="flex justify-between  relative ">
        <div className="pl-8">
          {property.location[0].city}
          <p>{property.location[0].address}</p>
        </div>
        <div className="text-xs absolute bottom-0 left-1/3 ">
          {" "}
          Listed By :{" "}
          <Link href="#" className="text-primary underline font-bold">
            {property.owner}
          </Link>
        </div>
        <div className="absolute bottom-0 left-3/4 ml-28 ">
          <button className="bg-primary items-center py-2 px-6 rounded text-xs   text-white ">
            Apply Now
          </button>
        </div>
      </div>
      <hr className="mt-4" />
      <main className="flex justify-between mt-4 pl-8">
        <div>
          <Image
            src={`/assets/images/${property.image}`}
            width={200}
            height={800}
            alt="property-Image"
          />
          <div className="flex  justify-center mt-4">
            <div className="flex items-center bg-lightGrey p-2 cursor-pointer  rounded hover:bg-primary h-1/2 my-auto">
              <Image
                src={backward}
                alt="backward-icon"
                width="auto"
                height="auto"
              />
            </div>
            <div className="items-center flex p-4 border-rounded">
              <Image
                src={`/assets/images/${property.image}`}
                width={50}
                height={60}
                alt="Property Image"
              />
            </div>
            <div className="items-center flex p-4 border-rounded">
              <Image
                src={`/assets/images/${property.image}`}
                width={50}
                height={60}
                alt="Property Image"
              />
            </div>
            <div className="flex items-center bg-lightGrey p-2 cursor-pointer  rounded hover:bg-primary h-1/2 my-auto">
              <Image
                src={foward}
                alt="foward-icon"
                width="auto"
                height="auto"
              />
            </div>
          </div>
        </div>
        <div className="w-3/4">
          <p>Listing Details</p>
          <section className="flex justify-between">
            <div className="border pl-8 pr-40 bg-cardColor">
              <div className="mb-8 mt-2">
                <p className="mb-4">Rent</p>
                <p>{property.rent}</p>
              </div>
              <div className="mb-12">
                <p>Available Date</p>
                <p>{property.availableDate}</p>
              </div>
            </div>
            <div className="border border-managerColor w-2/5 h-max mr-8 pl-4">
              <p className="pt-4">Application Fee</p>
              <p className="pt-2 pb-14 ">{property.applicationFee}</p>
            </div>
          </section>
        </div>
      </main>
    </section>
  );
};

export default Property;

export async function getStaticPaths() {
  const response = await fetch("http://localhost:4000/properties");
  const data = await response.json();

  const paths = data.map((property) => {
    return {
      params: {
        propertyId: `${property.id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // console.log(context);

  const { params } = context;
  const response = await fetch(
    `http://localhost:4000/properties/${params.propertyId}`
  );
  const data = await response.json();

  return {
    props: {
      property: data,
    },
  };
}

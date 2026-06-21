import Link from "next/link";

const DestinationCard = ({data}) => {
  return (
    <div className="h-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {data?.map((destination) => (
        <div
          key={destination._id}
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl "
        >
          <img
            src={destination.imageUrl}
            alt={destination.name}
            className="w-full h-56 object-cover"
          />


          <div className="p-5">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold text-black">
              {destination.destinationName}
            </h2>

            <h1 className="text-red-600 font-bold">${destination.price}</h1>
          </div>


            <p className="text-sm text-black mt-1">
              📍 {destination.country}
            </p>

                    <p className="text-gray-600 mt-3 leading-relaxed">
            {destination.description?.slice(0, 30)}
            {destination.description?.length > 30 && (
                <span className="text-orange-500 font-medium hover:underline cursor-pointer">
                {" "}Read More...
                </span>
            )}
            </p>

           <Link  href={`http://localhost:3000/destination/${destination._id}`} >
                        <button className="mt-4 w-full bg-blue-500 text-white trancate py-2 rounded-lg hover:bg-blue-600 transition">
              View Details
            </button>
           </Link>

          </div>
        </div>
      ))}
    </div>
  );
};


export default DestinationCard;
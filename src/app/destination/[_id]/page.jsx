import { MapPin, CalendarDays, Star, Check } from "lucide-react";
import Link from "next/link";

const DesnitationDetailsPage = async({params}) => {
   
    const { _id } = await params

    const res = await fetch(`http://localhost:8000/destination/${_id}`)
    const destination = await res.json()
    console.log(destination)

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">

        <div className="flex justify-between items-center mb-6">
        <Link href="/destination">
              <button className="text-gray-500 hover:text-black">
                    ← Back to Destinations
                </button>
        </Link>


  <div className="flex gap-3">
    <button className="border px-4 py-2 rounded-md hover:bg-gray-100">
      ✏️ Edit
    </button>

    <button className="border border-red-500 text-red-500 px-4 py-2 rounded-md hover:bg-red-50">
      🗑 Cancel
    </button>
  </div>
</div>
      
      {/* Banner Image */}
      <div className="relative w-full h-[250px] md:h-[450px] rounded-xl overflow-hidden">
            <img
        src={destination.imageUrl}
        alt="Paris"
        className="w-full h-[500px] "
        />
      </div>

      {/* Content */}
      <div className="grid lg:grid-cols-3 gap-8 mt-8">
        
        {/* Left Side */}
        <div className="lg:col-span-2">
          
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <MapPin size={16} />
            <span>{destination.country}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mt-2">
            {destination.destinationName}
          </h1>

          <div className="flex flex-wrap items-center gap-4 mt-4 text-gray-600">
            <div className="flex items-center gap-1">
              <Star
                size={16}
                className="fill-yellow-400 text-yellow-400"
              />
              <span>4.9 (234 Reviews)</span>
            </div>

            <div className="flex items-center gap-1">
              <CalendarDays size={16} />
              <span>{destination.duration}</span>
            </div>
          </div>

          {/* Overview */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-3">
              Overview
            </h2>

            <p className="text-gray-600 leading-8">
              {destination.description}
            </p>
          </div>

          {/* Highlights */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">
              Highlights
            </h2>

            <p className="text-gray-600 mb-6">
              Experience the beauty and culture of{" "}
              {destination.destinationName}.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Check className="text-green-500" size={18} />
                Luxury accommodation
              </div>

              <div className="flex items-center gap-2">
                <Check className="text-green-500" size={18} />
                Local guided tours
              </div>

              <div className="flex items-center gap-2">
                <Check className="text-green-500" size={18} />
                Traditional cuisine experience
              </div>

              <div className="flex items-center gap-2">
                <Check className="text-green-500" size={18} />
                Scenic photography spots
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Card */}
        <div>
          <div className="border rounded-xl p-6 shadow-sm sticky top-5">
            
            <div>
              <p className="text-sm text-gray-500">
                Starting from
              </p>

              <h3 className="text-4xl font-bold text-cyan-600">
                ${destination.price}
              </h3>

              <p className="text-gray-500 text-sm">
                per person
              </p>
            </div>

            <input
              type="date"
              value={destination.departureDate}
              readOnly
              className="w-full border mt-6 p-3 rounded-md"
            />

            <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-md mt-5 transition">
              Book Now →
            </button>

            <div className="mt-6 space-y-3 text-sm text-gray-600">
              <p>✓ Free cancellation up to 7 days</p>
              <p>✓ Travel insurance included</p>
              <p>✓ 24/7 customer support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default DesnitationDetailsPage;
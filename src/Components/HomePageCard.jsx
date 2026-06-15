import { Button } from "@heroui/react";
import { FaArrowRight } from "react-icons/fa";
const HomePageCard = () => {
    return (


     <section className=" w-full md:w-12/13 mt-4 mx-auto flex  items-center justify-between">
      <div className="p-5 ">
        <h2 className="text-2xl md:text-5xl font-bold text-black">
          Featured Destinations
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Handpicked travel experiences for the adventure seekers
        </p>
      </div>

    <div  className="flex justify-center items-center">
     <Button 
      variant="primary" 
      className="px-6 py-3 font-bold text-white transition-all rounded-xl"
    >
       View Destination  <FaArrowRight size={18} />
      </Button>
    </div>

    </section>


    );
};

export default HomePageCard;
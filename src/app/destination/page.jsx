import DestinationCard from "@/Components/DestinationCard";

const DestinationPage = async () => {
  const res = await fetch("http://localhost:8000/destination");

  const data = await res.json();

  console.log("get all data in Destination page", data);

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="mt-6 text-center font-bold text-blue-500 text-3xl">
        ALL DESTINATION
      </h1>

      <DestinationCard data={data} />
    </div>
  );
};

export default DestinationPage;
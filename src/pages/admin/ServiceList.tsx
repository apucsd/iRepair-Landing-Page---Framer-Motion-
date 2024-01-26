import { getServiceList } from "@/api/admin/service.api";
import { useQuery } from "@tanstack/react-query";

type TServices = {
  _id: string;
  name: string;
};
const ServiceList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: getServiceList,
  });

  if (isLoading) {
    return (
      <div className="text-5xl text-blue-600 font-bold text-center flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  }
  console.log(data);
  return (
    <div>
      {data.data.map((service: TServices) => (
        <h1 key={service._id}>{service.name}</h1>
      ))}
    </div>
  );
};

export default ServiceList;
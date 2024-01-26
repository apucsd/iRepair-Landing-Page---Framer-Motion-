import { useQuery } from "@tanstack/react-query";
import { getServiceList } from "./service.api";

export const useGetServices = () => {
  const servicesData = useQuery({
    queryKey: ["services"],
    queryFn: getServiceList,
    select: (data) => {
      // console.log(data.data.data);
      const services = data?.data?.data?.map((item) => ({
        id: item._id,
        name: item.name,
        description: item.description,
        price: item.price,
      }));
      return services;
    },
  });
  return servicesData;
};

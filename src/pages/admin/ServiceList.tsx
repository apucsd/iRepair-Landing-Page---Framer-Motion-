import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import Container from "@/components/ui/Container";
import { useGetServices } from "@/api/admin/service.hook";
type TService = {
  id: string;
  name: string;
  price: string;
  description: string;
};
const ServiceList = () => {
  const { data: services, isLoading, isError } = useGetServices();

  console.log(services);
  if (isLoading) {
    return (
      <div className="text-5xl text-blue-600 font-bold text-center flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-5xl text-blue-600 font-bold text-center flex justify-center items-center min-h-screen">
        Something went wrong
      </div>
    );
  }

  return (
    <Container className="mt-20 border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services.map((service: TService) => (
            <TableRow key={service.id}>
              <TableCell className="font-medium">{service.name}</TableCell>
              <TableCell>{service.description}</TableCell>
              <TableCell>{service.price}</TableCell>
              <TableCell className="text-right">
                <Button variant={"destructive"} className="p-2">
                  <Trash2></Trash2>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total Items</TableCell>
            <TableCell className="text-right">{services.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </Container>
  );
};

export default ServiceList;

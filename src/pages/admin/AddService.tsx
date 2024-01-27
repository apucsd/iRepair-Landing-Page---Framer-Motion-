import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import Select from "react-select";
type TService = {
  name: string;
  description: string;
  price: number;
  devices: string[];
};
const AddService = () => {
  const queryClient = useQueryClient();
  const { isError, isSuccess, mutateAsync } = useMutation<
    void,
    Error,
    TService
  >({
    mutationFn: async (data) => {
      await fetch(`http://localhost:5000/api/v1/services`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      // Since we don't have a specific response to return, use void
      return;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["services"] });
    },
  });
  const { handleSubmit, setValue, register } = useForm<TService>();

  const onSubmit: SubmitHandler<TService> = async (data) => {
    await mutateAsync(data);
    console.log(data);
  };

  console.log({ isError, isSuccess });
  const options = [
    { value: "laptop", label: "Laptop" },
    { value: "computer", label: "Computer" },
    { value: "harddisk", label: "Harddisk" },
    { value: "virus", label: "Virus" },
  ];
  return (
    <div className="bg-white border rounded-lg px-8 py-6 mx-auto my-8 max-w-2xl">
      <h2 className="text-4xl font-semibold mb-4">ADD PRODUCT</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Name
          </label>
          <input
            {...register("name")}
            type="text"
            id="name"
            name="name"
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-gray-700 font-medium mb-2"
          >
            Price
          </label>
          <input
            {...register("price")}
            type="number"
            id="price"
            name="price"
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-medium mb-2"
          >
            Description
          </label>
          <textarea
            {...register("description")}
            id="description"
            name="description"
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="devices"
            className="block text-gray-700 font-medium mb-2"
          >
            Devices
          </label>
          <input type="hidden" {...register("devices")} />{" "}
          {/* Hidden input for React Hook Form */}
          <Select
            options={options}
            onChange={(selectedOptions) => {
              setValue(
                "devices",
                selectedOptions.map((option) => option.value)
              );
            }}
            isMulti
          />
        </div>

        <div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default AddService;

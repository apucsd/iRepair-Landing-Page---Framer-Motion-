import BatteryReplaceMent from "@/components/servicesTiles/BatteryReplaceMent";
import ChipReplaceMent from "@/components/servicesTiles/ChipReplaceMent";
import DataRecovery from "@/components/servicesTiles/DataRecovery";
import StorageReplaceMent from "@/components/servicesTiles/StorageReplaceMent";
import Container from "@/components/ui/Container";

const Services = () => {
  return (
    <Container className=" my-20">
      <div>
        <div className="text-center py-10">
          <h1 className="text-6xl font-semibold">
            <span className="text-[#00E0B0]">Services</span> that we provide.
          </h1>
          <p className="max-w-[80ch] mx-auto my-5">
            We provide various computer repair services and solutions for our
            new and regular customers. Feel free to find out more below.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-[20px] ">
          <BatteryReplaceMent></BatteryReplaceMent>
          <ChipReplaceMent></ChipReplaceMent>
          <DataRecovery></DataRecovery>

          <StorageReplaceMent></StorageReplaceMent>
          <div className="bg-[#F2F2F2] rounded-md h-[448px] col-span-4 p-5">
            <h1 className="text-[80px] font-semibold">
              Same Day <span className="text-[#00E0B0]">Delivery</span>
            </h1>
          </div>
          <div className="bg-[#F2F2F2] rounded-md h-[448px] col-span-4 p-5">
            <h1 className="text-[80px] font-semibold">
              <span className="text-[#00E0B0]">Free</span>
              <br />
              <span className="">
                Diagno
                <br />
                stics
              </span>
            </h1>
          </div>
          <div className="bg-[#F2F2F2] rounded-md h-[448px] col-span-4 p-5">
            <h1 className="text-[80px] font-semibold textr">
              Remote
              <br />
              <span className="text-[#00E0B0]">Support</span>
              <br />
              Service
            </h1>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Services;

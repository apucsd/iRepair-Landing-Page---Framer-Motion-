import { Button } from "@/components/ui/button";
import macbook from "../../assets/macbook-exposed 1.png";
const HeroSection = () => {
  return (
    <div className="grid lg:grid-cols-2 place-items-center h-screen">
      <div className="space-y-2 ">
        <h1 className="text-5xl lg:text-7xl text-nowrap  text-[#9A9A9A] font-bold">
          Don't worry.
        </h1>
        <h1 className="text-4xl md:text-6xl font-bold text-nowrap ">
          We'll fix it.
        </h1>
        <p className="text-[#9A9A9A] max-w-[50ch]">
          Welcome to <span className="text-black font-semibold">iRepair</span>,
          your one-stop place for all kinds of{" "}
          <span className="text-black font-semibold">Macbook repairs</span> and
          diagnostics.
        </p>
        <Button>Book a service</Button>
      </div>
      <div className="">
        <img className="w-full h-full object-contain" src={macbook} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;

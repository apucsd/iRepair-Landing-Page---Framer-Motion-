import useScale from "@/hooks/useScale";
import { motion } from "framer-motion";
const DataRecovery = () => {
  const { scaleValues, componentRef } = useScale();
  return (
    <motion.div
      ref={componentRef}
      style={{
        scale: scaleValues,
        opacity: scaleValues,
      }}
      className=" bg-[#F2F2F2] rounded-md h-[448px] col-span-12 lg:col-span-7 p-5"
    >
      <h3 className="text-[30px] font-semibold">Data Recovery</h3>
      <h2 className="text-[36px] mt-[60px]">
        Lost your old memories ? Lost your project? Don’t worry, We will recover
        it for you
      </h2>
    </motion.div>
  );
};

export default DataRecovery;

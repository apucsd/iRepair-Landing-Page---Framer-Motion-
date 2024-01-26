import useScale from "@/hooks/useScale";
import { motion } from "framer-motion";

const BatteryReplaceMent = () => {
  const { componentRef, scaleValues } = useScale();

  return (
    <motion.div
      ref={componentRef}
      style={{
        scale: scaleValues,
        opacity: scaleValues,
      }}
      className=" bg-[#F2F2F2] bg-right bg-[url('https://s3-alpha-sig.figma.com/img/d502/d9e1/69682f98ff69237f72fa58d551cc1fd3?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=afmwheDPh3Fp-fHGO4FRcthwveA67uQCIUya9oYU6UngoiqT7sOOEFiuZDEyBAujBzLFPMLxFseUmaUYbNFuuMgpQYKYbA9rIbvGKM-OfpuNxtZ6br86-wjkBz6z8AGYmgagezwz-nQzRvGuF7RuXaN6fUkFiYOQbsg96p02aSNCSGAnt3lFBFFGVuoOoormjxOKqvdfiQFCxX9sS0RJRlBWt0adLEvEdh9OrXKtet9Li6wpiv2pmTcPlHgxwIJa11hVMcl6CbSmZqp4-gG5JED5UvR9~ZSl6c80Z9LBagM2I7-OFGBcdVK-b9sEfBUqZ1h3nzxbz738Uu-S1lP6VA__')] bg-contain  bg-no-repeat rounded-md h-[448px] col-span-12 p-5"
    >
      <h3 className="text-[30px] font-semibold">Battery Replacemant</h3>
      <h2 className="text-[36px] mt-[60px] w-[60%]">
        Get back to 100% battery health. With 6 month replacement warranty.
      </h2>
    </motion.div>
  );
};

export default BatteryReplaceMent;

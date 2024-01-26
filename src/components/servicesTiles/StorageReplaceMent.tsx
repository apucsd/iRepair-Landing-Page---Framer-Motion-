import useScale from "@/hooks/useScale";
import { motion } from "framer-motion";
const StorageReplaceMent = () => {
  const { scaleValues, componentRef } = useScale();

  return (
    <motion.div
      ref={componentRef}
      style={{
        scale: scaleValues,
        opacity: scaleValues,
      }}
      className=" bg-[#F2F2F2] bg-right bg-[url('https://s3-alpha-sig.figma.com/img/1c23/8595/8ceed715abd6e6df0fd9859eb4bc479f?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AtAlGj2HDaY~3LmwXVnYhyYgmKa~6lBoWRCKVl4hpUbBXwIMsUPiYeUlJnPQ7Rdbvtgx6X~HzC2K3MZ6g1dGVix4NIRuNScauuNHZ5LyjR0IVSCFv8TkXcgB71B~6jHdur~VVvEL8sga7Fu8vqiduHCHIALLWdwLlimaFxzyJkoxsOPs6HOUZJOBWS9gPVJwHLz1CLoKVbD~VNpzhDtZ7TO4FlFz6K2NLnrt5nMBzHdiCQrxn618SkhqCX7nvQOwz0YSZ-g7Nn8ycSz45HQOkULe5wTy8k7X68dk8FGWJ3bWQ9AjF5-HTw2Xh4uMU7I1Llu3bkrHkRtcsJIOfjgWlg__')] bg-contain  bg-no-repeat rounded-md h-[448px] col-span-12 p-5"
    >
      <h3 className="text-[30px] font-semibold">Storage Replacement</h3>
      <h2 className="text-[36px] mt-[60px] w-[60%]">
        Get rid of your slow HDD, upgrade to super fast SSD with ease
      </h2>
    </motion.div>
  );
};

export default StorageReplaceMent;

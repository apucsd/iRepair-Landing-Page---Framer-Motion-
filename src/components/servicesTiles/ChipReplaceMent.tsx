import useScale from "@/hooks/useScale";
import { motion } from "framer-motion";
const ChipReplaceMent = () => {
  const { scaleValues, componentRef } = useScale();
  return (
    <motion.div
      ref={componentRef}
      style={{
        scale: scaleValues,
        opacity: scaleValues,
      }}
      className="bg-[url('https://s3-alpha-sig.figma.com/img/d4d0/92f4/6c626cfd878c31fa247eb3ca1807a5c9?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UUZ0VGfu17CP-BgjC1yswvuatJa5Iq5tfGcgq3xlifLK28S~WqJ-8PKSg2cWDtiruv7P2Do8tdmgiSBL~s2NrMoiQwEAksVu3QDL2HHOSo4HjamPspIsvBT0hSZt9BPsqVaeN0oXfVgzbsLXbIkbhQoIoS1qJSUW46uz6V7z2heIzibb5KIxrmTmodK4SPFWHFkdl-YDKmGAXcJtudhgV5pBLfAOVKoEarutfUtHJWJmoSBPcwvIljgUaiDLFZqJJ2ieYSVoyer-5psM1NANdink3r8UvjWFvRS4m7-se1oF5sGQqcUeqGZLpSL-aTV1plyknt9B1UuXn1mSy4uzfA__')] bg-cover bg-blend-overlay bg-[#d4d5db] bg-no-repeat bg-center rounded-md h-[448px] col-span-12 lg:col-span-5 p-5"
    >
      <h3 className="text-[30px] font-semibold">Chip Replacement </h3>
      <h2 className="text-[36px] mt-[60px]">
        There is no need to replace the motherboard for a tiny little dead chip
        set.
      </h2>
    </motion.div>
  );
};

export default ChipReplaceMent;

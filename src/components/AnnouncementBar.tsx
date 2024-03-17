import { motion } from "framer-motion";
import { transition1 } from "../transitions";

const AnnouncementBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ ...transition1, duration: 0.7 }}
      className="w-full z-10 flex justify-center items-center py-1 font-medium bg-gray-500 text-white"
    >
      <p className="text-sm lg:text-lg">
        Introducing FedNow — sign up for early access
      </p>
    </motion.div>
  );
};

export default AnnouncementBar;

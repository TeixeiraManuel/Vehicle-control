import { motion } from "framer-motion";
import { useState } from "react";
import { CarStateInformation } from "../components/carStateInformation";
import { Search } from "lucide-react";
import { Map } from "../components/map";
export function Monitoring() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleCarStateClick = (index: number) => {
    setSelectedIndex(index);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="px-12"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl font-medium text-gray-700 mb-12"
      >
        Monitoring
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-row items-start justify-between w-full gap-8"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-md w-96 py-4 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-200 hover:scrollbar-thumb-blue-500 h-[44rem] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:rounded-full"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex text-gray-700 justify-between gap-2 bg-gray-100 m-6 w-80 rounded-md p-2"
          >
            <input
              className=" bg-gray-100 outline-none border-none flex-1"
              type="search"
              placeholder="Search"
              name=""
              id=""
            />
            <Search className="cursor-pointer" />
          </motion.div>
          <div>
            {[
              { title: "Toyota gxr", description: true },
              { title: "Toyota gxr", description: false },
              { title: "Toyota gxr", description: true },
              { title: "Toyota gxr", description: true },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                onClick={() => handleCarStateClick(index)}
              >
                <CarStateInformation
                  title={item.title}
                  description={item.description}
                  className={`${selectedIndex === index ? "bg-blue-600" : ""}`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-3/4"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-3xl font-medium text-gray-700 mb-6 text-center"
          >
            Maps
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="w-full p-2 flex-1 bg-white h-[38rem]"
          >
            <Map />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="shadow-[0_3px_8px_rgba(0,0,0,0.24)] p-4 space-y-6"
            >
              <div className="flex justify-between items-center ">
                <p className="text-green-500">Toyota gxr</p>
                <p>
                  longitude:<span className=" text-gray-700"> 999</span>
                </p>
                <p>
                  gasóleo <span className=" text-gray-700"> 20l</span>
                </p>
              </div>
              <div className="flex items-center w-full ">
                <div className="flex items-center w-full justify-between">
                  <p>
                    longitude:<span className="text-gray-700">999</span>
                  </p>
                  <div className="flex items-center justify-center flex-1">
                    <p>
                      gasóleo <span className="text-gray-700"> 20l</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

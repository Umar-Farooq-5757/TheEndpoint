import { Zap } from "lucide-react";

const Logo = ({padding}) => {
  return (
    <div className={`logo bg-gradient-to-br from-[#2758fa] to-[#4c3ff7] text-white rounded-md w-fit flex justify-center items-center p-${padding} shadow-lg`}>
      <Zap />
    </div>
  );
};

export default Logo;

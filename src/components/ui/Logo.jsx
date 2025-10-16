import { Zap } from "lucide-react";

const Logo = ({ padding, size }) => {
  return (
    <div
      style={{ padding }}
      className={`logo bg-gradient-to-br from-[#2758fa] to-[#4c3ff7] text-white rounded-md flex justify-center items-center shadow-lg`}
    >
      <Zap style={{ height: size, width: size }} />
    </div>
  );
};

export default Logo;

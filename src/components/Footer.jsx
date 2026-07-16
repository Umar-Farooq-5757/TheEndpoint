import React from "react";

const Footer = ({ resData,isDark }) => {
  return (
    <footer
      className={`w-full ${isDark?'bg-[#272727]':'bg-white'} absolute ${
        Object.keys(resData).length ? "-bottom-[70px]" : "-bottom-[137px] sm:-bottom-[186px] md:-bottom-[190px]"
      } right-0 left-0 text-center py-2 border border-gray-300`}
    >
      Made with ❤️ by Umar Farooq
    </footer>
  );
};

export default Footer;

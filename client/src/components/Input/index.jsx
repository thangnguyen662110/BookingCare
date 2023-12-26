import PropTypes from "prop-types";

function Input({ className, ...props }) {
  return <input {...props} type="text" className={`pl-[8px] outline-none border-[1px] focus:shadow-[0_0_0_1px_rgba(52,146,158,.76)] border-primary-400 rounded-[2px] shadow-[0_1px_2px_0_rgba(0,0,0,0.1)] w-full h-8 box-border  pr-9 pt-0 pb-0 text-[14px] bg-transparent dark:text-white text-primary-700 placeholder:text-primary-100 ${className && className}`} />;
}

Input.propTypes = {
  className: PropTypes.string,
};

export default Input;

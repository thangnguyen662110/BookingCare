import PropTypes from "prop-types";
import { memo } from "react";
import Icon from "../Icon/Icon";
import Image from "../Image/Image";
import Title from "../Title/Title";
function Button({ className, classButton, background, border, classIcon, active, icon, classTitle, title, size, customSize, disabled, classImg, src, srcDark, srcSet, srcSetDark, alt, onClick, iconPosition, srcPosition, titlePosition, fontBold, fontMedium, xxxl, xxl, xl, large, medium, small, nowrap }) {
  return (
    <button
      className={`${background ? (disabled ? "" : "bg-primary-50 hover:bg-primary-100 duration-200 text-white w-full") : ""} ${border ? (disabled ? "" : "border border-primary-200 text-primary-300 duration-200 w-full ") : ""} ${disabled ? "opacity-70 cursor-not-allowed bg-[#d9d9d9]" : ""} flex items-center transition ${className ? className : "w-full"}`}
      type="button"
      disabled={disabled}
      onClick={onClick}
    >
      <div className={`flex items-center w-full ${classButton ? classButton : title ? "justify-start" : "item-center flex-grow justify-center ml-2 mr-2 gap-2"}`}>
        {srcPosition === "before" && src && <Image className={classImg} src={src} srcDark={srcDark} srcSet={srcSet} srcSetDark={srcSetDark} alt={alt} />}
        {titlePosition === "before" && <Title title={title} className={classTitle} fontBold={fontBold} fontMedium={fontMedium} xxxl={xxxl} xxl={xxl} xl={xl} large={large} medium={medium} small={small} nowrap={nowrap} />}
        {iconPosition !== "right" && icon && <Icon classIcon={classIcon} icon={icon} customSize={customSize} size={size} />}
        <div className={`${iconPosition !== "right" ? "" : "flex-1"}`}>
          {srcPosition !== "before" && src && <Image className={classImg} src={src} srcDark={srcDark} srcSet={srcSet} srcSetDark={srcSetDark} alt={alt} />}
          {titlePosition !== "before" && title && <Title title={title} className={classTitle} fontBold={fontBold} fontMedium={fontMedium} xxxl={xxxl} xxl={xxl} xl={xl} large={large} medium={medium} small={small} nowrap={nowrap} />}
        </div>
        {active && iconPosition === "right" && icon && <Icon classIcon={classIcon} icon={icon} customSize={customSize} size={size} />}
      </div>
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  background: PropTypes.bool,
  border: PropTypes.bool,
  classIcon: PropTypes.string,
  icon: PropTypes.elementType,
  classTitle: PropTypes.string,
  classButton: PropTypes.string,
  title: PropTypes.string,
  size: PropTypes.number,
  customSize: PropTypes.number,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  classImg: PropTypes.string,
  src: PropTypes.string,
  srcDark: PropTypes.string,
  srcSet: PropTypes.string,
  srcSetDark: PropTypes.string,
  alt: PropTypes.string,
  iconPosition: PropTypes.oneOf(["before", "right"]),
  srcPosition: PropTypes.oneOf(["before", "right"]),
  titlePosition: PropTypes.oneOf(["before", "right"]),
  fontBold: PropTypes.bool,
  fontMedium: PropTypes.bool,
  xxxl: PropTypes.bool,
  xxl: PropTypes.bool,
  xl: PropTypes.bool,
  large: PropTypes.bool,
  medium: PropTypes.bool,
  small: PropTypes.bool,
  nowrap: PropTypes.bool,
};

export default memo(Button);

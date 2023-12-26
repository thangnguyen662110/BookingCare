import Tippy from "@tippyjs/react";
import TippyHeadless from "@tippyjs/react/headless";
import PropTypes from "prop-types";

function ToolTip({ typeToolTip = "Tippy", interactive, delay, content, items, width, onClickOutside, isVisible, placement, className, classHeadless, children, ...props }) {
  const ToolTipTippy = () => (
    <Tippy delay={delay} content={content} arrow={true} className={`${!className ? "duration-300 rounded-md pt-1 pb-1 pl-2 pr-2 text-[15px] font-medium" : className}`} placement={placement} {...props}>
      {children}
    </Tippy>
  );

  const renderItems = () => (
    <div className={`${classHeadless ? classHeadless : "flex flex-col w-full h-full mx-auto rounded-md bg-white"}`} style={{ width: width, height: "auto" }}>
      {items}
    </div>
  );

  const ToolTipTippyHeadless = () => (
    <TippyHeadless onClickOutside={onClickOutside} interactive={interactive} visible={isVisible} render={renderItems} placement={placement}>
      {children}
    </TippyHeadless>
  );

  return <>{typeToolTip === "Tippy" ? <ToolTipTippy /> : <ToolTipTippyHeadless />}</>;
}

ToolTip.propTypes = {
  delay: PropTypes.arrayOf(PropTypes.number),
  interactive: PropTypes.bool,
  content: PropTypes.node,
  placement: PropTypes.string,
  className: PropTypes.string,
  classHeadless: PropTypes.string,
  children: PropTypes.node.isRequired,
  typeToolTip: PropTypes.oneOf(["Tippy", "TippyHeadless"]),
  items: PropTypes.object,
  isVisible: PropTypes.bool,
  onClickOutside: PropTypes.func,
  width: PropTypes.number,
};

export default ToolTip;

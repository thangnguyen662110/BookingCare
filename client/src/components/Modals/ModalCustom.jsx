import PropTypes from "prop-types";
import { useCallback, useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../Buttons/Button";

const ModalCustomScreen = ({ isOpen, disabled, classContent, left = false, right = false, classClose, classBody, body, classFooter, footer, onClose, zIndex, icon }) => {
  const modalsRef = useRef(null);

  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    const handleMouseDown = (event) => {
      if (!modalsRef.current) {
        return;
      }
      if (!modalsRef.current.contains(event.target)) {
        handleClose();
      }
    };
    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  if (!isOpen) {
    return;
  }

  return (
    <div
      className={`
  flex
  items-center
  justify-center
  fixed
  outline-none
  overflow-x-hidden
  overflow-y-hidden
  scroll-smooth
  inset-0
  bg-black/50
  m-0
  ${zIndex}
  no-scrollbar
`}
    >
      <div
        className={`
    relative
    w-full
    my-0
    mx-0
    h-full
    `}
        style={{ width: "100%" }}
      >
        <div
          className={`
      ${left && "-translate-x-full"}
      ${right && "translate-x-0"}
      duration-700
      sm:duration-1000
      h-full
      relative
      ${left ? (showModal ? "translate-x-0" : "-translate-x-full opacity-20") : left}
      ${right ? (showModal ? "translate-x-0" : "translate-x-full opacity-20") : right}
      `}
        >
          {/* Content */}
          <div className={`relative w-full h-full overflow-x-hidden overflow-y-auto no-scrollbar ${classContent && classContent}`}>
            <div className={`absolute border-box bg-white dark:bg-primary-600 shadow-[0_0_14px_rgba(10,10,10,0.5)] ${classBody && classBody}`} ref={modalsRef}>
              <div className="flex flex-col gap-2">
                {icon && (
                  <div className={`${classClose && classClose}`}>
                    <Button icon={AiOutlineClose} onClick={handleClose} className="text-primary-200 rounded-full p-2 hover:bg-gray-50 duration-200" classButton="mr-0 ml-0" size={18} />
                  </div>
                )}
                {body}
              </div>
            </div>

            {footer && <div className={`flex w-full gap-2 sm:hidden fixed bg-white dark:bg-primary-600 left-0 bottom-0 pb-2 pt-2 pl-3 pr-3 z-[99] border-t dark:border-primary-500 ${classFooter && classFooter}`}>{footer}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

ModalCustomScreen.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  body: PropTypes.node.isRequired,
  footer: PropTypes.node,
  onClose: PropTypes.func.isRequired,
  classContent: PropTypes.string,
  classBody: PropTypes.string,
  classFooter: PropTypes.string,
  left: PropTypes.string,
  right: PropTypes.string,
  icon: PropTypes.bool,
  zIndex: PropTypes.string,
};

export default ModalCustomScreen;

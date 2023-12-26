import useRegisterMenuModal from "../../../hooks/Navbar/Menu/useRegisterMenuModal";
import ModalCustomScreen from "../ModalCustom";

function MenuModal({ ...props }) {
  const { isOpen, onClose } = useRegisterMenuModal();
  return <ModalCustomScreen isOpen={isOpen} onClose={onClose} {...props} zIndex="z-[999]" />;
}

export default MenuModal;

import ModalCustomScreen from "../ModalCustom";
import useRegisterLoginModal from "../../../hooks/Navbar/Login/useRegisterLoginModal";

function LoginModal({ ...props }) {
  const { isOpen, onClose } = useRegisterLoginModal();
  return <ModalCustomScreen isOpen={isOpen} onClose={onClose} zIndex="z-[999] " {...props} />;
}

export default LoginModal;

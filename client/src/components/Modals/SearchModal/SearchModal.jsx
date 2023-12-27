import ModalCustomScreen from "../ModalCustom";
import useRegisterSearchModal from "../../../hooks/Search/useRegisterSearchModal";

function SearchModal({ ...props }) {
  const { isOpen, onClose } = useRegisterSearchModal();
  return <ModalCustomScreen isOpen={isOpen} onClose={onClose} zIndex="z-[999]" {...props} />;
}

export default SearchModal;

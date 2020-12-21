//specific Modal imports
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
// combiner
import { LOGIN_MODAL, SIGNUP_MODAL } from './modaltypes';

const MODAL_COMPONENTS = {
  LOGIN_MODAL: LoginModal,
  SIGNUP_MODAL: SignupModal
};

const ModalRootContainer = (props) => {
  if (!props.modalType) {
    return null;
  }

  // if model is set in store
  const SpecificModal = MODAL_COMPONENTS{props.modalType};
  // render modal
  return <SpecificModal />;
};

const mapStateToProps = state => {
  return {
    modalType: state.modal.modalType
  };
};

ModalRootContainer = connect(mapStateToProps)(ModalRootContainer);

export default ModalRootContainer;
import * as React from "react";

import Modal from "./Modal";
import Button from "./Button";
import {
  modalContainer,
  buttonsContainer,
  iconCloseClassName,
  flexCenter
} from "./styles/PopUp.styles";
import { PopUpProps } from "./typings/PopUp";

const PopUp: React.FunctionComponent<PopUpProps> = props => {
  const {
    onClose,
    onApprove,
    onReject,
    visible,
    approveButtonText = "Yes",
    rejectButtonText = "No",
    children
  } = props;
  return (
    <Modal visible={visible} modalStyles={flexCenter}>
      <div css={modalContainer}>
        {onClose && (
          <i css={["pi", "pi-close", iconCloseClassName]} onClick={onClose} />
        )}
        {children}
        {(onReject || onApprove) && (
          <div css={buttonsContainer}>
            {onReject && (
              <Button size="large" type="secondary" onClick={onReject}>
                {rejectButtonText}
              </Button>
            )}
            {onApprove && (
              <Button size="large" type="primary" onClick={onApprove}>
                {approveButtonText}
              </Button>
            )}
          </div>
        )}
      </div>
    </Modal>
  );
};

export default PopUp;

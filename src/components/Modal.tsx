import React from 'react';
import { Modal as FlowbiteModal, Button } from 'flowbite-react';

interface Props {
  isShown?: boolean
  title?: string
  children?: React.ReactNode
  onClose?: () => void
}

function Modal ({ isShown, title, children, onClose }: Props): JSX.Element {
  return (
    <FlowbiteModal onClose={onClose} show={isShown}>
      <FlowbiteModal.Header>{title}</FlowbiteModal.Header>
      <FlowbiteModal.Body>{children}</FlowbiteModal.Body>
      <FlowbiteModal.Footer>
        <Button onClick={onClose}>Close</Button>
      </FlowbiteModal.Footer>
    </FlowbiteModal>
  );
}

export default Modal;

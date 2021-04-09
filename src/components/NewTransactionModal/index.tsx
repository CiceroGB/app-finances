import { Container } from "./styles";
import Modal from "react-modal";

Modal.setAppElement('root');

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}


export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

    return (
        <Container>
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
            >
                <h2>Cadastar transação</h2>
            </Modal>

        </Container>

    )


}
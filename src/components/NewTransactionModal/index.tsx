import Modal from "react-modal";
import { Container, TrasactionsTypeContainer, RadioBox } from "./style";
import ImgClose from "../../assets/close.svg";
import incomeImg from '../../assets/income.svg'
import outComeImg from '../../assets/outcome.svg'
import { useState } from "react";

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};
export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {

    const [ type, setType ] = useState('depoist')
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={ImgClose} alt="Fechar Modal" />
      </button>

      <Container>
        <h2>Cadastrar transação</h2>
        <input placeholder="Título" />
        <input type="number" placeholder="Valor" />
        <TrasactionsTypeContainer>
          <RadioBox type="button" isActive={type === 'deposit'} onClick={() => { setType('deposit'); }}>
              <img src={incomeImg} alt="Entrada" /> <span>Entrada</span> 
          </RadioBox>
          <RadioBox type="button"  isActive={type === 'withdraw'} onClick={() => { setType('withdraw'); }}>
              <img src={outComeImg} alt="Saída" /><span>Saída</span>
          </RadioBox>
        </TrasactionsTypeContainer>
        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}

import Modal from "react-modal";
import { Container, TrasactionsTypeContainer, RadioBox } from "./style";
import ImgClose from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outComeImg from "../../assets/outcome.svg";
import { FormEvent, useState } from "react";
import { api } from "../../services/api";

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};
export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState("depoist");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");
  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    const data = {
      title, 
      value, 
      type, 
      category
    }
    api.post('transactions', data).then(response => console.log(response))
  }
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

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input placeholder="Título"  value={title} onChange={event => setTitle(event.target.value)}/>
        <input type="number" placeholder="Valor" value={value} onChange={event => setValue(Number(event.target.value))}/>
        <TrasactionsTypeContainer>
          <RadioBox
            type="button"
            isActive={type === "deposit"}
            onClick={() => {
            setType("deposit");
            }}
          >
            <img src={incomeImg} alt="Entrada" /> <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            isActive={type === "withdraw"}
            onClick={() => {
            setType("withdraw");
            }}
          >
            <img src={outComeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TrasactionsTypeContainer>
        <input placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)}/>

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}

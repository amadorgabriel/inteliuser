import { useEffect, useRef, useState } from "react";
import { FlatButton, IconButton } from "../../components/Button";
import { Input, Select } from "../../components/Input";
import { Header } from "../../components/Header";
import { Form } from "../../components/Form";
import { Modal } from "../../components/Modal";
import { useInput } from "../../hooks/useInput";
import { Client } from "../../types";
import { getAge } from "../../utils/age";

import plusIcon from "../../assets/icons/plus.svg";
import trashIcon from "../../assets/icons/trash-2.svg";
import editIcon from "../../assets/icons/edit-2.svg";

import "../../styles/pages/dashboard.css";
import { HtmlToastElement, Toast } from "../../components/Toast";

interface FormattedClient extends Omit<Client, "birthDate" | "sex"> {
  age: number;
  formattedBirthDate: string;
  formattedSex: string;
}

export function Dashboard() {
  const [clients, setClients] = useState<Client[]>([]);
  const [addModalIsOpened, setAddModalIsOpened] = useState(false);
  const [confirmModalIsOpened, setConfirmModalIsOpened] = useState(false);
  const [clientToBeDeleted, setClientToBeDeleted] = useState<Client>({} as Client);
  
  const name = useInput("");
  const email = useInput("");
  const sex = useInput("");
  const birthDate = useInput("");

  const toastRef = useRef<HtmlToastElement>(null);

  useEffect(() => {
    function loadUsers() {
      const storagedClients = localStorage.getItem("@Inteliuser:clients");

      if (storagedClients) {
        setClients(JSON.parse(storagedClients));
        return;
      }

      return;
    }

    loadUsers();
  }, []);

  function formatClients(clients: Client[]): FormattedClient[] {
    const formattedClients = clients.map(client => {
      const formattedClient: FormattedClient = {
        id: client.id,
        name: client.name,
        email: client.email,
        age: getAge(new Date(client.birthDate)),
        formattedBirthDate: new Intl.DateTimeFormat("pt-br").format(
          new Date(client.birthDate)
        ),
        formattedSex:
          client.sex === "M"
            ? "Masculino"
            : client.sex === "F"
            ? "Feminino"
            : client.sex === "N/A"
            ? "Prefiro não Declarar"
            : "Outro",
      };

      return formattedClient;
    });

    return formattedClients;
  }

  function handleAddNewClient() {
    const incrementalId =
      clients.length === 0 ? 0 : clients[clients.length - 1].id + 1;

    const client: Client = {
      id: incrementalId,
      name: name.value,
      email: email.value,
      sex: sex.value,
      birthDate: new Date(`${birthDate.value} EDT`), //EDT ajusts timezone
    };

    const newClients = [...clients, client];

    setClients(newClients);
    localStorage.setItem("@Inteliuser:clients", JSON.stringify(newClients));

    setAddModalIsOpened(!addModalIsOpened);

    if (toastRef.current) {
      toastRef.current.showToast("Usuário cadastrado com sucesso", "sucess");
    }

    email.setInput("");
    name.setInput("");
    sex.setInput("");
    birthDate.setInput("");
  }

  function handleDeleteClient(id: number) {
    const clientsArray = [...clients];

    const newClients = clientsArray.filter(client => client.id !== id);

    setClients(newClients);
    localStorage.setItem("@Inteliuser:clients", JSON.stringify(newClients));

    if (toastRef.current) {
      toastRef.current.showToast("Usuário deletado com sucesso", "sucess");
    }

    setConfirmModalIsOpened(!confirmModalIsOpened)
  }

  function handleConfirmModal(clientId: number) {
    const clientsArr = [...clients]
    const client = clientsArr.filter(client => client.id === clientId)[0];

    setClientToBeDeleted(client)

    setConfirmModalIsOpened(!confirmModalIsOpened)
  }

  const formattedClients = formatClients(clients);

  return (
    <div className="dashboardContainer">
      <Header />

      <div className="dashboardContent">
        <div className="header">
          <h1>Dashboard</h1>

          <IconButton
            edge="start"
            label="Novo Usuario"
            type="button"
            onClick={() => setAddModalIsOpened(!addModalIsOpened)}
          >
            <img src={plusIcon} alt="Adicionar" />
          </IconButton>
        </div>

        {clients.length !== 0 ? (
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Nascimento</th>
                <th>Idade</th>
                <th>Sexo</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {formattedClients.map(client => (
                <tr key={client.id}>
                  <td>{client.id}</td>
                  <td>{client.name}</td>
                  <td>{client.email}</td>
                  <td>{client.formattedBirthDate}</td>
                  <td>{client.age} Anos</td>
                  <td>{client.formattedSex}</td>
                  <td>
                    <IconButton
                      type="button"
                      variant="no-background"
                      color="tertiary"
                    >
                      <img src={editIcon} alt="Editar" />
                    </IconButton>

                    <IconButton
                      type="button"
                      variant="no-background"
                      color="secondary"
                      onClick={() => handleConfirmModal(client.id)}
                    >
                      <img src={trashIcon} alt="Excluir" />
                    </IconButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="no-content">
            <p>Não há nenhum usuário na base de dados</p>
          </div>
        )}
      </div>

      <Toast ref={toastRef} />
      <Modal id="modal-add" isActive={addModalIsOpened}>
        <h2>Adicionar</h2>

        <Form noValidate onSubmit={handleAddNewClient}>
          <Input placeholder="Digite aqui.." label="Nome:" required {...name} />

          <Input
            placeholder="Digite aqui.."
            type="email"
            label="Email:"
            required
            {...email}
          />

          <Input
            placeholder="Digite aqui.."
            type="date"
            label="Data de Nascimento:"
            required
            {...birthDate}
          />

          <Select label="Sexo" required {...sex}>
            <option value="" disabled>
              Selecione o sexo
            </option>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
            <option value="Outro">Outro</option>
            <option value="N/A">Prefiro não declarar</option>
          </Select>

          <div className="modal-buttons">
            <FlatButton
              label="Salvar alterações"
              type="submit"
              variant="outlined"
              color="primary"
            />

            <FlatButton
              label="Esquecer"
              type="button"
              variant="outlined"
              color="tertiary"
              onClick={() => setAddModalIsOpened(!addModalIsOpened)}
            />
          </div>
        </Form>
      </Modal>
      <Modal id="modal-confirm" isActive={confirmModalIsOpened}>
        <div className="header">
          <p>Você tem certeza que quer excluir o usuário com email abaixo?</p>
          <p>{clientToBeDeleted.email}</p>
        </div>

        <div className="modal-buttons">
          <FlatButton
            label="Sim, exclua o usuário"
            type="submit"
            variant="outlined"
            color="secondary"
            onClick={() => handleDeleteClient(clientToBeDeleted.id)}
          />

          <FlatButton
            label="Cancelar"
            type="button"
            variant="outlined"
            color="tertiary"
            onClick={() => setConfirmModalIsOpened(!confirmModalIsOpened)}
          />
        </div>
      </Modal>
    </div>
  );
}

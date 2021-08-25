import { useEffect, useRef, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { ToastMessage } from "../../types";
import { Form } from "../../components/Form";
import { Modal } from "../../components/Modal";
import { Input } from "../../components/Input/index";
import { FlatButton } from "../../components/Button/Flat";
import { HtmlToastElement, Toast } from "../../components/Toast";

import { isAuth } from "../../utils/isAuth";
import { useInput } from "../../hooks/useInput";

import "../../styles/pages/sign.css";

export function SigIn() {
  const email = useInput("");
  const password = useInput("");

  const [confirmModalIsOpened, setConfirmModalIsOpened] = useState(false);
  const toastRef = useRef<HtmlToastElement>(null);

  const { state } = useLocation<ToastMessage>();
  const history = useHistory();

  useEffect(() => {
    const isAuthenticated = isAuth();

    if (isAuthenticated) {
      setTimeout(() => {
        setConfirmModalIsOpened(true);
      }, 1500);
      return;
    }
  }, [setConfirmModalIsOpened]);

  
  useEffect(() => {
    if (state?.message && state?.type) {
      toastRef.current!.showToast(state.message, state.type);
      history.replace({state: {}})
    }


  }, [history, state]);
  
  const handleLogin = () => {
    const user = {
      email: email.value,
      password: password.value,
    };

    if (email.value === "admin@gmail.com" && password.value === "123456") {
      localStorage.setItem("@Inteliuser:user-logged", JSON.stringify(user));

      history.push("/dashboard", {message: "Logado com sucesso", type: "sucess" });
      return;
    }

    toastRef.current!.showToast(
      "Verifique se os dados estão corretos",
      "warning"
    );
  };

  return (
    <div className="signInContainer">
      <section className="background-side">
        <div>
          <h1 className="display-title">
            Inteli<span>user</span>
          </h1>
          <p>Gerencie seus usuários de forma rápida, simples e eficaz.</p>
        </div>
      </section>

      <section className="action-side">
        <div>
          <div>
            <h2>Faça o seu login</h2>
            <p>Entre na plataforma com suas credenciais!</p>
          </div>

          <Form noValidate onSubmit={handleLogin}>
            <Input
              placeholder="Digite seu email"
              type="email"
              label="Email:"
              required
              {...email}
            />

            <Input
              placeholder="Digite sua senha"
              type="password"
              label="Senha:"
              minLength={3}
              required
              {...password}
            />

            <FlatButton label="Login" type="submit" />
          </Form>
        </div>
      </section>

      <Toast ref={toastRef} />
      <Modal id="modal-confirm" isActive={confirmModalIsOpened}>
        <div className="header">
          <p>
            Você já esta logado em uma outra conta, deseja acessar o painel de
            controle?
          </p>
        </div>

        <div className="modal-buttons">
          <FlatButton
            label="Sim, me leve ao painel"
            type="submit"
            variant="outlined"
            color="primary"
            onClick={() => {
              history.push("/dashboard");
              setConfirmModalIsOpened(false);
            }}
          />

          <FlatButton
            label="Não, quero ficar"
            type="button"
            variant="outlined"
            color="tertiary"
            onClick={() => {
              setConfirmModalIsOpened(false);
            }}
          />
        </div>
      </Modal>
    </div>
  );
}

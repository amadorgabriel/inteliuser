import { FlatButton } from "../../components/Button/Flat";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { useInput } from "../../hooks/useInput";

import "../../styles/pages/sign.css";

export function SigIn() {
  const email = useInput("");
  const password = useInput("");

  const handleForm = () => {};

  return (
    <div className="container">
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

          <Form noValidate onSubmit={handleForm}>
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

          <p>
            Não possui cadastro? <a href="#">Crie uma conta!</a>
          </p>
        </div>
      </section>
    </div>
  );
}

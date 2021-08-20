import "../../styles/pages/sign.css";

export function SignUp() {

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
            <h2>Faça o seu Cadastro</h2>
            <p>Nos fale um pouco sobre você e nós criaremos um acesso especial.</p>
          </div>

          <form>
            <input placeholder="Email" type="email" required />
            <input placeholder="Senha" type="password" required />
            <input placeholder="Data" type="text" required />
            <button type="submit">Login</button>
          </form>

          <p>
            Não possui cadastro? <a href="#">Crie uma conta!</a>
          </p>
        </div>
      </section>
    </div>
  );
}

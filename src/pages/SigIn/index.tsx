import "../../styles/pages/sign.css";

export function SigIn() {
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

          <form>
            <input placeholder="Email" type="email" required />
            <input placeholder="Senha" type="password" required />
      
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

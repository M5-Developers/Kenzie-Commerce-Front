import MainHeader from "../../styles/headers"

const HeaderUnsigned = () => {
  return (
    <MainHeader className="main_header">
        <h1>🛒Kenzie Commerce</h1>
        <p>Sua loja favorita!</p>
        <nav>
            <button>Cadastre-se</button>
            <button>Login</button>
            <button>Ver Produtos</button>
        </nav>
    </MainHeader>
  )
}

export default HeaderUnsigned
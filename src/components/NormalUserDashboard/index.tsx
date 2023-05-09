import MainHeader from "../../styles/headers"

const NormalUserDashboard = () => {
  return (
    <MainHeader className="main_header">
        <nav>
            <button>Minha Conta</button>
            <button>Meus Pedidos</button>
            <button>Loja</button>
        </nav>
    </MainHeader>
  )
}

export default NormalUserDashboard
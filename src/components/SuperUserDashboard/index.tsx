import MainHeader from "../../styles/headers"

const SuperUserDashboard = () => {
  return (
    <MainHeader className="main_header">
        <nav>
            <button>Painel Administrativo</button>
            <button>Minha Conta</button>
            <button>Meus Pedidos</button>
            <button>Loja</button>
        </nav>
    </MainHeader>
  )
}

export default SuperUserDashboard
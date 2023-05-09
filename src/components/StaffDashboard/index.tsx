import MainHeader from "../../styles/headers"

const StaffDashboard = () => {
  return (
    <MainHeader className="main_header">
        <nav>
            <button>Minha Conta</button>
            <button>Meus Produtos</button>
            <button>Meus Pedidos</button>
            <button>Loja</button>
        </nav>
    </MainHeader>
  )
}

export default StaffDashboard
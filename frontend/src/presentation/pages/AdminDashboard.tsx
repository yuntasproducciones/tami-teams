import Header from "../components/AdminDashboard/Header";
import Sidebar from "../components/AdminDashboard/Sidebar";
import MainTable from "./admin-pages/MainTable";

const AdminDashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Header ocupando todo el ancho */}
      <Header />

      {/* Contenedor principal con Sidebar abajo y DataTable a la derecha */}
      <div className="flex flex-1">
        <Sidebar/>
        <div className="flex-1 p-4">
          <MainTable />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

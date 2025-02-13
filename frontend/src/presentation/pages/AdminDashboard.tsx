import Header from "../components/AdminDashboard/Header";
import Sidebar from "../components/AdminDashboard/Sidebar";
import DataTable from "../components/AdminDashboard/DataTable";

const AdminDashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Header ocupando todo el ancho */}
      <Header />

      {/* Contenedor principal con Sidebar abajo y DataTable a la derecha */}
      <div className="flex flex-1">
        <Sidebar/>
        <div className="flex-1 p-4">
          <DataTable />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

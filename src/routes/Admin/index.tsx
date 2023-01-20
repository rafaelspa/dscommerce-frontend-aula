import HeaderAdmin from "../../components/HeaderAdmin";
import { Outlet } from "react-router";

export default function Admin() {
  return (
    <>
      <HeaderAdmin />
      <Outlet />
    </>
  );
}

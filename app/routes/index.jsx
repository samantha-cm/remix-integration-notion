import { Outlet } from "remix";

export default () => {
  return (
    <div>
      <h1>Hola mundo</h1>
      <Outlet />
    </div>
  );
};

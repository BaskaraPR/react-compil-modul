import { Route, Routes } from "react-router-dom";
import {
  Cart,
  Gallery,
  Home,
  Kontak,
  Pegawai,
  TentangSaya,
} from "../pages";

const Router = () => (
  <Routes>
    <Route exact path="/" Component={Home} />
    <Route path="/tentangsaya" Component={TentangSaya} />
    <Route path="/kontak" Component={Kontak} />
    <Route path="/gallery" Component={Gallery} />
    <Route path="/cart" Component={Cart} />
    <Route path="/pegawai" Component={Pegawai} />
  </Routes>
);

export default Router;

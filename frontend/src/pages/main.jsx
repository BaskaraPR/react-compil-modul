import { Route, Routes } from "react-router-dom";

import Home from "./home";
import Karya from "./karya";
import Gallery from "./gallery";
import Kontak from "./contact";
import TentangSaya from "./aboutme";
import Cart from "./cart";
import Pegawai from "./pegawai";

const Main = () => (
  <Routes>
    <Route exact path="/" Component={Home} />
    <Route path="/tentangsaya" Component={TentangSaya} />
    <Route path="/karya" Component={Karya} />
    <Route path="/kontak" Component={Kontak} />
    <Route path="/gallery" Component={Gallery} />
    <Route path="/cart" Component={Cart} />
    <Route path="/pegawai" Component={Pegawai} />
  </Routes>
);

export default Main;

import { RouterModule, Routes } from "@angular/router";
import { InicioComponent } from "./components/inicio/inicio.component";
import { NosotrosComponent } from "./components/nosotros/nosotros.component";
import { ContactoComponent } from "./components/contacto/contacto.component";
import { AplicacionesWebComponent } from "./components/aplicaciones-web/aplicaciones-web.component";
import { AplicacionesMovilesComponent } from "./components/aplicaciones-moviles/aplicaciones-moviles.component";
import { SitiosWebComponent } from "./components/sitios-web/sitios-web.component";
import { TiendasOnlineComponent } from "./components/tiendas-online/tiendas-online.component";
import { BlogComponent } from "./components/blog/blog.component";
import { ArticuloComponent } from "./components/articulo/articulo.component";
import { BusquedaComponent } from "./components/busqueda/busqueda.component";
import { UsuariosComponent } from "./components/usuarios/usuarios.component";
import { CrearUsuarioComponent } from "./components/crear-usuario/crear-usuario.component";
import { CrearArticuloComponent } from "./components/crear-articulo/crear-articulo.component";
import { CursosComponent } from "./components/cursos/cursos.component";
import { CategoriaArticuloComponent } from "./components/categoria-articulo/categoria-articulo.component";
import { TiendaComponent } from "./components/tienda/tienda.component";
import { CategoriaProductoComponent } from "./components/categoria-producto/categoria-producto.component";
import { DetalleProductoComponent } from "./components/detalle-producto/detalle-producto.component";
import { CrearProductoComponent } from "./components/crear-producto/crear-producto.component";
import { ProductosComponent } from "./components/productos/productos.component";
import { EditarUsuarioComponent } from "./components/editar-usuario/editar-usuario.component";
import { ArticulosComponent } from "./components/articulos/articulos.component";
import { EditarProductoComponent } from "./components/editar-producto/editar-producto.component";
import { EditarArticuloComponent } from "./components/editar-articulo/editar-articulo.component";
import { TicketsComponent } from "./components/tickets/tickets.component";
import { DetalleTicketComponent } from "./components/detalle-ticket/detalle-ticket.component";
import { BusquedaProductoComponent } from "./components/busqueda-producto/busqueda-producto.component";

const APP_ROUTES: Routes = [
  // PAGINAS PUBLICAS
  { path: "inicio", component: InicioComponent },
  { path: "nosotros", component: NosotrosComponent },
  { path: "cursos", component: CursosComponent },
  { path: "contacto", component: ContactoComponent },
  // SERVICIOS
  { path: "aplicaciones-web", component: AplicacionesWebComponent },
  { path: "aplicaciones-moviles", component: AplicacionesMovilesComponent },
  { path: "sitios-web", component: SitiosWebComponent },
  { path: "tiendas-online", component: TiendasOnlineComponent },
  // BLOG
  { path: "blog", component: BlogComponent },
  { path: "blog/articulo/:id", component: ArticuloComponent },
  { path: "blog/categoria/:categoria", component: CategoriaArticuloComponent },
  { path: "blog/busqueda/:busqueda", component: BusquedaComponent },
  { path: "blog/crear-articulo", component: CrearArticuloComponent },
  // TIENDA
  { path: "tienda", component: TiendaComponent },
  {
    path: "tienda/categorias/:categoria",
    component: CategoriaProductoComponent
  },
  { path: "tienda/producto/:id", component: DetalleProductoComponent },
  { path: "tienda/busqueda/:busqueda", component: BusquedaProductoComponent },

  // GESTIÓN USUARIOS
  { path: "usuarios", component: UsuariosComponent },
  { path: "crear-usuario", component: CrearUsuarioComponent },
  { path: "editar-usuario", component: EditarUsuarioComponent },
  // GESTIÓN PRODUCTOS
  { path: "productos", component: ProductosComponent },
  { path: "crear-producto", component: CrearProductoComponent },
  { path: "editar-producto", component: EditarProductoComponent },
  // GESTIÓN ARTICULOS
  { path: "articulos", component: ArticulosComponent },
  { path: "crear-articulo", component: CrearArticuloComponent },
  { path: "editar-articulo", component: EditarArticuloComponent },
  // GESTIÓN TICKETS
  { path: "tickets", component: TicketsComponent },
  { path: "ticket/:id", component: DetalleTicketComponent },
  // DEFAULT
  { path: "**", pathMatch: "full", redirectTo: "/inicio" }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {
  scrollPositionRestoration: "enabled",
  useHash: true
});

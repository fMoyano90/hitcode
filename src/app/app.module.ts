import { BrowserModule } from "@angular/platform-browser";
import { LOCALE_ID, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

// Animation
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// Configuración para Chile
import { registerLocaleData } from "@angular/common";
import localeEsCl from "@angular/common/locales/es-CL";
registerLocaleData(localeEsCl, "es-Cl");

// RUTAS
import { APP_ROUTING } from "./app.routes";
import { AppRoutingModule } from "./app-routing.module";

// COMPONENTES
import { AppComponent } from "./app.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { FooterComponent } from "./components/shared/footer/footer.component";
import { NosotrosComponent } from "./components/nosotros/nosotros.component";
import { AplicacionesWebComponent } from "./components/aplicaciones-web/aplicaciones-web.component";
import { AplicacionesMovilesComponent } from "./components/aplicaciones-moviles/aplicaciones-moviles.component";
import { SitiosWebComponent } from "./components/sitios-web/sitios-web.component";
import { TiendasOnlineComponent } from "./components/tiendas-online/tiendas-online.component";
import { BlogComponent } from "./components/blog/blog.component";
import { ArticuloComponent } from "./components/articulo/articulo.component";
import { BusquedaComponent } from "./components/busqueda/busqueda.component";
import { ContactoComponent } from "./components/contacto/contacto.component";
import { CursosComponent } from "./components/cursos/cursos.component";
import { CrearUsuarioComponent } from "./components/crear-usuario/crear-usuario.component";
import { LoginComponent } from "./components/login/login.component";
import { CrearArticuloComponent } from "./components/crear-articulo/crear-articulo.component";
import { UsuariosComponent } from "./components/usuarios/usuarios.component";
import { CrearProductoComponent } from "./components/crear-producto/crear-producto.component";
import { DetalleProductoComponent } from "./components/detalle-producto/detalle-producto.component";
import { CategoriaProductoComponent } from "./components/categoria-producto/categoria-producto.component";
import { TiendaComponent } from "./components/tienda/tienda.component";
import { CategoriaArticuloComponent } from "./components/categoria-articulo/categoria-articulo.component";
import { ProductosComponent } from './components/productos/productos.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { EditarArticuloComponent } from './components/editar-articulo/editar-articulo.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { DetalleTicketComponent } from './components/detalle-ticket/detalle-ticket.component';
import { BusquedaProductoComponent } from './components/busqueda-producto/busqueda-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    FooterComponent,
    NosotrosComponent,
    AplicacionesWebComponent,
    AplicacionesMovilesComponent,
    SitiosWebComponent,
    TiendasOnlineComponent,
    BlogComponent,
    ArticuloComponent,
    BusquedaComponent,
    ContactoComponent,
    CursosComponent,
    CrearUsuarioComponent,
    LoginComponent,
    CrearArticuloComponent,
    UsuariosComponent,
    CrearProductoComponent,
    DetalleProductoComponent,
    CategoriaProductoComponent,
    TiendaComponent,
    CategoriaArticuloComponent,
    ProductosComponent,
    EditarUsuarioComponent,
    EditarProductoComponent,
    ArticulosComponent,
    EditarArticuloComponent,
    TicketsComponent,
    DetalleTicketComponent,
    BusquedaProductoComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "es-Cl" }],
  bootstrap: [AppComponent]
})
export class AppModule {}

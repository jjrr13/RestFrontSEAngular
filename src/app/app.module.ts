import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignInComponent } from './components/usuarios/sing-in/sing-in.component';
import { TipoLogistica }  from './models/tipo_logistica';


import { ClientesComponent } from './components/clientes/clientes.component';
import { FormComponent } from './components/clientes/form.component';
import { ClientesDetailsComponent } from './components/clientes/clientes.details.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { FormUsuarioComponent } from './components/usuarios/form.usuario.component';

import { ClienteService } from './services/cliente.service';
import { UsuarioService } from './services/usuario.service';
import { ProductoService } from './services/producto.service';
import { AlmacenService } from './services/almacen.service';
import { EntregaService } from './services/entrega.service';
import { UserService } from './shared/user.service';
import { appRoutes } from './routes';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { FormProductoComponent } from './components/productos/form.producto.component';
import { AlmacenesComponent } from './components/almacenes/almacenes.component';
import { FormAlmacenComponent } from './components/almacenes/form.almacen.component';
import { EntregasComponent } from './components/entregas/entregas.component';
import { FormEntregaComponent } from './components/entregas/form.entrega.component';
import { EntregasDetailsComponent } from './components/entregas/entregas.details.component';
// /*
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './auth/auth.guards';
import { AuthInterceptor } from './auth/auth.interceptor';
// import { SignUpComponent } from './components/usuarios/sing-up/sing-up.component';
//*/


@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent,
    FooterComponent,
    ClientesComponent,
    ClientesDetailsComponent,
    UsuariosComponent,
    FormComponent,
    FormUsuarioComponent,
    SignInComponent,
    HomeComponent,
    ProductosComponent,
    FormProductoComponent,
    AlmacenesComponent,
    FormAlmacenComponent,
    EntregasComponent, 
    FormEntregaComponent,
    EntregasDetailsComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
    // RouterModule.forRoot(routesInner)
    /*
    ToastrModule.forRoot(),
    //*/
  ],
  providers: [
    EntregaService,
    AlmacenService,
    ProductoService,
    ClienteService,
    UsuarioService,
    UserService
    ///*
    ,
    AuthGuard,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    }
    //*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
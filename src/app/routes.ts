import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guards';
import { ClientesComponent } from './components/clientes/clientes.component';
import { FormComponent } from './components/clientes/form.component';
import { ClientesDetailsComponent } from './components/clientes/clientes.details.component';
//import { SignUpComponent } from './components/usuarios/sing-up/sing-up.component';
import { SignInComponent } from './components/usuarios/sing-in/sing-in.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { FormUsuarioComponent } from './components/usuarios/form.usuario.component';
import { ProductosComponent } from './components/productos/productos.component';
import { FormProductoComponent } from './components/productos/form.producto.component';
import { AlmacenesComponent } from './components/almacenes/almacenes.component';
import { FormAlmacenComponent } from './components/almacenes/form.almacen.component';
import { EntregasComponent } from './components/entregas/entregas.component';
import { FormEntregaComponent } from './components/entregas/form.entrega.component';
import { EntregasDetailsComponent } from './components/entregas/entregas.details.component';

export const appRoutes: Routes = [
    /*{ path: 'home', component: HomeComponent, canActivate:[AuthGuard] },
    {
        path: 'signup', component: SignInComponent,
        //children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: SignInComponent,
        //children: [{ path: '', component: SignInComponent }]
    },
    { path : '', redirectTo:'/login', pathMatch : 'full'}
    */

    //{path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: SignInComponent},
    {path: 'home', component: HomeComponent, canActivate:[AuthGuard] },
    {path: 'clientes', component: ClientesComponent},
    {path: 'clientes/form', component: FormComponent},
    {path: 'clientes/form/:id', component: FormComponent},
    {path: 'clientes/details/:id', component: ClientesDetailsComponent},
    {path: 'usuarios', component: UsuariosComponent},
    {path: 'usuarios/form', component: FormUsuarioComponent},
    {path: 'usuarios/form/:id', component: FormUsuarioComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'productos/form', component: FormProductoComponent},
    {path: 'productos/form/:id', component: FormProductoComponent},
    {path: 'almacenes', component: AlmacenesComponent},
    {path: 'almacenes/form', component: FormAlmacenComponent},
    {path: 'almacenes/form/:id', component: FormAlmacenComponent},
    {path: 'entregas', component: EntregasComponent},
    {path: 'entregas/form', component: FormEntregaComponent},
    {path: 'entregas/form/:id', component: FormEntregaComponent},
    {path: 'entregas/details/:id', component: EntregasDetailsComponent},
    
];
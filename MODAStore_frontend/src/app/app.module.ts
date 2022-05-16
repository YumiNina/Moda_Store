import { RouterModule, Routes } from '@angular/router';
import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterPipe1 } from './pipes Categoria/filterCategoria.pipe';
import { FilterPipe2 } from './pipes Precio/filterPrecio.pipe';
import { OrderComponent } from './order/order.component';
import { PipeCardPipe } from './pipe-card/pipe-card.pipe';
import { MainComponent } from './main/main.component';
import { AuthModule } from './modules/auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountInfoComponent } from './component/account/account-info/account-info.component';
import { AccountUpdateComponent } from './component/account/account-update/account-update.component';
import { CardUpdateComponent } from './component/card-update/card-update.component';
import { CardFormComponent } from './component/card/card-form.component';
import { CardComponent } from './component/card/card.component';
import { CartComponent } from './component/cart/cart.component';
import { CatalogueComponent } from './component/catalogue/catalogue.component';
import { CategoriasComponent } from './component/categorias/categorias.component';
import { FormCategoriaComponent } from './component/categorias/form-categoria.component';
import { ClientEditComponent } from './component/client-edit/client-edit.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { ListClientsComponent } from './component/list-clients/list-clients.component';
import { MostBougthComponent } from './component/most-bougth/most-bougth.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { PedidosAdminComponent } from './component/pedidos-admin/pedidos-admin.component';
import { PedidosComponent } from './component/pedidos/pedidos.component';
import { PedirComponent } from './component/pedir/pedir.component';
import { ProbadorVirtualComponent } from './component/probador-virtual/probador-virtual.component';
import { ProductBuyComponent } from './component/product-buy/product-buy.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { FormProductComponent } from './component/products/form-product.component';
import { ProductsComponent } from './component/products/products.component';
import { ProfileClientComponent } from './component/profile-client/profile-client.component';
import { ProfileViewComponent } from './component/profile-view/profile-view.component';
import { ReceiptComponent } from './component/receipt/receipt.component';
import { LessOrderComponent } from './component/reports/less-order/less-order.component';
import { MoreOrderComponent } from './component/reports/more-order/more-order.component';
import { SesionComponent } from './component/sesion/sesion.component';
import { UserAdminUpdateComponent } from './component/user/user-admin-update/user-admin-update.component';
import { UserAdminComponent } from './component/user/user-admin/user-admin.component';
import { UserFormComponent } from './component/user/user-admin/user-form.component';
import { UserLoginComponent } from './component/user/user-login/user-login.component';
import { UserUpdateComponent } from './component/user/user-update/user-update.component';

const routes: Routes = [
  { path: 'sesion', component: SesionComponent  },
  { path: 'cart', component: CartComponent  },
  { path: 'products', component: ProductsComponent  },
  { path: 'pedidos', component: PedidosComponent  },
  { path: 'pedidos-admin', component: PedidosAdminComponent  },

  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'products/form', component: FormProductComponent, pathMatch: 'full' },
  { path: 'products/form/:id', component: FormProductComponent, pathMatch: 'full' },
  { path: 'catalogue', component: CatalogueComponent, pathMatch: 'full' },
  { path: 'product-details', component: ProductDetailsComponent, pathMatch: 'full'},
  { path: 'product-details/:id', component: ProductDetailsComponent, pathMatch: 'full'},
  { path: 'product', component: ProductDetailsComponent, pathMatch: 'full'},
  { path: 'product/:id', component: ProductDetailsComponent, pathMatch: 'full'},
  { path: 'user-update', component: UserUpdateComponent, pathMatch: 'full'},
  { path: 'user-update/:id', component: UserUpdateComponent, pathMatch: 'full'},
  { path: 'user-admin', component: UserAdminComponent, pathMatch: 'full'},
  { path: 'user-admin/user-form', component: UserFormComponent, pathMatch: 'full'},
  { path: 'user-admin/user-form/:id', component: FormProductComponent, pathMatch: 'full' },
  { path: 'list-clients', component: ListClientsComponent, pathMatch: 'full'},
  { path: 'profile-view/:id', component: ProfileViewComponent, pathMatch: 'full'},
  { path: 'user-admin-update', component: UserAdminUpdateComponent, pathMatch: 'full'},
  { path: 'user-admin-update/:id', component: UserAdminUpdateComponent, pathMatch: 'full'},
  { path: 'categorias', component: CategoriasComponent  },
  { path: 'categorias/form', component: FormCategoriaComponent, pathMatch: 'full' },
  { path: 'categorias/form/:id', component: FormCategoriaComponent, pathMatch: 'full' },
  { path: 'order',component: OrderComponent, pathMatch:'full'},
  { path: 'order/:id', component: OrderComponent, pathMatch: 'full'},
  { path: 'cart/:id', component: OrderComponent, pathMatch: 'full'},
  { path: 'profile-client/:id', component: ProfileClientComponent, pathMatch: 'full'},
  { path: 'client-edit/:id', component: ClientEditComponent, pathMatch: 'full'},
  { path: 'user-login', component: UserLoginComponent, pathMatch: 'full'},
  { path: 'card', component: CardComponent, pathMatch: 'full'},
  { path: 'card/:id', component: CardComponent, pathMatch: 'full'},
  { path: 'receipt', component: ReceiptComponent, pathMatch: 'full'},
  {path: 'card/card-form', component: CardFormComponent, pathMatch: 'full'},
  {path: 'card/card-form/:id', component: CardFormComponent, pathMatch: 'full'},
  {path: 'card-update', component: CardUpdateComponent, pathMatch: 'full'},
  {path: 'card-update/:id', component: CardUpdateComponent, pathMatch: 'full'},
  {path: 'probador-virtual', component: ProbadorVirtualComponent, pathMatch: 'full'},
  {path: 'product-buy', component: ProductBuyComponent, pathMatch: 'full'},
  {path: 'most-bougth', component: MostBougthComponent, pathMatch: 'full'},
  { path: 'more-order', component: MoreOrderComponent,pathMatch: 'full'},
  { path: 'less-order', component: LessOrderComponent, pathMatch: 'full'},
  { path: 'pedir',component: PedirComponent, pathMatch:'full'},
  { path: 'pedir/:id', component: PedirComponent, pathMatch: 'full'},
  { path: 'account-info', component: AccountInfoComponent, pathMatch:'full'},
  { path: 'account-info/:id', component: AccountInfoComponent, pathMatch:'full'},
  { path: 'account-update', component: AccountUpdateComponent, pathMatch: 'full'},
  { path: 'account-update/:id', component: AccountUpdateComponent, pathMatch: 'full'},
  { path: '', redirectTo: '/', pathMatch: 'full' },
];


@NgModule({

  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SesionComponent,
    CartComponent,
    ProductsComponent,
    FormProductComponent,
    CatalogueComponent,
    FilterPipe1,
    FilterPipe,
    FilterPipe2,
    ProductDetailsComponent,
    UserAdminComponent,
    UserUpdateComponent,
    UserFormComponent,
    ListClientsComponent,
    ProfileViewComponent,
    UserAdminUpdateComponent,
    CategoriasComponent,
    FormCategoriaComponent,
    OrderComponent,
    ProfileClientComponent,
    ClientEditComponent,
    PedidosComponent,
    PedidosAdminComponent,
    UserLoginComponent,
    CardComponent,
    ReceiptComponent,
    PipeCardPipe,
    MainComponent,
    CardUpdateComponent,
    CardFormComponent,
    ProbadorVirtualComponent,
    ProductBuyComponent,
    MostBougthComponent,
    MoreOrderComponent,
    LessOrderComponent,
    PedirComponent,
    FooterComponent,
    AccountUpdateComponent,
    AccountInfoComponent,
  ],
  imports: [
    ConfirmationPopoverModule.forRoot({
      confirmButtonType:'danger' // set defaults here
      }),
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng5SliderModule,
    NgxPermissionsModule.forRoot(),
    BrowserAnimationsModule,



  ],
  providers: [],
  bootstrap: [AppComponent],


})
export class AppModule { }

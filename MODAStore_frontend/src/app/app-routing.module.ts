import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardUpdateComponent } from './component/card-update/card-update.component';
import { CardFormComponent } from './component/card/card-form.component';
import { CardComponent } from './component/card/card.component';
import { CartComponent } from './component/cart/cart.component';
import { CatalogueComponent } from './component/catalogue/catalogue.component';
import { ClientEditComponent } from './component/client-edit/client-edit.component';
import { PedidosComponent } from './component/pedidos/pedidos.component';
import { PedirComponent } from './component/pedir/pedir.component';
import { ProbadorVirtualComponent } from './component/probador-virtual/probador-virtual.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { FormProductComponent } from './component/products/form-product.component';
import { ProductsComponent } from './component/products/products.component';
import { ProfileClientComponent } from './component/profile-client/profile-client.component';
import { ReceiptComponent } from './component/receipt/receipt.component';
import { SesionComponent } from './component/sesion/sesion.component';
import { UserAdminComponent } from './component/user/user-admin/user-admin.component';
import { UserFormComponent } from './component/user/user-admin/user-form.component';
import { UserUpdateComponent } from './component/user/user-update/user-update.component';



import { AuthModule } from './modules/auth/auth.module';
import { LoginComponent } from './modules/auth/login/login.component';
import { OrderComponent } from './order/order.component';


const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },

  //LOGIN

  {
    path: 'auth',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
 /* {
    path:'auth',
    loadChildren: () =>
    import('@modules/auth/auth.module').then((m) => m.AuthModule)

  },*/

  {  path: 'auth',loadChildren: 'src/app/modules/auth/auth.modules#AuthModule' },
 // { path: 'auth', loadChildren: 'src/app/auth/auth.module#AuthModule' },


  {
    path:'user-login',
    component: UserLoginComponent,
  },
  //SIGN UP
  {
    path:'sesion',
    component: SesionComponent,
  },


  /*USER*/
  //{
   // path: 'user',

   // children: [
      {
        path:'catalogue',
        component: CatalogueComponent,
      },

          {
            path:'catalogue/product-details',
            component: ProductDetailsComponent,
          },

          {
            path:'catalogue/product-details/:id',
            component: ProductDetailsComponent,
          },

          {
            path:'cart',
            component: CartComponent ,
          },
          {
            path:'cart/:id',
            component: CartComponent,
          },

          {
            path:'order',
            component: OrderComponent,
          },
          {
            path:'order/:id',
            component: OrderComponent,
          },

          {
            path:'card',
            component: CardComponent,
          },

          {
            path:'cart/card',
            component: CardComponent,
          },

          {
            path: 'card/card-form',
            component: CardFormComponent,
          },
          {
            path: 'card-update',
            component: CardUpdateComponent,
          },
          {
            path: 'card-update/:id',
            component: CardUpdateComponent,
          },



          {
            path:'user-update',
            component: UserUpdateComponent,
          },
          {
            path:'user-update/:id',
            component: UserUpdateComponent,
          },

          {
            path:'list-clients/client-edit',
            component: ClientEditComponent,
          },
          {
            path:'list-clients/client-edit/:id',
            component: ClientEditComponent,
          },

          {
            path:'pedidos',
            component: PedidosComponent,
          },
          {
            path:'pedir',
            component: PedirComponent
          },
          {
            path:'pedir/id',
            component: PedirComponent
          },

          {
            path:'receipt',
            component: ReceiptComponent,
          },

          {
            path:'probador-virtual',
            component: ProbadorVirtualComponent,
          },
          {
            path: 'profile-client',
            component: ProfileClientComponent,
          },


  //  ],
 // },


  /*ADMIN */
 // {
   // path:'admin',

   // children:[
      {
        path:'products',
        component: ProductsComponent,
      },
      {
        path:'products/form',
        component: FormProductComponent,
      },
      {
        path:'products/form/:id',
        component: FormProductComponent,
      },

      {
        path:'user-admin',
        component: UserAdminComponent,
      },
      {
        path:'user-admin/user-form',
        component: UserFormComponent,
      },
      {
        path:'user-admin/user-form/:id',
        component: UserFormComponent,
      },
      {
        path:'user-admin/user-admin-update',
        component: UserAdminUpdateComponent,
      },
      {
        path:'user-admin/user-admin-update/:id',
        component: UserAdminUpdateComponent,
      },
      {
        path:'user-admin/profile-view',
        component: ProfileViewComponent,
      },
      {
        path:'user-admin/profile-view/:id',
        component: ProfileViewComponent,
      },



      {
        path:'categorias',
        component: CategoriasComponent,
      },
      {
        path:'categorias/form',
        component: FormCategoriaComponent,
      },
      {
        path:'categorias/form/:id',
        component: FormCategoriaComponent,
      },

      {
        path:'list-clients',
        component: ListClientsComponent,
      },
      {
        path:'list-clients/profile-client',
        component: ProfileClientComponent,
      },
      {
        path:'list-clients/profile-client/:id',
        component: ProfileClientComponent,
      },
      {  path: 'receipt',
      component: ReceiptComponent,
      },
      {  path: 'product-buy',
      component: ProductBuyComponent,
      },
      {
        path: 'most-bougth',
        component: MostBougthComponent,
      },
      {
        path:'product-buy/most-bougth',
        component: MostBougthComponent,
      },
      {
        path:'product-buy/most-bougth/:id',
        component: MostBougthComponent,
      },

      {
        path: 'more-order',
        component: MoreOrderComponent
      },
      {
        path: 'more-order/:id',
        component: MoreOrderComponent
      },

      {
        path: 'less-order',
        component: LessOrderComponent
      },
      {
        path: 'less-order/:id',
        component: LessOrderComponent
      },

      { path: 'account-info',
        component: AccountInfoComponent
      },
      { path: 'account-info/:id',
        component: AccountInfoComponent
      },
      { path: 'account-update',
        component: AccountUpdateComponent
      },
      { path: 'account-update/:id',
        component: AccountUpdateComponent
      },




  //  ],
 // },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

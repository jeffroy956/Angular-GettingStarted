import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail.component';
import { ProductGuardService } from './product-guard.service';
import { ProductListComponent } from './product-list.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces-pipe';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: "products/:id", component: ProductDetailComponent, canActivate: [ProductGuardService] },
      { path: "products", component: ProductListComponent},
    ]),//{ useHash: true}  if we can't figure out how to configure mvc controller routes to work with SPA
    SharedModule, 
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe
  ],
  providers: [ ProductGuardService ]
})
export class ProductModule { }

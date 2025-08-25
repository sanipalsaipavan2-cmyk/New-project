import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { BlogComponent } from './blog/blog.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { TemplateformsComponent } from './templateforms/templateforms.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"Home",component:HomeComponent},
  {path:"About",component:AboutComponent},
  {path:"Services",component:ServicesComponent},
  {path:"Blog",component:BlogComponent},
  {path:"Register",component:RegisterComponent},
  {path:"Admin",component:AdminComponent},
  {path:"parent",component:ParentComponent},
  {path:"child",component:ChildComponent},
   {path:"reactiveforms",component:ReactiveformsComponent},
  {path:"templateforms",component:TemplateformsComponent},
  {path:"productdetails/:id",component:ProductdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

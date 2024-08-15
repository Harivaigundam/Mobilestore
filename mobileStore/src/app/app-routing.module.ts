import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { register } from 'module';
import { RegisterComponent } from './register/register.component';
import { MobileAddComponent } from './mobile-add/mobile-add.component';
import { MobileShowComponent } from './mobile-show/mobile-show.component';
import { SendDetailsComponent } from './send-details/send-details.component';

const routes: Routes = [
  {path:'register', component:RegisterComponent},
  {path:'mobileAdd', component:MobileAddComponent},
  {path:'mobileShow', component:MobileShowComponent},
  {path:'sendDetails', component:SendDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

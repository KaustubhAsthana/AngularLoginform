import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeesComponent } from './employees/employees.component';

const routes: Routes = [
    
      {
        path : 'employees',
        component : EmployeesComponent
      },
      {
        path : 'login',
        component : LoginComponent
      },
      {
        path : '',
        component : LoginComponent
      }
      
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

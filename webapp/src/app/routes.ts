import { Routes } from "@angular/router";
import {HomeComponent} from './component/home/home.component';
import {UserComponent} from './component/user/user.component';
import {LoginComponent} from './component/user/login/login.component';
import {RegisterComponent} from './component/user/register/register.component';
import { AuthGuard } from "./auth/auth.guard";
import { ListorderComponent } from "./component/home/listorder/listorder.component";
import { AddeditorderComponent } from "./component/home/addeditorder/addeditorder.component";


export const appRoutes: Routes = [
    { path:'home', component:HomeComponent, canActivate:[AuthGuard],
        children:[{path:'', component:ListorderComponent, canActivate:[AuthGuard]}]    
    },
    { path:'home', component:HomeComponent, canActivate:[AuthGuard],
    children:[{path:'addorder', component:AddeditorderComponent, canActivate:[AuthGuard]}]    
    },
    { path:'login', component:UserComponent,
        children:[{path:'', component:LoginComponent}]
    },
    { path:'register', component:UserComponent,
        children:[{path:'', component:RegisterComponent}]
    },
    { path:'',redirectTo:'login', pathMatch:'full'}
];
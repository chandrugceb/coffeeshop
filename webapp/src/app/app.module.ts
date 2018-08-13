import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterComponent } from './component/user/register/register.component';
import { LoginComponent } from './component/user/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './component/user/user.component';
import { HomeComponent } from './component/home/home.component';
import {appRoutes} from './routes';
import { UserService } from './shared_service/user.service';
import { AuthGuard } from './auth/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor';
import { ListorderComponent } from './component/home/listorder/listorder.component';
import { AddeditorderComponent } from './component/home/addeditorder/addeditorder.component';
import { ProductService } from './shared_service/product.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent,
    HomeComponent,
    ListorderComponent,
    AddeditorderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService,AuthGuard,{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  }, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

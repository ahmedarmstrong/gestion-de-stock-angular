import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './page/page-login/page-login.component';
import { PageInscriptionComponent } from './page/page-inscription/page-inscription.component';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardAdminComponent } from './page/dashboard-admin/dashboard-admin.component';
import { DashboardUserComponent } from './page/dashboard-user/dashboard-user.component';
import { MenuComponent } from './composants/menu/menu.component';
import { HeaderComponent } from './composants/header/header.component';
import { LoaderComponent } from './composants/loader/loader.component';
import { ArticleComponent } from './page/article/article.component';
import { DetailArticleComponent } from './composants/detail-article/detail-article.component';
import { PaginationComponent } from './composants/pagination/pagination.component';
import { BouttonActionComponent } from './composants/boutton-action/boutton-action.component';
import { NouvelArticleComponent } from './page/nouvel-article/nouvel-article.component';
import { MvtstkComponent } from './page/mvtstk/mvtstk.component';
import { DetailMvtStkComponent } from './composants/detail-mvt-stk/detail-mvt-stk.component';
import { DetailMvtStkArticleComponent } from './composants/detail-mvt-stk-article/detail-mvt-stk-article.component';
import { DetailCmdComponent } from './composants/detail-cmd/detail-cmd.component';
import { DetailCmdCltFrsComponent } from './composants/detail-cmd-clt-frs/detail-cmd-clt-frs.component';
import { ClientComponent } from './page/client/client.component';
import { FournisseurComponent } from './page/fournisseur/fournisseur.component';
import { NouveauCltFrsComponent } from './composants/nouveau-clt-frs/nouveau-clt-frs.component';
import { NouvelleCmdCltFrsComponent } from './composants/nouvelle-cmd-clt-frs/nouvelle-cmd-clt-frs.component';
import { PageCmdCltFrsComponent } from './page/page-cmd-clt-frs/page-cmd-clt-frs.component';
import { PageCategoriesComponent } from './page/page-categories/page-categories.component';
import { NouvelleCategoriesComponent } from './page/nouvelle-categories/nouvelle-categories.component';
import { NouvelUtilisateurComponent } from './page/nouvel-utilisateur/nouvel-utilisateur.component';
import { PageUtilisateurComponent } from './page/page-utilisateur/page-utilisateur.component';
import { DetailUtilisateurComponent } from './composants/detail-utilisateur/detail-utilisateur.component';
import { PageProfileComponent } from './page/page-profile/page-profile.component';
import { ChangerMotDePasseComponent } from './page/changer-mot-de-passe/changer-mot-de-passe.component';
import { ApplicationGuardService } from 'src/services/guard/application-guard.service';
import { HttpInterceptorService } from 'src/services/interceptor/http-interceptor.service';
import { DatePipe } from '@angular/common';
import { AuthService } from 'src/services/service/auth.service';
import { JWT_OPTIONS, JwtModule } from '@auth0/angular-jwt';
import { DetailCltFrsComponent } from './composants/detail-clt-frs/detail-clt-frs.component';
import { NouveauFrsComponent } from './composants/nouveau-frs/nouveau-frs.component';
import { DetailFrsComponent } from './composants/detail-frs/detail-frs.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageInscriptionComponent,
    DashboardAdminComponent,
    DashboardUserComponent,
    MenuComponent,
    HeaderComponent,
    LoaderComponent,
    ArticleComponent,
    DetailArticleComponent,
    PaginationComponent,
    BouttonActionComponent,
    NouvelArticleComponent,
    MvtstkComponent,
    DetailMvtStkComponent,
    DetailMvtStkArticleComponent,
    DetailCltFrsComponent,
    DetailCmdComponent,
    DetailCmdCltFrsComponent,
    ClientComponent,
    FournisseurComponent,
    NouveauCltFrsComponent,
    NouvelleCmdCltFrsComponent,
    PageCmdCltFrsComponent,
    PageCategoriesComponent,
    NouvelleCategoriesComponent,
    NouvelUtilisateurComponent,
    PageUtilisateurComponent,
    DetailUtilisateurComponent,
    PageProfileComponent,
    ChangerMotDePasseComponent,
    NouveauFrsComponent,
    DetailFrsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule],

  providers: [
    ApplicationGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
    HttpClient,
    DatePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

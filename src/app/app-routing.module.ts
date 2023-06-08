import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './page/page-login/page-login.component';
import { PageInscriptionComponent } from './page/page-inscription/page-inscription.component';
import { DashboardAdminComponent } from './page/dashboard-admin/dashboard-admin.component';
import { DashboardUserComponent } from './page/dashboard-user/dashboard-user.component';
import { ArticleComponent } from './page/article/article.component';
import { NouvelArticleComponent } from './page/nouvel-article/nouvel-article.component';
import { MvtstkComponent } from './page/mvtstk/mvtstk.component';
import { ClientComponent } from './page/client/client.component';
import { FournisseurComponent } from './page/fournisseur/fournisseur.component';
import { NouveauCltFrsComponent } from './composants/nouveau-clt-frs/nouveau-clt-frs.component';
import { PageCmdCltFrsComponent } from './page/page-cmd-clt-frs/page-cmd-clt-frs.component';
import { NouvelleCmdCltFrsComponent } from './composants/nouvelle-cmd-clt-frs/nouvelle-cmd-clt-frs.component';
import { PageCategoriesComponent } from './page/page-categories/page-categories.component';
import { NouvelleCategoriesComponent } from './page/nouvelle-categories/nouvelle-categories.component';
import { PageUtilisateurComponent } from './page/page-utilisateur/page-utilisateur.component';
import { NouvelUtilisateurComponent } from './page/nouvel-utilisateur/nouvel-utilisateur.component';
import { PageProfileComponent } from './page/page-profile/page-profile.component';
import { ChangerMotDePasseComponent } from './page/changer-mot-de-passe/changer-mot-de-passe.component';
import { ApplicationGuardService } from 'src/services/guard/application-guard.service';
import { NouveauFrsComponent } from './composants/nouveau-frs/nouveau-frs.component';
const routes: Routes = [
  {
    path: 'login',
    component: PageLoginComponent,
  },
  {
    path: 'inscrire',
    component: PageInscriptionComponent,
  },
  {
    path: '',
    component: DashboardUserComponent,
    canActivate: [ApplicationGuardService],

    children: [
      {
        path: 'articles',
        component: ArticleComponent,
        canActivate: [ApplicationGuardService],
      },
      {
        path: 'nouvelarticle',
        component: NouvelArticleComponent,
        canActivate: [ApplicationGuardService],
      },
      {
        path: 'mvtstk',
        component: MvtstkComponent,
        canActivate: [ApplicationGuardService],
      },
      {
        path: 'clients',
        component: ClientComponent,
        canActivate: [ApplicationGuardService],
      },
      {
        path: 'nouveauclient',
        component: NouveauCltFrsComponent,
        canActivate: [ApplicationGuardService],
      },
      {
        path: 'commandesclient',
        component: PageCmdCltFrsComponent,
        canActivate: [ApplicationGuardService],
      },
      {
        path: 'nouvellecommandeclt',
        component: NouvelleCmdCltFrsComponent,
        canActivate: [ApplicationGuardService],
      },
      {
        path: 'fournisseurs',
        component: FournisseurComponent,
        canActivate: [ApplicationGuardService],
      },
      {
        path: 'nouveaufournisseur',
        component: NouveauFrsComponent,
        canActivate: [ApplicationGuardService],
      },
      {
        path: 'commandesfournisseur',
        component: PageCmdCltFrsComponent,
        canActivate: [ApplicationGuardService],
      },
      {
        path: 'nouvellecommandefrs',
        component: NouvelleCmdCltFrsComponent,
        canActivate: [ApplicationGuardService],
      },
      {
        path: 'categories',
        component: PageCategoriesComponent,
        canActivate: [ApplicationGuardService],
      },
      {
        path: 'nouvellecategorie',
        component: NouvelleCategoriesComponent,
        canActivate: [ApplicationGuardService],
      },
      {
        path: 'utilisateurs',
        component: PageUtilisateurComponent,
        canActivate: [ApplicationGuardService],
      },
      {
        path: 'nouvelutilisateur',
        component: NouvelUtilisateurComponent,
        canActivate: [ApplicationGuardService],
      },
      {
        path: 'profil',
        component: PageProfileComponent,
        canActivate: [ApplicationGuardService],
      },
      {
        path: 'changermotdepasse',
        component: ChangerMotDePasseComponent,
        canActivate: [ApplicationGuardService],
      },
    ],
  },
  {
    path: 'admin-dashboard',
    component: DashboardAdminComponent,
    canActivate: [ApplicationGuardService],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

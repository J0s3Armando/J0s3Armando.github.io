import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "../pages/about/about.component";
import { MainComponent } from "../pages/main/main.component";
import { ProjectComponent } from "../pages/project/project.component";

const routes: Routes = [
    { path: 'home', component: MainComponent },
    { path: 'projects', component: ProjectComponent },
    { path: 'aboutme', component: AboutComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, { useHash:true }) ],
    exports: [ RouterModule ]
})

export class AppRouterModule{}
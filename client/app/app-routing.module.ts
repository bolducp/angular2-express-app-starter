import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
//   { path: "", redirectTo: "/insert-path-name", pathMatch: "full" },
//   { path: "insert-path-name", component: PathComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
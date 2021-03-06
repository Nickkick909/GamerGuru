import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'game-home', loadChildren: './game-home/game-home.module#GameHomePageModule' },
  { path: 'items', loadChildren: './items/items.module#ItemsPageModule' },
  { path: 'forum', loadChildren: './forum/forum.module#ForumPageModule' },
  { path: 'new-game', loadChildren: './new-game/new-game.module#NewGamePageModule' },
  { path: 'characters', loadChildren: './characters/characters.module#CharactersPageModule' },
  { path: 'add-character', loadChildren: './add-character/add-character.module#AddCharacterPageModule' },
  { path: 'edit-home', loadChildren: './edit-home/edit-home.module#EditHomePageModule' },
  { path: 'edit-characters', loadChildren: './edit-characters/edit-characters.module#EditCharactersPageModule' },
  { path: 'edit-items', loadChildren: './edit-items/edit-items.module#EditItemsPageModule' },
  { path: 'item-description', loadChildren: './item-description/item-description.module#ItemDescriptionPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

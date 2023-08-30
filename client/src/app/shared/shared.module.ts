import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CategoriesComponent } from './components/categories/categories.component';

@NgModule({
  declarations: [ SidebarComponent, CategoriesComponent],
  imports: [
    CommonModule
  ],
  exports: [ SidebarComponent, CategoriesComponent]
})
export class SharedModule { }
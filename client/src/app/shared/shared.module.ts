import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [FooterComponent, SidebarComponent],
  imports: [
    CommonModule
  ],
  exports: [ FooterComponent, SidebarComponent]
})
export class SharedModule { }
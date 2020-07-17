import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CarouselComponent } from './carousel/carousel.component';
import {NgbCarouselModule, NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { DropDownBasicComponent } from './dropdown-basic/dropdown-basic.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgbCarouselModule,
        NgbDropdownModule,
    ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CarouselComponent,
    DropDownBasicComponent,
  ],
    exports: [
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        CarouselComponent,
        DropDownBasicComponent
    ]
})
export class ComponentsModule { }

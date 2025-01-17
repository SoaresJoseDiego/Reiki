import { Component, HostListener } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CardsComponent } from '../../components/cards/cards.component';
import { CardSimpleComponent } from '../../shared/card-simple/card-simple.component';
import { AboutMeComponent } from "../../components/about-me/about-me.component";
import { ContactComponent } from "../../components/contact/contact.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    CardsComponent,
    CardSimpleComponent,
    AboutMeComponent,
    ContactComponent,
    FooterComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

}

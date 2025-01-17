import { Component, HostListener } from '@angular/core';
import { HomeComponent } from "../../pages/home/home.component";
import { AboutMeComponent } from "../about-me/about-me.component";
import { ContactComponent } from "../contact/contact.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HomeComponent, AboutMeComponent, ContactComponent, FooterComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
isMenuVisible = false;
onNavClick(event: Event): void {
  const target = event.target as HTMLElement;
  if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
    event.preventDefault();
    const id = target.getAttribute('href')?.substring(1); 
    if (id) {
      const element = document.getElementById(id); 
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.scrollY;
        const offsetAdjustment = 70; 
        window.scrollTo({
          top: offsetTop - offsetAdjustment,
          behavior: 'smooth',
        });
      }
    }
  }
}
}

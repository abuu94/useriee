import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../housinglocation';

//test 
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  template: `
  <section class="listing">
      <img
        class="listing-photo"
        [src]="housinglocation.photo"
        alt="Exterior photo of {{ housinglocation.name }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ housinglocation.name }}</h2>
      <p class="listing-location">{{ housinglocation.city }}, {{ housinglocation.state }}</p>
<!--hii kwa ajili ya routing link-->
      <a [routerLink]="['/details', housinglocation.id]">Learn More</a>
    </section>
  `,
  styleUrls: ['./housing-location.component.css']
  // styles: ``
})
export class HousingLocationComponent {
  @Input() housinglocation!: Housinglocation;

}

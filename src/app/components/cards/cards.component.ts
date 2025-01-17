import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  @Input() imageSrc: string = '';
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() readTime: string = '';
  @Input() views: string = '';
  @Input() comments: string = '';
  @Input() isList: boolean = false; 



  item = [] = [
    { label: 'Reduz o estresse e promove relaxamento.' },
    {label: 'Alivia dores físicas e emocionais.'},
    {label: 'Melhora o equilíbrio energético e emocional.'},
    {label: 'Complementa tratamentos e fortalece a saúde geral.'}
  ]
}

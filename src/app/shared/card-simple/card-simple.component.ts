import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
@Component({
  selector: 'app-card-simple',
  standalone: true,
  imports: [CommonModule, ButtonModule, TooltipModule],
  templateUrl: './card-simple.component.html',
  styleUrls: ['./card-simple.component.scss']
})
export class CardSimpleComponent {
@Input() title!: string;
@Input() font!: string;
@Input() content!: string;

private options = [
  { content: 'O Reiki é uma prática de cura energética criada por Mikao Usui no Japão, no início do século XX. Baseia-se na canalização da energia universal para promover equilíbrio físico, emocional e espiritual. Apesar de suas raízes espirituais, o Reiki não é vinculado a religiões e pode ser praticado por qualquer pessoa. Ele envolve o uso das mãos, com ou sem toque, e pode ser aplicado tanto em humanos quanto em animais e plantas. É uma terapia complementar, amplamente utilizada para aliviar o estresse, melhorar o bem-estar e trazer harmonia interior."', font: '"The Reiki Manual, de Penelope Quest e Kathy Roberts' },
  { content: 'O Reiki é reconhecido pelo SUS como uma prática integrativa e complementar desde 2017, sendo aplicado em diversas unidades de saúde para tratar dores, ansiedade, insônia e outras questões emocionais. Ele faz parte da Política Nacional de Práticas Integrativas e Complementares e é usado em hospitais públicos, como o Hospital de Clínicas da UFTM e o Hospital Central da Aeronáutica, para promover bem-estar e qualidade de vida por meio de uma abordagem humanizada.', font: 'https://www.youtube.com/watch?v=HnhrdnSKdjM' },
  { content: 'O Reiki não está vinculado a nenhuma religião e pode ser praticado ou recebido por pessoas de qualquer crença. Ele é uma técnica universal, baseada na canalização de energia, com o objetivo de promover equilíbrio e bem-estar, sem exigir afiliações religiosas. Isso o torna acessível e inclusivo para todos', font: 'International Association of Reiki Professionals (IARP)' }
];
private currentIndex = 0;

changeContentAndFont() {
  this.currentIndex = (this.currentIndex + 1) % this.options.length;
  this.content = this.options[this.currentIndex].content;
  this.font = this.options[this.currentIndex].font;
}
}

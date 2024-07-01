import { Component, Input } from '@angular/core';

@Component({
  selector: 'header-search',
  templateUrl: './header-search.template.html',
  styleUrls: ['./header-search.styles.css'],
  standalone: true,
})
export class HeaderSearchComponent {

  @Input()
  public isDisabled!: boolean;

}

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { GetKeyfigureDataService } from '../get-keyfigure-data.service';

@Component({
  selector: 'app-keyfigure-one',
  templateUrl: './keyfigure-one.component.html',
  styleUrls: ['./keyfigure-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KeyfigureOneComponent implements OnInit {
  data$;
  constructor(private service: GetKeyfigureDataService) { }

  ngOnInit(): void {
    this.data$ = this.service.getKeyFigureData();
  }

}

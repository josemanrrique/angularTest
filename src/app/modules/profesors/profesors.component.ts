import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HogwartsService } from '../../core/services/hogwarts.service';
import { MagoModel } from '../../core/models/MagoModel';

@Component({
  selector: 'app-profesors',
  templateUrl: './profesors.component.html',
  styleUrls: ['./profesors.component.scss']
})
export class ProfesorsComponent implements OnInit {
  subscriptions: Subscription[] = [];
  mago: MagoModel[] = [];
  displayedColumns: string[] = ['name', 'patronus', 'age', 'image']
  constructor(
    private _hs: HogwartsService
  ) { }

  ngOnInit(): void {
    this.loadProfessors();
  }
  loadProfessors(): void {
    const sub = this._hs.getProfessors().subscribe((res: MagoModel[]) => {
      this.mago = res;
    })
    this.subscriptions = [...this.subscriptions, sub];
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}

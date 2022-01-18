import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HogwartsService } from '../../core/services/hogwarts.service';
import { MagoModel } from '../../core/models/MagoModel';

@Component({
  selector: 'app-famous',
  templateUrl: './famous.component.html',
  styleUrls: ['./famous.component.scss']
})
export class FamousComponent implements OnInit {
  houses!: string[];
  selected!: string;
  subscriptions: Subscription[] = [];
  mago: MagoModel[] = [];
  displayedColumns: string[] = ['name', 'patronus', 'age', 'image']
  constructor(
    private _hs: HogwartsService
  ) {
  }

  ngOnInit(): void {
    const sub = this._hs.houses$().subscribe((res: string[]) => {
      this.selected = res[0];
      this.houses = res;
      this.loadFamous();
    })
    this.subscriptions = [...this.subscriptions, sub];
  }
  loadFamous(): void {
    const sub = this._hs.getFamous(this.selected).subscribe((res: MagoModel[]) => {
      this.mago = res;
    })
    this.subscriptions = [...this.subscriptions, sub];
  }
  
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}

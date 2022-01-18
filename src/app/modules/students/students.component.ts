import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HogwartsService } from '../../core/services/hogwarts.service';
import { MagoModel } from '../../core/models/MagoModel';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  subscriptions: Subscription[] = [];
  mago: MagoModel[] = [];
  displayedColumns: string[] = ['name', 'patronus', 'age', 'image']
  constructor(
    private _hs: HogwartsService
  ) { }

  ngOnInit(): void {
    this.loadStudents();
  }
  loadStudents(): void {
    const sub = this._hs.getStudents().subscribe((res: MagoModel[]) => {
      this.mago = res;
    })
    this.subscriptions = [...this.subscriptions, sub];
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}

import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { AngularMaterialModule } from '../angular-material.module';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Heroes } from '../../dtos/heroes.dto';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-table-heroes',
  standalone: true,
  imports: [ AngularMaterialModule ],
  templateUrl: './table-heroes.component.html',
  styleUrl: './table-heroes.component.scss'
})
export class TableHeroesComponent {
  displayedColumns: string[] = ['select', 'id', 'avatar', 'name', 'description', 'type', 'power'];

  @Input() set changeDataSource( heroes: Heroes[] ) {
    this.dataSource.data = heroes;
  }

  @Output() selectedHeroes = new EventEmitter<Heroes[]>();

  dataSource = new MatTableDataSource<Heroes>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  selection = new SelectionModel<Heroes>(true, []);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.selection.changed.subscribe( (selecteds) => {
      this.selectedHeroes.emit(selecteds.source.selected);
    });
  }

    isAllSelected() {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
    }

    masterToggle() {
      this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
    }
}

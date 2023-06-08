import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryDto } from 'src/services/model/categoryDto';
import { CategoriesService } from 'src/services/service/category.service';

@Component({
  selector: 'app-nouvelle-categories',
  templateUrl: './nouvelle-categories.component.html',
  styleUrls: ['./nouvelle-categories.component.scss']
})
export class NouvelleCategoriesComponent implements OnInit  {

  categoryDto: CategoryDto = {};;
  errorMsg: Array<string> = [];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoriesService
  ) { }

  ngOnInit(): void {
    const idCategory = this.activatedRoute.snapshot.params['idCategory'];
    if (idCategory) {
      this.categoryService.findById(idCategory)
      .subscribe(cat => {
        this.categoryDto = cat ;
      });
    }
  }

  cancel(): void {
    this.router.navigate(['categories']);
  }

  enregistrerCategory(): void {
    this.categoryService.save(this.categoryDto)
    .subscribe(res => {
      this.router.navigate(['categories']);
    });
  }
}

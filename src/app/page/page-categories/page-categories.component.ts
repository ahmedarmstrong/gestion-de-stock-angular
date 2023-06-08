import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryDto } from 'src/services/model/categoryDto';
import { CategoriesService } from 'src/services/service/category.service';

@Component({
  selector: 'app-page-categories',
  templateUrl: './page-categories.component.html',
  styleUrls: ['./page-categories.component.scss'],
})
export class PageCategoriesComponent implements OnInit {
  listCategories: Array<CategoryDto> = [];
  selectedCatIdToDelete? = -1;
  errorMsgs = '';

  constructor(
    private router: Router,
    private categoryService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.findAllCategories();
  }

  findAllCategories(): void {
    this.categoryService.findall().subscribe((res) => {
      this.listCategories = res;
    });
  }

  nouvelleCategory(): void {
    this.router.navigate(['nouvellecategorie']);
  }

  modifierCategory(id?: number): void {
    this.router.navigate(['nouvellecategorie', id]);
  }

  confirmerEtSupprimerCat(): void {
    if (this.selectedCatIdToDelete !== -1) {
      this.categoryService.delete(this.selectedCatIdToDelete!!)
      .subscribe(res => {
        this.findAllCategories();
      }, error => {
        this.errorMsgs = error.error.message;
      });
    }
  }

  annulerSuppressionCat(): void {
    this.selectedCatIdToDelete = -1;
  }

  selectCatPourSupprimer(id?: number): void {
    this.selectedCatIdToDelete = id;
  }
}

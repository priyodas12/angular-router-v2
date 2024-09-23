import { Component, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.generateFakeCategories(5); // Generate 5 fake categories
  }

  generateFakeCategories(count: number) {
    for (let i = 0; i < count; i++) {
      this.categories.push({
        name: faker.commerce.department(),
        description: faker.lorem.sentence(),
      });
    }
  }

  addCategory() {
    this.categories.push({
      name: faker.commerce.department(),
      description: faker.lorem.sentence(),
    });
  }
}

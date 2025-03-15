import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Page } from './body.modals';

@Component({
  selector: 'app-body',
  imports: [CommonModule],
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  page: Page | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.page = data['page'];
      if (!this.page) {
        this.router.navigate(['/not-found']);
      }
    });
  }

  getAlignmentClass(align: string): string {
    return `alignment ${align}`;
  }
}
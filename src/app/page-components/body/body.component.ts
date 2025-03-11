import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.page = data['page'];
    });
  }

  getAlignmentClass(align: string): string {
    return `alignment ${align}`;
  }
}
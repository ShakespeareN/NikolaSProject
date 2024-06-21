import { Component, Inject, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Post } from '../models/posts';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { PostDetailsComponent } from '../post-details/post-details.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, NgSelectModule, MatDialogModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  posts$ = this.homeService.post$;
  selectedTag!: number;
  selectedTagName: string = '';
  tags = [
    { id: 1, name: 'history' },
    { id: 2, name: 'american' },
    { id: 3, name: 'crime' },
    { id: 4, name: 'magical' },
    { id: 5, name: 'french' },
  ];
  pages$ = this.homeService.pages$;

  constructor(private homeService: HomeService, public dialog: MatDialog) {}

  ngOnInit() {
    this.homeService.getPosts();
  }

  showPostDetails(post: Post) {
    const dialogRef = this.dialog.open(PostDetailsComponent, {
      width: '450px',
      data: post
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  tagChanged() {
    this.selectedTagName =
      this.tags.find((tag) => tag.id === this.selectedTag)?.name ?? '';
  }

  getIterations(count: number): number[] {
    return Array.from({ length: count }, (_, i) => i + 1);
  }

  changePage(page:number) {
    this.homeService.getPosts(10,(page-1)*10,'');
  }
}

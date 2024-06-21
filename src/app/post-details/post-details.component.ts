import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss'
})
export class PostDetailsComponent {
  constructor(
    public dialogRef: MatDialogRef<PostDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onClose(): void {
    this.dialogRef.close();
  }
}

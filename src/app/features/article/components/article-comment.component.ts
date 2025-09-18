import { Component, EventEmitter, Input, Output, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { map } from "rxjs/operators";
import { Comment } from "../models/comment.model";
import { AsyncPipe, DatePipe, NgIf } from "@angular/common";
import {UserManagementService} from "../../../core/auth/services/user-management.service";
import {Person} from "../../../core/auth/person.model";

@Component({
  selector: "app-article-comment",
  template: "article-comment.component.html",
  imports: [RouterLink, DatePipe, NgIf, AsyncPipe],
  standalone: true,
})
export class ArticleCommentComponent {
  @Input() comment!: Comment;
  @Output() delete = new EventEmitter<boolean>();

  canModify$ = inject(UserManagementService).currentUser.pipe(
    map(
      (userData: Person | null) =>
        userData?.username === this.comment.author.username,
    ),
  );
}

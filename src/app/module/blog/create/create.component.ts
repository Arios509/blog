import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/core/_services/post.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {
  mdForm: FormGroup;
  mdContent: string;
  constructor(private _postService: PostService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initialForm();
  }

  initialForm = () => {
    this.mdForm = this.fb.group({
      title: [''],
      description: [''],
    });
  }

  submitPost = () => {
    const form = {
      title: this.mdForm.controls.title.value,
      description: this.mdForm.controls.description.value
    };
    this._postService.createPost(form).subscribe(res => {
    });
  }
}

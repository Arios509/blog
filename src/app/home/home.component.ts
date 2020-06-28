import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { AuthenticationService } from '../core/_services/authentication.service';
import { RegisterService } from '../core/_services/register.service';
import { Observable, timer } from 'rxjs';
import moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../core/_services/post.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  everySecond$: Observable<number> = timer(0, 1000);
  form: FormGroup;
  mdContent: string;
  constructor(private fb: FormBuilder,
    private _postService: PostService) { }

  ngOnInit(): void {
    this.intialForm();
  }

  // Click to add data to firebase
  // Initial form
  intialForm = () => {
    this.form = this.fb.group({
      name: [''],
      description: ['']
    });
  }

  onSubmit = () => {
    const formDatas = { title: this.form.controls.name.value, description: this.form.controls.description.value };

    this._postService.createPost(formDatas).subscribe(result => {
    });
  }
}

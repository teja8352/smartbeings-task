import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from '../../config/config';
import { UserserviceService } from '../../userservice.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  public users: User[];
  @ViewChild('closeBtn') closeBtn: ElementRef;
  public insertForm: FormGroup;
  public updateForm: FormGroup;
  constructor(private _userService: UserserviceService, private fb: FormBuilder) {
    this.insertForm = this.fb.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      address: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      contact: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
    });
    this.updateForm = this.fb.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      address: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      contact: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
    });
  }

  ngOnInit() {
    this.getAllUsers();
  }

  /**
   * @description This method triggered by insertForm
   */

  onSubmitInsert() {
    this.insertUser(this.insertForm.value);
    this.insertForm.reset();
  }

  /**
   * @description This method triggered by updateForm
   */

  onSubmitUpdate(idToUpdate) {
    this.updateUser(this.updateForm.value, idToUpdate);
    this.updateForm.reset();
  }

  /**
   * @description This method allows to cancel modal
   */

  closeModal() {
    this.closeBtn.nativeElement.click();
  }

  /**
   * @description This method allows to get all users/documents
   */

  getAllUsers() {
    this._userService.getAllUsers().subscribe(data => {
      this.users = data.json();
    });
  }

  /**
   * @description This method allows to create a user/document
   * @param formValue
   */

  insertUser(formValue) {
    this._userService.insertUser(formValue).subscribe(data => {
      this.ngOnInit();
      this.closeModal();
    });
  }

  /**
   * @description This method allows to update a user/document
   * @param formValue
   * @param idToUpdate
   */

  updateUser(formValue, idToUpdate) {
    this._userService.updateUser(formValue, idToUpdate).subscribe(data => {
      this.ngOnInit();
      this.closeModal();
    });
  }

  /**
   * @description This method allows to delete a user/document
   * @param idToRemove
   */

  deleteUser(idToRemove) {
    this._userService.deleteUser(idToRemove).subscribe(data => {
      this.ngOnInit();
    });
  }

  /**
   * @description This method allows to set values for updateForm fields
   * @param selectedUserToUpdate
   */

  selectedUser(selectedUserToUpdate) {
    this.updateForm.setValue({
      username: selectedUserToUpdate.username,
      address: selectedUserToUpdate.address,
      contact: selectedUserToUpdate.contact,
      email: selectedUserToUpdate.email,
    });
  }
}

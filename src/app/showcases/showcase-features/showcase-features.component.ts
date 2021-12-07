import { ChangeDetectorRef, Component, ComponentFactoryResolver, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { distinctUntilChanged, map, Observable, startWith, Subject, takeUntil } from 'rxjs';
import { ViewUsersComponent } from 'src/app/users/view-users/view-users.component';
import { AdditionalComponent } from '../additional/additional.component';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
@Component({
  selector: 'app-showcase-features',
  templateUrl: './showcase-features.component.html',
  styleUrls: ['./showcase-features.component.scss'],

  /**  Before angular 12 */
  styles: [`
  .green-text {
    color: #9ACD32;
  }
  
    `],

  /** NEW Angular 12 : Support inline SASS */
  // styles: [` 
  // $green-color :  #9ACD32;

  // .green-text {
  //   color: $green-color;
  //  }
  //   `],

})

export class ShowcaseFeaturesComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  myForm: FormGroup;
  private _destroy = new Subject<void>();
  constructor(
    private viewContainerRef : ViewContainerRef,
    private componentFactoryResolver : ComponentFactoryResolver,
    public formBuilder: FormBuilder,
  ) { 
    
  }


  /** Nullish */
  condition1 = '10 million dollars';
  condition2 = '10 carrot cakes';
  message : string ;

  /** Angular 13 : If set to null, the validators become disabled  */
  nameMaxLength =null;

  /** Angular 13 : Allow question mark in query param and Disable link   */
  link = '/users/list';
  ngOnInit(): void {

      /** Nullish : Before angular 12 */
    this. message = this.condition1?? this.condition2;



    /** Create dynamic component :: ====> Uncomment to show result*/ 

    /** Before Angular 13 */ 
    // const additional = this.componentFactoryResolver.resolveComponentFactory(AdditionalComponent);
    // this.viewContainerRef.createComponent(additional);

     /** New Angular 13   : No need resolveComponentFactory */
    // this.viewContainerRef.createComponent(AdditionalComponent);
    // this.viewContainerRef.createComponent(AdditionalComponent);
    // this.viewContainerRef.createComponent(AdditionalComponent);
  

    /** Angular 13 form with Material Design & hasValidation/add/remove validation method */

    this.reactiveForm()
   
   /**Form status */
     this.myForm.get('name')?.statusChanges.pipe(
      takeUntil(this._destroy))
      .subscribe((value) => {
       console.log('name status',value)
       if(value ==='VALID'){
          console.log("VALID")
       }
      }
     )
     undefined


    /** Validation method */
 
    /** 1. Check validation */
    console.log('1. Email : has email validation',this.myForm.get('email')?.hasValidator(Validators.email));

    /** 2. Add validation */
    this.myForm.get('email')?.addValidators(Validators.email);
    console.log('2. Has email validation after added',this.myForm.get('email')?.hasValidator(Validators.email));

    /** 3. Remove validation */
    this.myForm.get('email')?.removeValidators(Validators.email);
    console.log('3. Has email validation after removed',this.myForm.get('email')?.hasValidator(Validators.email));
  
  
  
  
  }
   /* Reactive form */
   reactiveForm() {
    this.myForm = this.formBuilder.group({
      name: ['TEST',[Validators.required,Validators.maxLength(3)]],
      email: ['',[Validators.required]],
   
    })
  }

  

submitForm() {
  console.log(this.myForm.value)
}


ngOnDestroy(): void {
  this._destroy.next();
  this._destroy.complete();
}
}


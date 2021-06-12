import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Category } from 'src/app/models/category.enum';
import { Service } from 'src/app/models/service';
import { ServicesService } from 'src/app/services/services.service';


@Component({
  selector: 'app-editservicedialog',
  templateUrl: './editservicedialog.component.html',
  styleUrls: ['./editservicedialog.component.scss']
})
export class EditservicedialogComponent implements OnInit {
  name:string="";
 
  category: Category
  constructor(@Inject(MAT_DIALOG_DATA) public data: Service, public service:ServicesService,public dialogRef: MatDialogRef<EditservicedialogComponent>) { this.category=Category.NONE}

  ngOnInit(): void {
  }
  
  async editarinfo(){
    
    
    console.log(this.data)
    await this.service.editService(this.data).toPromise();
    
    
  }
  noteditservice(){
    this.dialogRef.close();
  }

}

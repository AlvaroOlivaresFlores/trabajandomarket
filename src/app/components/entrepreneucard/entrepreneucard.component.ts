import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Category } from 'src/app/models/category.enum';
import { Entrepreneur } from 'src/app/models/entrepreneur';
import { Region } from 'src/app/models/region.enum';
import { Service } from 'src/app/models/service';
import { ServicesService } from 'src/app/services/services.service';
import { EditservicedialogComponent } from '../editservicedialog/editservicedialog.component';
import { RemoveservicedialogComponent } from '../removeservicedialog/removeservicedialog.component';

@Component({
  selector: 'app-entrepreneucard',
  templateUrl: './entrepreneucard.component.html',
  styleUrls: ['./entrepreneucard.component.scss']
})
export class EntrepreneucardComponent implements OnInit {

  constructor(private myServices: ServicesService, public dialog: MatDialog) { 
    this.service = new Service("","",0,0,Category.NONE,["",""],false,0,0);
  }
  openDialog(service:Service){
    this.dialog.open(EditservicedialogComponent,{
      width: '350px',
      data:service
    });
  }
  openDialogRemove(service: Service){
    this.dialog.open(RemoveservicedialogComponent,{
      width: '350px',
      data:service
    });
  }

  ngOnInit(): void {
  }
  @Input() service: Service;

  categoryStr(): string {
    if (this.service.category.toString() === "DIGITALMARKETING") {
      return "Marketing Digital"
    } else if (this.service.category.toString() === "GRAPHICDESING") {
      return "Diseño Grafico"
    } else if (this.service.category.toString() === "VIDEOEDITING") {
      return "Edicion de Video"
    } else if (this.service.category.toString() === "WEBDEVELOPMENT") {
      return "Desarollo Web"
    } else {
      return "NONE"
    }
  }
}
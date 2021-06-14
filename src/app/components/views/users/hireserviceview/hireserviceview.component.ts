import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RequestdialogComponent } from 'src/app/components/requestdialog/requestdialog.component';
import { Category } from 'src/app/models/category.enum';
import { Entrepreneur } from 'src/app/models/entrepreneur';
import { Region } from 'src/app/models/region.enum';
import { Request } from 'src/app/models/request';
import { Service } from 'src/app/models/service';
import { AuthService } from 'src/app/services/auth.service';
import { EntrepreneurService } from 'src/app/services/entrepreneur.service';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-hireserviceview',
  templateUrl: './hireserviceview.component.html',
  styleUrls: ['./hireserviceview.component.scss'],
})
export class HireserviceviewComponent implements OnInit {
  service: Service;
  entrepreneur: Entrepreneur;
  confirm: boolean = false;

  constructor(
    private entrepreneursService: EntrepreneurService,
    public dialog: MatDialog,
    public requestsService: RequestService,
    public authService: AuthService
  ) {
    this.service = new Service(
      '',
      '',
      0,
      0,
      Category.NONE,
      ['', ''],
      false,
      0,
      0
    );
    this.entrepreneur = new Entrepreneur(
      '',
      '',
      new Date(),
      '',
      '',
      Region.NONE,
      [],
      [],
      '',
      '',
      '',
      true,
      0
    );
  }

  ngOnInit(): void {
    this.loadData();
  }

  categoryStr(): string {
    if (this.service.category.toString() === 'DIGITALMARKETING') {
      return 'Marketing Digital';
    } else if (this.service.category.toString() === 'GRAPHICDESING') {
      return 'Diseño Grafico';
    } else if (this.service.category.toString() === 'VIDEOEDITING') {
      return 'Edicion de Video';
    } else if (this.service.category.toString() === 'WEBDEVELOPMENT') {
      return 'Desarollo Web';
    } else {
      return 'NONE';
    }
  }

  async loadData() {
    const serviceId = localStorage.getItem('s');
    const entrepreneurId = localStorage.getItem('e');
    if (serviceId && entrepreneurId) {
      const sid = parseInt(serviceId);
      const eid = parseInt(entrepreneurId);
      this.entrepreneur = await this.entrepreneursService
        .getEntrepreneur(eid)
        .toPromise();
      this.entrepreneur.services.forEach((s) => {
        if (s.id === sid) {
          this.service = s;
        }
      });
    }
  }

  requestService(): void {
    const dialogRef = this.dialog.open(RequestdialogComponent, {
      width: '560px',
      data: { price: this.service.price, name: this.service.name },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.confirm = result;
      if (this.confirm === true) {
        this.requestsService
          .addRequest(
            new Request(
              this.authService.getCurrentUser().id,
              this.entrepreneur.id,
              this.service.id
            )
          )
          .toPromise();
      }
    });
  }
}

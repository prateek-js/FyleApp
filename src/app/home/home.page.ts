import { Component, ViewChild} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';
import { LoadingController, IonContent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public selectedCity : string = '';
  bankResults: any;
  searchBank: string = '';
  searchControl: FormControl;
  filteredResults: any = [];
  loading: any;
  @ViewChild(IonContent) pageTop: IonContent;

  constructor(public apiService: ApiService, public loadingController:LoadingController) {
    this.searchControl = new FormControl();
  }

  onSelectChange(selectedValue: any) {
    this.callApi(this.selectedCity);
  }

  async callApi(cityName: string) {
    this.loading = await this.loadingController.create({
      message: 'Loading'
    });
    this.loading.present();
    this.bankResults = [];
    this.filteredResults = [];
    this.apiService.searchData(cityName)
    .subscribe((res) => {
      this.bankResults = res;
      this.filterItems();
      this.loading.dismiss();
    });
  }

  searchChanged() {
    this.filterItems()
  }

  filterItems() {
    if (this.searchBank) {
      this.filteredResults =  this.bankResults.filter(item => {
        return (item.bank_name.toLowerCase().indexOf(this.searchBank.toLowerCase()) > -1
        || item.branch.toLowerCase().indexOf(this.searchBank.toLowerCase()) > -1 
        || item.ifsc.toLowerCase().indexOf(this.searchBank.toLowerCase()) > -1);
      });
    } else {
      this.filteredResults = this.bankResults;
    }
  }

  pageScroller() {
    this.pageTop.scrollToTop(100);
  }
}

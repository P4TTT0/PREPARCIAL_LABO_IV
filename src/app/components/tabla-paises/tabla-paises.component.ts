import { Component, OnInit } from '@angular/core';
import { RestcountriesService } from './../../services/restcountries.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit
{
  countries: any[] = [];
  filteredCountries: any[] = [];
  searchTerm: string = '';
  selectedCountry: any = null; 
  listWidth: number = 0; 

  @Output() country = new EventEmitter<any>();

  constructor(private restcountriesService: RestcountriesService) { }

  ngOnInit() {
    this.restcountriesService.getAllCountries().subscribe((data: any) => {
      this.countries = data;
      this.filteredCountries = data;
      this.listWidth = data.length * 320;
    });
  }

  filterCountries() {
    this.filteredCountries = this.countries.filter(country =>
      country.name.common.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  selectCountry(country: any) {
    if (this.selectedCountry === country) 
    {
      this.selectedCountry = null; 
    } 
    else 
    {
      this.selectedCountry = country; 
    }
    this.OnSelectCountry();
  }

  public OnSelectCountry()
  {
    this.country.emit(this.selectedCountry);
  }
}

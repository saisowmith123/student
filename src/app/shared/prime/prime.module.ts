import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

const PRIME_MODULES = [
  TableModule,
  TagModule,
  DropdownModule,
  ProgressSpinnerModule,
  SliderModule,
  MultiSelectModule,
  ProgressBarModule,
  ToastModule,
  InputTextModule,
  ButtonModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: PRIME_MODULES,
})
export class PrimeModule {}

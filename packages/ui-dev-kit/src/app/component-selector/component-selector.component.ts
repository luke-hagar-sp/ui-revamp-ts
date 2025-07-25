import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ComponentInfo, ComponentSelectorService } from '../services/component-selector.service';


@Component({
  selector: 'app-component-selector',
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSlideToggleModule,
    MatToolbarModule
  ],
  templateUrl: './component-selector.component.html',
  styleUrl: './component-selector.component.scss'
})
export class ComponentSelectorComponent implements OnInit {
  availableComponents: ComponentInfo[] = [];

  constructor(private componentSelectorService: ComponentSelectorService) {}

  ngOnInit(): void {
    this.availableComponents = this.componentSelectorService.getEnabledComponents();
  }

  onToggleComponent(componentName: ComponentInfo): void {
    this.componentSelectorService.toggleComponent(componentName);
  }
}

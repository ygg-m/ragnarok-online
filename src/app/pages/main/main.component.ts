import { Component } from '@angular/core';
import { EngineComponent } from '../../engine/engine.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [EngineComponent],
  templateUrl: './main.component.html',
})
export class MainComponent {}

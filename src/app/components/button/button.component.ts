import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button'
  @Input() disabled = false
  @Input() variant:
    | 'default'
    | 'secondary'
    | 'destructive'
    | 'outline'
    | 'ghost' = 'default'
  @Input() size: 'default' | 'sm' | 'lg' | 'icon' | 'full' = 'default'
}

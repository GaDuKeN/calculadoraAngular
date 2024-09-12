import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent {
  public display: string = '';
  private operador1: number | null = null;
  private operador2: number | null = null;
  private operador: string | null = null;

  public adicionarNumero(numero: string) {
    this.display += numero;
  }

  public definirOperador(operador: string) {
    if (this.display !== '') {
      this.operador1 = parseFloat(this.display);
      this.operador = operador;
      this.display = '';
    }
  }

  public calcular() {
    if (this.operador1 !== null && this.operador !== null && this.display !== '') {
      this.operador2 = parseFloat(this.display);
      switch (this.operador) {
        case '+':
          this.display = (this.operador1 + this.operador2).toString();
          break;
        case '-':
          this.display = (this.operador1 - this.operador2).toString();
          break;
        case '*':
          this.display = (this.operador1 * this.operador2).toString();
          break;
        case '/':
          if (this.operador2 !== 0) {
            this.display = (this.operador1 / this.operador2).toString();
          } else {
            this.display = 'Erro';
          }
          break;
      }
      this.operador1 = null;
      this.operador2 = null;
      this.operador = null;
    }
  }

  public limpar() {
    this.display = '';
    this.operador1 = null;
    this.operador2 = null;
    this.operador = null;
  }
}

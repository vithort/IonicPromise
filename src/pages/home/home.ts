import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CorrecaoMonetariaProvider } from '../../providers/correcao-monetaria/correcao-monetaria';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    resultado: number = 0;

    constructor(
        public navCtrl: NavController
        , private correcaoMonetaria: CorrecaoMonetariaProvider
        ) {

    }

    /*
    // dessa maneira nao funciona, pq a promise nao traz o resultado para a segunda - assincrono
        calcular() {
            let valor: number = 100;
            let valorCorrigido: number = 0;
    
            this.calcularJuros(valor)
                .then((result: number) => {
                    valorCorrigido = result;
                    this.resultado = valorCorrigido;
                });
            this.calcularMulta(valorCorrigido)
                .then((result: number) => {
                    valorCorrigido = result;
                    this.resultado = valorCorrigido;
                });
        }
    */

    /*
    // Este funciona beleza...
        calcular() {
            let valor: number = 100;
            let valorCorrigido: number = 0;
    
            this.calcularJuros(valor)
                .then((result: number) => {
                    valorCorrigido = result;
                    this.resultado = valorCorrigido;
    
                    this.calcularMulta(valorCorrigido)
                        .then((result: number) => {
                            valorCorrigido = result;
                            this.resultado = valorCorrigido;
                        });
                });
        }
    */

    calcular() {
        let valor: number = 100;
        let valorCorrigido: number = 0;

        let jurosPromise = this.correcaoMonetaria.calcularJuros(valor);
        let multaPromise = this.correcaoMonetaria.calcularMulta(valor);

        Promise.all([jurosPromise, multaPromise])
        .then((result: number[]) => {
          valorCorrigido = result[0] + result[1];
          this.resultado = valorCorrigido;
        })
    }
}

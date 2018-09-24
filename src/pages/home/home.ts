import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    resultado: number = 0;

    constructor(public navCtrl: NavController) {

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

        let jurosPromise = this.calcularJuros(valor);
        let multaPromise = this.calcularMulta(valor);

        Promise.all([jurosPromise, multaPromise])
        .then((result: number[]) => {
          valorCorrigido = result[0] + result[1];
          this.resultado = valorCorrigido;
        })
    }

    calcularJuros(valorBase: number): Promise<number> {
        return new Promise((resolve, reject) => {
            if (valorBase > 0) {
                let result: number = 0;
                let juros: number = 0.1;

                result = valorBase + (valorBase * juros);
                resolve(result);
            } else {
                reject('O valor não pode ser zero.');
            }
        });
    }

    calcularMulta(valorBase: number): Promise<number> {
        return new Promise((resolve, reject) => {
            if (valorBase > 0) {
                let result: number = 0;
                let multa: number = 50;

                result = valorBase + multa;
                resolve(result);
            } else {
                reject('O valor não pode ser zero.');
            }
        });

    }

}

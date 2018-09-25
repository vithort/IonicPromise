import { Injectable } from '@angular/core';

@Injectable()
export class CorrecaoMonetariaProvider {

  constructor(

  ) {
    console.log('Hello CorrecaoMonetariaProvider Provider');
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

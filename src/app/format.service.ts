import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatService {
  regexWs = /[\n|\s|\t]/gm;
  regexParenthesisMult = /(\(\s*.+\s*\))\s*(\(\s*.+\s*\))/g;
  regexParenthesisMult1 = /(\(\s*.+\s*\))\s*([0-9]+)/g;
  regexParenthesisMult2 = /([0-9]+)\s*(\(\s*.+\s*\))/g;
  regexCharMult = /([a-z|π])(\d)/g;
  regexCharMult1 = /(\d)([a-z|π])/g;
  regexSqrt = /sqrt\((.+)\)/g;
  regexSin = /sin\((.+)\)/g;
  regexCos = /cos\((.+)\)/g;
  regexTan = /tan\((.+)\)/g;
  regexLn = /ln\((.+)\)/g;
  regexLog = /log\((.+)\)/g;
  regexAbs = /abs\((.+)\)/g;
  regexEulers = /e/g;
  regexPI = /π/g;
  regexPow = /\^/g;
  regexSpace = /\s/g;

  constructor() { }

  calculate(equation: string, radMode: boolean) {
    try {
      // tslint:disable-next-line: no-eval
      return eval(this.format(equation, radMode));
    } catch (e) {
      return equation;
    }
  }

  format(equation: string, radMode: boolean) {
    let convertToDegrees: number;
    if (radMode === true) {
      convertToDegrees = 1;
    } else {
      convertToDegrees = Math.PI / 180;
    }

    return equation
      .replace(this.regexWs, '')
      .replace(this.regexParenthesisMult, '$1' + '*' + '$2')
      .replace(this.regexParenthesisMult1, '$1' + '*' + '$2')
      .replace(this.regexParenthesisMult2, '$1' + '*' + '$2')
      .replace(this.regexCharMult, '$1' + '*' + '$2')
      .replace(this.regexCharMult1, '$1' + '*' + '$2')
      .replace(this.regexSqrt, (match, p1) => Math.sqrt(Number(this.calculate(p1, radMode))).toString())
      .replace(this.regexSin, (match, p1) => Math.sin(Number(this.calculate(p1, radMode)) * convertToDegrees).toString())
      .replace(this.regexCos, (match, p1) => Math.cos(Number(this.calculate(p1, radMode)) * convertToDegrees).toString())
      .replace(this.regexTan, (match, p1) => Math.tan(Number(this.calculate(p1, radMode)) * convertToDegrees).toString())
      .replace(this.regexLn, (match, p1) => Math.log(Number(this.calculate(p1, radMode)) * convertToDegrees).toString())
      .replace(this.regexLog, (match, p1) => Math.log10(Number(this.calculate(p1, radMode)) * convertToDegrees).toString())
      .replace(this.regexAbs, (match, p1) => Math.abs(Number(this.calculate(p1, radMode)) * convertToDegrees).toString())
      .replace(this.regexEulers, () => Math.exp(Number(1)).toString())
      .replace(this.regexPI, () => Math.PI.toString())
      .replace(this.regexPow, '**');
    }
}

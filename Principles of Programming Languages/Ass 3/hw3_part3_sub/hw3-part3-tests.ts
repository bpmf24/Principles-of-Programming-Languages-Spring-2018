import * as assert from "assert";
import { evalParse} from './L3-eval';
import { parseL3} from './L3-ast';


//console.log(evalParse(`(L3 (define loop (lambda (x) (loop x)))
//   ((lambda ((f lazy)) 1) (loop 0)))`));
  

//console.log(evalParse('(L3 ((lambda ((x lazy)) x) 1))'));
//console.log(evalParse('(L3 ((lambda (x) x) 1))'));

console.log(evalParse('(L3 (define f (lambda (a (b lazy))a))  (f (/ 1 0) 1))'));
console.log(evalParse('(L3 (define f (lambda (a (b lazy))a))  (f 1 (/ 1 0)))'));


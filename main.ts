import { Counter } from './examples/Counter';
import { MiddlewareCounter } from './examples/MiddlewareCounter';

const counter = new Counter()
console.log(counter.getState())
counter.subscribe(state => console.log(state))
counter.increment()
counter.incrementAsync()

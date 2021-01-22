import React, { createContext } from 'react'
import { action, computed, makeObservable, observable } from 'mobx';

export class CounterStore {
  count = 0;
  
  constructor() {
    makeObservable(this, {
      count: observable,
      increment: action,
      level: computed
  })
  }

  increment() {
    this.count++;
  }

  get level(){
    if(this.count < 10){
      return 1
    }
    
    let temp = Math.floor(this.count/10);
    return temp.toString(2).length + 1;
  }

}

export const CounterStoreContext = createContext(new CounterStore());

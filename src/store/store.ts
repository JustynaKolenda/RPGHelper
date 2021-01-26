import React, { createContext } from 'react'
import { action, computed, makeObservable, observable } from 'mobx';
import {SymbolData } from '../variables/SymbolData'
export class CounterStore {
  idOfActive = '1-s';
  
  constructor() {
    makeObservable(this, {
      idOfActive: observable,
      setId:action,
      active: computed
  })
  }

  get active(){
    return SymbolData.find((el)=>{
        return this.idOfActive == el.id
    })
  }

  setId(id:string){
    this.idOfActive = id;
  }
}

export const CounterStoreContext = createContext(new CounterStore());

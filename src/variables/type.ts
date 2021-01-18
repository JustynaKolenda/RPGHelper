
export interface CartsType {
    id: string,
    title: string
}

export interface SymbolsType {
    id: string,
    uri: string
}

export interface CompareType {
    item: {
        id: string,
        idS: string,
        idC: string,
        description: string
    }
}
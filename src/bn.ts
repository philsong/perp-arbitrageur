import Big from "big.js"

export function min(vs: Big[]): Big {
    return vs.reduce((prev, cur) => (cur.lt(prev) ? cur : prev))
}

export function max(vs: Big[]): Big {
    return vs.reduce((prev, cur) => (cur.gt(prev) ? cur : prev))
}

export function sum(vs: Big[]): Big {
    return vs.reduce((prev, cur) => prev.plus(cur), Big(0))
}

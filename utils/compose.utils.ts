export const compose = (...fns: any[]) => (x: any) => {
    return fns.reduceRight((v, f) => f(v), x);
}
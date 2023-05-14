export type AddPropFn = (value: any) => (object: any) => Readonly<any>;

export const addProperty = (key: string): AddPropFn => (value: any) => (object: any): Readonly<any> => {
    return Object.freeze({...object, [key]: value});
}
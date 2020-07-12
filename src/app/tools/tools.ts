
/**
   * Formatiamos los numeros de enteros a miles
*/
export function format_number(x: string) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
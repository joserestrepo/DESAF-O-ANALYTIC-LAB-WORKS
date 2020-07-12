export class Tools{
    
    /**
     * Formatiamos los numeros de enteros a miles
    */
    public format_number(x: string) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }  
}

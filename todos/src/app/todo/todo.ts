export class Todo{
    /*
    public nombre: string;
    public terminado: boolean;
    public importante: boolean;

    constructor(
        nombre:string, 
        terminado:boolean, 
        importante:boolean){

            this.nombre = nombre;
            this.terminado = terminado;
            this.importante = importante;
    }
    */

    constructor(
        public nombre:string, 
        public terminado:boolean, 
        public importante:boolean,
        public color: string
    ){}
}
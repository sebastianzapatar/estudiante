class Estudiante{
    constructor(nombre,apellido,cedula,date,image){
        this.nombre=nombre;
        this.apellido=apellido;
        this.cedula=cedula;
        this.date=null;
        this.image=image;
    }
}
export default Estudiante;
/*var EstudianteSchema=Schema({ //creamos el archivo json
    nombre:String,
    apellido:String,
    cedula:Number,
    date:{type:Date, default:Date.now},
    image:String,
});*/
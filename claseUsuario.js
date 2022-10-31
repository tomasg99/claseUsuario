class User {
    constructor(name, lastName, books = [], pets = []){
        this.name = name;
        this.lastName = lastName;
        this.books = books;
        this.pets = pets
    }
    getFullName(){
        return(`${this.name} ${this.lastName}`)
    }
    addMascota(name){
        this.pets.push(name);
        void this.pets
    }
    countPets(){
        return this.pets.length
    }
    addBook(name, author){
        this.books.push({name : name, author : author});
        void this.books
    }
    getBookNames(){
        let bookNames = [];
        this.books.forEach(book => bookNames.push(book.name));
        return bookNames
    }
}

const usuario1 = new User('Tomas', 'Garro') // Creating new instance of User class
console.warn('Nuevo usuario creado')
console.log(usuario1)
usuario1.addMascota('Perro')
usuario1.addMascota('Gato')
usuario1.addMascota('Caballo')
console.warn('Nuevas mascotas agregadas')
console.log(usuario1)
console.log(`Cantidad de mascotas : ${usuario1.countPets()}`)
usuario1.addBook('El poder de los habitos', 'Charles Duhigg')
usuario1.addBook('Padre rico, padre pobre ', 'Robert Kiyosaki')
usuario1.addBook('Como ganar amigos e influir sobre las personas', 'Dale Carnegie')
console.warn('Nuevos Libros Agregados')
console.log(usuario1)
console.log(`Nombres de Libros agregados : ${usuario1.getBookNames()}`)
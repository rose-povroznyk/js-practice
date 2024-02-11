class Figure{//Абстрактний клас - клас без реалізації
    constructor(name){
        this.name = name
    }
    getAria(){
        return null
    }
}

class Square extends Figure{
    constructor(sideLength){
        super('square')
        this.a = sideLength
    }
    getAria(){
        return this.a * this.a
    }
}
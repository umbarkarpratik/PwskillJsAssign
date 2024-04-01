class CarDescription{
        constructor(y,c,m){
            this.year=y;
            this.company=c;
            this.model=m;
        }

    getDescription(){
        return `This is ${this.year} ${this.company} ${this.model}`;
    }
}

const car =new  CarDescription(2022,"skoda","Rapid");
console.log(car.getDescription());

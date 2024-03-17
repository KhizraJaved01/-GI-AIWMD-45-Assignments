function who_create_Car(manufacturer:string,model:string,...properties:[string,any][]):any{
    const car:any={
        manufacturer,
        model,
    };
    for(const [key,value]of properties){
        car[key]=value; 
    }
    return car; 
}
const MyCar=who_create_Car("toyota","mercedes",["color","black"],["optaional","High speed"],["petrol maylej","1 to 12km"]);
console.log(MyCar);
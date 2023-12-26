﻿//Задание 1

function parseCount(value) {
    const parsedValue = parseFloat(value);
    
    if (isNaN(parsedValue)) {
        throw new Error("Невалидное значение");
    }
    
    return parsedValue;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}



//Задание 2

class Triangle {
	constructor(a,b,c){
		this.a= a;
		this.b= b;
		this.c=c;
		    if(a+b<c 
            || b+c<a 
            || a+c<b){
			throw new Error("Треугольник с такими сторонами не существует")
		}
    }
		 get perimeter() {
        return this.a + this.b + this.c;
    }
    get area() {
        const p = this.perimeter / 2;
        return parseFloat((+Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3));
        
    }
}

function getTriangle(a,b,c){
	try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get area() {
                return "Ошибка! Треугольник не существует";
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            }
        }
    }
}



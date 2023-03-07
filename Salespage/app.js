'use strict'

function getRandom(max, min) {
    return Math.ceil(Math.random() * (max - min) + min);
    
}


const seattle = {
    min: 23,
    max: 65,
    avg: 6.3,
    location: 'Seattle',
    hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
    customersPerHour: function() {
        console.log(this.max);
        console.log(this.min);
        return getRandom(this.max, this.min);
    },
    cookiesPerHour: [],
    getCookies: function() {
        for(let i = 0; i < this.hoursOfOperation.length; i++) {
            console.log('seattle avg cookies/sale', this.avg);
            console.log('seattle avg customers/hour', this.customersPerHour());
            this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
        }
        return this.cookiesPerHour;
    },
    
}

let hoursDemo = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
let cookieDemo = seattle.getCookies(this.cookiesPerHour);
let hoursArray = document.querySelector('.output')
for(let i = 0; i < hoursDemo.length; i++) {
    //hoursDemo[i].innerHTML
    let variable = document.createElement("li");
    variable.innerHTML = `${hoursDemo[i]}: ${cookieDemo[i]} cookies`;
    hoursArray.append(variable);
}



const Tokyo ={
    min: 3,
    max: 24,
    avg: 1.2,
    location: 'Tokyo',
    hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
    customersPerHour: function() {
        console.log(this.max);
        console.log(this.min);
        return getRandom(this.max, this.min);
    },
    cookiesPerHour: [],
    getCookies: function() {
        for(let i = 0; i < this.hoursOfOperation.length; i++) {
            console.log('Tokyo avg cookies/sale', this.avg);
            console.log('Tokyo avg customers/hour', this.customersPerHour());
            this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
        }
        return this.cookiesPerHour;
    },
}
let hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
let cookie = Tokyo.getCookies(this.cookiesPerHour);
let Arrayhours = document.querySelector('.output2')
for(let i = 0; i < hoursDemo.length; i++) {
    //hoursDemo[i].innerHTML
    let variable = document.createElement("li");
    variable.innerHTML = `${hours[i]}: ${cookie[i]} cookies`;
    Arrayhours.append(variable);
}

const Dubai ={
    min: 11,
    max: 38,
    avg: 3.7,
    location: 'Dubai',
    hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
    customersPerHour: function() {
        console.log(this.max);
        console.log(this.min);
        return getRandom(this.max, this.min);
    },
    cookiesPerHour: [],
    getCookies: function() {
        for(let i = 0; i < this.hoursOfOperation.length; i++) {
            console.log('seattle avg cookies/sale', this.avg);
            console.log('seattle avg customers/hour', this.customersPerHour());
            this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
        }
        return this.cookiesPerHour;
    },
}
let hours3 = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
let cookie3 = Dubai.getCookies(this.cookiesPerHour);
let Arrayhours3 = document.querySelector('.output3')
for(let i = 0; i < hoursDemo.length; i++) {
    //hoursDemo[i].innerHTML
    let variable = document.createElement("li");
    variable.innerHTML = `${hours3[i]}: ${cookie3[i]} cookies`;
    Arrayhours3.append(variable);
}

const Paris ={
    min: 20,
    max: 38,
    avg: 2.3,
    location: 'Paris',
    hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
    customersPerHour: function() {
        console.log(this.max);
        console.log(this.min);
        return getRandom(this.max, this.min);
    },
    cookiesPerHour: [],
    getCookies: function() {
        for(let i = 0; i < this.hoursOfOperation.length; i++) {
            console.log('seattle avg cookies/sale', this.avg);
            console.log('seattle avg customers/hour', this.customersPerHour());
            this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
        }
        return this.cookiesPerHour;
    },
}
let hours4 = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
let cookie4 = Paris.getCookies(this.cookiesPerHour);
let Arrayhours4 = document.querySelector('.output4')
for(let i = 0; i < hoursDemo.length; i++) {
    //hoursDemo[i].innerHTML
    let variable = document.createElement("li");
    variable.innerHTML = `${hours4[i]}: ${cookie4[i]} cookies`;
    Arrayhours4.append(variable);
}
const Lima ={
    min: 2,
    max: 16,
    avg: 4.6,
    location: 'Lima',
    hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
    customersPerHour: function() {
        console.log(this.max);
        console.log(this.min);
        return getRandom(this.max, this.min);
    },
    cookiesPerHour: [],
    getCookies: function() {
        for(let i = 0; i < this.hoursOfOperation.length; i++) {
            console.log('seattle avg cookies/sale', this.avg);
            console.log('seattle avg customers/hour', this.customersPerHour());
            this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
        }
        return this.cookiesPerHour;
    },
}
let hours5 = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
let cookie5 = Lima.getCookies(this.cookiesPerHour);
let Arrayhours5 = document.querySelector('.output5')
for(let i = 0; i < hoursDemo.length; i++) {
    //hoursDemo[i].innerHTML
    let variable = document.createElement("li");
    variable.innerHTML = `${hours5[i]}: ${cookie5[i]} cookies`;
    Arrayhours5.append(variable);
}
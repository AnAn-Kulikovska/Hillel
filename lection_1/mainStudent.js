console.log( "*********************" );
console.log( "Список студентов зарегестрировавшихся на вебинар:" );

student1 = {
    age: +prompt( "Введите возраст", 0 ),
    name: prompt( "Введите имя", "" )
};

student2 = {
    age: +prompt( "Введите возраст", 0 ),
    name: prompt( "Введите имя", "" )
};

student3 = {
    age: +prompt( "Введите возраст", 0 ),
    name: prompt( "Введите имя", "" )
};

console.log( "1. ", student1.age, " лет ", student1.name );
console.log( "2. ", student2.age, " лет ", student2.name );
console.log( "3. ", student3.age, " лет ", student3.name );

midAge = (student1.age + student2.age + student3.age)/3;
console.log( "------------- Средний возраст студента: ", midAge, " --------------" );
console.log( "*********************" );
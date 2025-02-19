const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    people.forEach((person, index) => {
        if (!person.yearOfDeath)
        person.age = currentYear - person.yearOfBirth;
        else {
            person.age = person.yearOfDeath - person.yearOfBirth;
        }
    });
    people.sort((a,b) => {
        if (a.age > b.age) return -1;
        if (a.age == b.age) return 0;
        if (a.age < b.age) return 1;
    });
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;

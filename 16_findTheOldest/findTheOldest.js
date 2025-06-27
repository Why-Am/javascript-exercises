const findTheOldest = function (people) {
    thisYear = new Date().getFullYear();

    return people
        .map((person) => {
            if (person.yearOfDeath === undefined) {
                person.age = thisYear - person.yearOfBirth;
            } else {
                person.age = person.yearOfDeath - person.yearOfBirth;
            }
            return person;
        })
        .reduce((oldest, person) => {
            return oldest.age < person.age ? person : oldest;
        });

    console.log(person);
};

// Do not edit below this line
module.exports = findTheOldest;

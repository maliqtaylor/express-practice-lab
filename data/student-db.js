const students = [
    { id: 000001, name: 'Harry Potter', house: 'Gryffindor', da: true },
    { id: 000002, name: 'Hermoine Granger', house: 'Gryffindor', da: true },
    { id: 000003, name: 'Ron Weasley', house: 'Gryffindor', da: true },
    { id: 000004, name: 'Draco Malfoy', house: 'Slytherin', da: false }
];

module.exports = {
    getAll: function () {
        return students;
    }
};
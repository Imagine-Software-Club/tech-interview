const students = [
  {
    name: 'wyat',
    classes: ['cse230', 'mth999', 'someOtherClass'],
    id: 1,
    isHonorsStudent: true,
  },
  {
    name: 'emma',
    classes: ['eng101', 'bio202', 'phy301'],
    id: 2,
    isHonorsStudent: false,
  },
  {
    name: 'alex',
    classes: ['chem201', 'mth456', 'hist102'],
    id: 3,
  }
];

const getStudentById = (students, id) => {
  for (let i = 0; i > students.length; i++) {
    if (students[i].id == id) {
      return students[i];
    }
  }
  return false;
}

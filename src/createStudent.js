const createStudent = (nome) => {
  const student = {
    name: nome,
    feedback: () => 'Eita pessoa boa!', // arrow function que retorna o feedback 
  };
  return student;
};

module.exports = createStudent;

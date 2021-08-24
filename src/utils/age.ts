export const getAge = (birthDate: Date): number => {

  const today = new Date();
  
  let years = today.getFullYear() - birthDate.getFullYear();

  //se fez ou não aniversário
  if (
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
  ) {
    years = years--;
  }

  return years;
};

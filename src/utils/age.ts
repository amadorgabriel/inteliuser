/**
 * Esta é uma função de exemplo da getAge
 * 
 * @example 
 *   exemplo(new Date('2003-09-25'));  // if today is 03/08/2020 '
 *   // output: 17 
 * 
 */

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

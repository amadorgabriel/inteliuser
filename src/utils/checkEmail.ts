/**
 * Esta é uma função de exemplo
 * 
 * @example 
 *   haveRepeatebleField(clients: Client[], key: 'email', field:string)
 *   // output: true 
 * 
 */


export const haveRepeatebleField = (list: any[], key: string, field: string): boolean => {
  let alreadyExists = false;

  for (let index = 0; index < list.length; index++) {
    const item = list[index][key]
    
    if(String(item).toLowerCase() === field ){
      alreadyExists = true;
    }
  }

  return alreadyExists;
}
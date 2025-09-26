export function isValidCpf(cpf: string): boolean {
  
  if(!cpf.match(/^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$/)) return false
  
  return true;
}
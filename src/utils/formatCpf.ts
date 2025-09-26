export function formatCpf(rawCpf:string):string {
  let formatedCpf:string | string[] = rawCpf;
  
  if(rawCpf.match(/[,.-]/g)) {
    formatedCpf = rawCpf.split(/[,.-]/g).join("");
  }

  // eu sei que isso não deveria estar aqui :P
  if(formatedCpf.length > 11) {
    return "";
  }

  formatedCpf = formatedCpf.split("").map((char, i) => {
    if(i === 2 || i===5) return char += ".";
    if(i === 8) return char += "-";
    return char;
  }).join("");
  
  return formatedCpf;
}
module.exports = function check(str, bracketsConfig) {
  let len = str.length;

  if(str.length % 2 !== 0) return false;

  for (let i = 0; i <= len; i++) {
    for (let h = 0; h < bracketsConfig.length; h++) {
      if(str.includes(bracketsConfig[h].join(''))){
        str = str.replace(bracketsConfig[h].join(''), '');
        if(str.length === 0) break;
        len -= 1;
      }
    }
  }
  
  return str.length === 0;
}
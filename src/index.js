module.exports = function check(str, bracketsConfig) {
  let st = [];
  let el;
  let arr = new Array( bracketsConfig.length ).fill(true);
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (str[i] == bracketsConfig[j][0] && arr[j]) {
        st.push(str[i]);
        if (bracketsConfig[j][0]==bracketsConfig[j][1] ) arr[j] = false;
      }
      else if (str[i] == bracketsConfig[j][1]) {
        el = st.pop() ;
        arr[j] = true;
        if ( el != bracketsConfig[j][0]) return false;
      }
    }
  }
  if (st.pop() != undefined) return false;
  return true;
}
//поменял второй иф на елсе иф, 12 не работает скорее всего из-за повторяющихся цифр (как с палками), или попробовать добавить условия
//от повторений или вернуть второй иф назад 
//May Be  иф bracketsConfig[0] == bracketsConfig[1]

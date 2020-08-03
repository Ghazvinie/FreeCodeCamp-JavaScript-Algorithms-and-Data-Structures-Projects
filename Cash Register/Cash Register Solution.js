const checkCashRegister = (price, cash, cid) => {

  let cidObject = new Map();
  cidObject.set(100, cid[8][1]);
  cidObject.set(20, cid[7][1]);
  cidObject.set(10, cid[6][1]);
  cidObject.set(5, cid[5][1]);
  cidObject.set(1, cid[4][1]);
  cidObject.set(0.25, cid[3][1]);
  cidObject.set(0.10, cid[1][1]);
  cidObject.set(0.05, cid[0][1]);
  cidObject.set(0.01, cid[2][1]);
  
  let cidTable = {
    100 : 'ONE HUNDRED',
    20 : 'TWENTY',
    10 : 'TEN',
    5 : 'FIVE',
    1 : 'ONE',
    0.25 : 'QUARTER',
    0.10 : 'DIME',
    0.05 : 'NICKEL',
    0.01 : 'PENNY'
  };
  
  let changeArray = [];
  let changePerm = cash - price;
  let change = cash - price;
  let openClosed = '';
  let totalInDraw = [];
  let result = [];
  
  const getOccurrence = (array, value) => {
      var count = 0;
      array.forEach((v) => (v === value && count++));
      return count;
  };
  
  for (let [key, value] of cidObject){
    totalInDraw += value;
    totalInDraw = Math.round(totalInDraw * 100) / 100;
     if (value == 0.01){
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
   while (change >= key && value !== 0){
      result.push(key);
      changeArray.push(cidTable[key]);
      change -= key;
      change = Math.round(change * 100) / 100;
      value -= key;
      }
  }
  
  let resultSingle = [...new Set (result)];
  
  let occurrences = resultSingle.map(element => getOccurrence(result, element));
  
  changeArray = [...new Set(changeArray)];
  
  if (changePerm === totalInDraw){
    openClosed = 'CLOSED';
    return {status: openClosed, change: cid};
  }else {
    openClosed = 'OPEN';
  }
  
  let returnCid = {status: openClosed, change: 
  [[cidTable[resultSingle[0]], resultSingle[0] * occurrences[0]], 
  [cidTable[resultSingle[1]], resultSingle[1] * occurrences[1]],
  [cidTable[resultSingle[2]], resultSingle[2] * occurrences[2]],
  [cidTable[resultSingle[3]], resultSingle[3] * occurrences[3]],
  [cidTable[resultSingle[4]], resultSingle[4] * occurrences[4]],
  [cidTable[resultSingle[5]], resultSingle[5] * occurrences[5]],
  [cidTable[resultSingle[6]],  resultSingle[6] * occurrences[6]],
  [cidTable[resultSingle[7]], resultSingle[7] * occurrences[7]]]};
  
  
  return {status: openClosed, change : returnCid.change.filter(element =>{for (let i = 0; i < element.length; i ++){
    if (element[i] != undefined){
      return element[i];
      }
     }
    })
   };
  };

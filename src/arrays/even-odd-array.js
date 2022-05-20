//21462675756
//even+odd=nothing
//even+even=*
//odd+odd=-
//214*6*2*67
//214*6*2*67-5-7-56
function insert(val) {
  const arr = val.split("");
  return arr.reduce((acc, cv, i) => {
    const curr = +arr[i];
    const next = +arr[i + 1];
    if (curr % 2 === 0 && next % 2 === 0) {
      acc += curr + "*";
    } else if (curr % 2 !== 0 && next % 2 !== 0) {
      acc += curr + "-";
    } else {
      acc += curr;
    }
    return acc;
  }, "");
}

insert("21462675756");

const data = [
  { Phase: "Phase 1", Step: "Step 1", Task: "Task 1", Value: "5" },
  { Phase: "Phase 1", Step: "Step 1", Task: "Task 2", Value: "10" },
  { Phase: "Phase 1", Step: "Step 2", Task: "Task 1", Value: "15" },
  { Phase: "Phase 1", Step: "Step 2", Task: "Task 2", Value: "20" },
  { Phase: "Phase 2", Step: "Step 1", Task: "Task 1", Value: "25" },
  { Phase: "Phase 2", Step: "Step 1", Task: "Task 2", Value: "30" },
  { Phase: "Phase 2", Step: "Step 2", Task: "Task 1", Value: "35" },
  { Phase: "Phase 2", Step: "Step 2", Task: "Task 2", Value: "40" }
];

// #resul 1

// {
//   "phase 1": "20",
//   "phase 2": "30"
// }

// #result 2
// {
//   "phase 1": [...],
//   "phase 2": [...]
// }

// #result 3
// {
//   "Task 1": [...],
//   "Task 2": [...]
// }

// function groupBy1(xs, key) {
//   return xs.reduce(function(rv, x) {
//     rv[x[key]] = +x["Value"] + (rv[x[key]] ? rv[x[key]] : 0);
//     return rv;
//   }, {});
// }

// console.log(groupBy1(data, "Phase"))

function groupBy2(arr, key) {
  return arr.reduce((acc, cv) => {
    acc[cv[key]] = [...(acc[cv[key]] || []), cv];
    return acc;
  }, {});
}

console.log(groupBy2(data, "Step"));

// {
//   id: "IsNotIdenticalToInput",
//   statement: `has the same characters as argument 0`,
//   expect: (func, args, expectToBeTrue) => {
//     const argAtIndex = args[0];

//     if (argAtIndex.split("").reverse().join("") === argAtIndex) {
//       expectToBeTrue(func(argAtIndex) !== argAtIndex);
//     } else {
//       expectToBeTrue(func(argAtIndex) !== argAtIndex);

//     }
//   },
// },

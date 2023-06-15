let arr = [1, 2, 3];

const changeArr = (arr: number[]) => {
  arr = [1, 2, 5];
  arr[2] = 4;

  console.log(
    "%c 🍯 arr ",
    "font-size:16px;color:#ffffff;background:#e056fd",
    arr
  );
};

changeArr(arr);

console.log(
  "%c 🥔 arr ",
  "font-size:16px;color:#ffffff;background:#ffbe76",
  arr
);

export {};

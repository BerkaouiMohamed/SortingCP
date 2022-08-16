var kaf= [5, 6, 8, 12, 45]


let ejbed_war9a = (arr, num) =>
  [...(arr.filter(n => n <= num)), num, ...(arr.filter(n => n > num))]


console.log(ejbed_war9a(kaf, 3))
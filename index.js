 function map(array,fun){
  let resultarray=[]
  array.forEach(index=>{
    resultarray.push(fun(index))
  })
  return resultarray
}

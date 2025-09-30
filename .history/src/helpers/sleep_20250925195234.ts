export const sleep = (seconds: number = 1) => {

  return new Promise( resolve => {
    setTimeout( () => {
      ,seconds*1000})
  })
};

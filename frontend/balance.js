contract.methods.balance().call()
.then((balance) => {
  console.log("Balance:", balance);
})
.catch((err) => {
  console.error(err);
});
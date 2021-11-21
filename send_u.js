const recipient = "address";

module.exports = (callback) => {
  web3.eth.getAccounts().then((accounts) => {
    web3.eth.sendTransaction(
      {
        from: accounts[2],
        to: recipient,
        value: web3.utils.toWei("10", "ether"),
      },
      callback
    );
  });
};

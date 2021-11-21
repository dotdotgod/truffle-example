const helloWorld = artifacts.require("HelloWorld");

contract("HelloWorld", (accounts) => {
  before(async () => {
    this.instance = await helloWorld.deployed();
  });

  it("should be initialized with correct value", async () => {
    const greeting = await this.instance.say();

    assert.equal(greeting, "Hello, World!", "Wrong Initialized value");
  });

  it("should change the greeting", async () => {
    const val = "hello, blockchain!";

    await this.instance.setGreeting(val, {
      from: accounts[1],
    });
    const greeting = await this.instance.say();
    assert.equal(greeting, val, "Wrong set method");
  });
});

/*jshint esversion: 6 */
const chai = require("chai");

var expect = chai.expect;
chai.should();

const Zombies = require("../zombies.js");

describe("Item", () =>{
  var item;
  beforeEach(function(){
    item = new Zombies.item("ted");
  });
  // let item = new Zombies.item("ted"); //use new instance for testing

  it("should be a class", () =>{
    item.should.be.a.function;
  });

  it("name should be a string", () =>{
    item.name.should.be.a("string");
  });
});

describe("Weapon", ()=>{
  let item = Zombies.item;
  var weapon;
  beforeEach(function(){
    weapon = new Zombies.weapon("ted", 10);
  });
  // let weapon = new Zombies.weapon("ted", 10);

  it("should extend Item class", ()=>{
    weapon.should.be.instanceof(item);
  });

  it("name should be a string", () =>{
    weapon.name.should.be.a("string");
  });

  it("damage should be a number", ()=>{
    weapon.damage.should.be.a("number");
  });
});

describe("Food", ()=>{
  let item = Zombies.item;
  var food;
  beforeEach(function(){
    food = new Zombies.food("cerebrum", 10);
  });
  // let food = new Zombies.food("brains", 50);

  it("should extend Item class", ()=>{
    food.should.be.instanceof(item);
  });

  it("energy should be a number", ()=>{
    food.energy.should.be.a("number");
  });
});

describe("Player", ()=>{
  var player;
  beforeEach(function(){
    player = new Zombies.player("ed", 100, 10, 50);
  });

  it("should be a class", () =>{
    player.should.be.a.function;
  });

  it("name should be a string", () =>{
    // player = new Zombies.player();
    player.name.should.be.a("string");
    expect(player.name).to.not.equal("");
  });

  it("health should be a number", ()=>{
    player.health.should.be.a("number");
  });

  it("strength should be a number", ()=>{
    player.strength.should.be.a("number");
  });

  it("speed should be a number", ()=>{
    player.speed.should.be.a("number");
  });

  it("should be alive", ()=>{
    player.isAlive.should.equal(true);
  });

  it("should not be equipped", ()=>{
    player.equipped.should.equal(false);
  });

  it("maxHealth should equal health value", ()=>{
    player._maxHealth.should.equal(player.health);
  });

  it("pack should be an empty array", ()=>{
    player._pack.should.be.an("array");
    player._pack.should.be.empty;
  });

  it("getPack method should list pack contents", ()=>{
    player._pack = ["money", "sandwich", "butcher knife"];
    player.getPack().should.equal(player._pack);
  });

  it("getMaxHealth method should list pack contents", ()=>{
    player._pack = ["money", "sandwich", "butcher knife"];
    player.getPack().should.equal(player._pack);
  });
});
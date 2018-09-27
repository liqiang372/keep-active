#!/usr/bin/env node
var robot = require("robotjs");

var screenSize = robot.getScreenSize();
var width = screenSize.width;
var x = 0;
setInterval(() => {
  x += 1;
  x = x % width;
  robot.moveMouse(x, 100);
}, 1000);
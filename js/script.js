// Copyright (c) 2023 Alyssia fung All rights reserved
//
// Created by: Alyssia fung
// Created on: Mar 2023
// This file contains the JS functions for index.html

/**
 * This function calculates the volume of a pyramid
 */
"use strict"

function calculate() {
  // input
  const length = parseInt(document.getElementById("length").value)
  const width = parseInt(document.getElementById("width").value)
  const height = parseInt(document.getElementById("height").value)

  // process
  const volume = length * width * height / 3 

  // output
  document.getElementById("volume").innerHTML = "The volume is: " + volume + " cm³"
}

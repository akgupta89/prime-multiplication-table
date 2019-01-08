# Prime Multiplication Table

JavaScript implementation of the Funding Circle Coding Challenge done in Node.JS & ES6. 

## Overview

Create a program that generates a multiplication table of N primes and output it to Command Line. The first row and first column will show a list of prime numbers. 

## Solution
This program uses a variation of the 2-3-5-7 wheel sieve generator to generate prime numbers using a generator function. The base algorithm is a modification of the a prime number generator snipped provided by [Vladimir Agafonkin](https://beta.observablehq.com/@mourner/fast-prime-generator).

## Complexity
**Time Complexity**
- The prime number generator algorithm has a time complexity of **O(n)**.
- The prime multiplication table has a time complexity of **O(n^2/2)**. This optimization is done by mirroring the multiplication table above the top-left to bottom-right diagonal axis, cutting computation time approximately in half.

**Space Complexity**
- The prime number generator algorithm  has a space complexity of **O(sqrt(n))**. 
- The prime multiplication table has a space complexity of **O(n^2)** 

**How does it scale?**

The generator can generate a million prime numbers in under a second on a modern computer, and keep returning prime numbers consecutively, allowing the program to theoretically scale infinitely.

## Install
1. Clone the repo, make sure you have Node.JS installed
2. Run `npm install` to install external dependencies (Table, Jasmine)
3. Run `node main.js 10`
4. Change the number 10 to any positive integer

## Running Tests
1. Run `npm install` to install jasmine
2. Run the tests `node node_modules/jasmine/bin/jasmine`

License
----
> MIT

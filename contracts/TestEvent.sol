// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

contract TestEvent {
    event Teste(address indexed teste, address indexed teste2, uint indexed teste3);
    event Teste(address teste, address teste2, uint teste3);
    event Teste(string teste, string teste2, uint teste3);
}
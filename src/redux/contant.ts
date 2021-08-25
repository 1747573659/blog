/**
 * 该模块是用于定义action对象中type类型的常量值, 目的只有一个：便于管理的同时防止程序员编码出错
 */

export const INCREMENT = 'increment'
export const DECREMENT = 'decrement'
export const ADD_PERSON = 'add_person'
export interface CountAction {
  type: string,
  data: number
}

export interface Person {
  age: string,
  name: string,
  id: string
}

export interface PersontAction {
  type: string,
  data: Person
}
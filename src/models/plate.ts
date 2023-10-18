import { dajb } from "daj";

export default class Plate extends dajb {
 img: string;
 name: string;
 description: string;
 score: number;
 constructor(
  key: string,
  img: string,
  name: string,
  description: string,
  score: number
 ) {
  super(true);
  this.img = img;
  this.name = name;
  this.description = description;
  this.score = score;
 }
}

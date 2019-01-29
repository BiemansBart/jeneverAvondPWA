export class Jenever {
  naam: string;
  type: string;
  rating: number;
  beschrijving: string;
  aantalStemmen: number;
  id: number;


  constructor(naam: string, type: string, rating: number, beschrijving: string, aantalstemmen: number, id: number) {
    this.naam = naam;
    this.type = type;
    this.rating = rating;
    this.beschrijving = beschrijving;
    this.aantalStemmen = aantalstemmen;
    this.id = id;
  }
}

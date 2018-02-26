import { Observable } from "rxjs/Observable";
import { of } from "rxjs/Observable/of";
import { Hero } from "./heroes/hero";
import { HEROES } from "./mock-heroes";

import { Injectable } from "@angular/core";

@Injectable()
export class HeroService {
  constructor() {}

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}

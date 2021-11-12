import { Clouds } from "./clouds.model";
import { Coord } from "./coord.model";
import { Main } from "./main.model";
import { Sys } from "./sys.model";
import { Weather } from "./weather.model";
import { Wind } from "./wind.model";

export class CurrentResponse {
    coord!:Coord;
    weather!:Array<Weather>;
    base!:string;
    main!:Main;
    visibility!:number;
    wind!:Wind;
    clouds!:Clouds;
    dt!:number;
    sys!:Sys;
    timezone!:number;
    id!:number;
    name!:string;
    cod!:number
}

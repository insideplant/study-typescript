import { Foodable } from "./interfaces";
export declare class Food implements Foodable {
    element: HTMLDivElement;
    constructor(element: HTMLDivElement);
    clickEventHandler(): void;
}

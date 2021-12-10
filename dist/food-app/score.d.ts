import { Scoreable } from "./interfaces";
export declare class Score implements Scoreable {
    private static instance;
    get totalScore(): number;
    render(): void;
    private constructor();
    static getInstance(): Score;
}

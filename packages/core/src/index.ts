export type * from "./B.js"
import type { B } from "./B.js";

export interface A {
    a: string;
    b: B
}
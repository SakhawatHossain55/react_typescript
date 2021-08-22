export interface IsPlayer {
    name: string;
    readonly country: string;
    
    palay(): void;
    getAge(): number;
}
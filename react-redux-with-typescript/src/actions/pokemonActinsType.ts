import { type } from "os";

export const POKEMON_LOADING = "POKEMON_LOADING";
export const POKEMON_FAIL = "POKEMON_FAIL";
export const POKEMON_SUCCESS = "POKEMON_SUCESS";

export type PokemonType = {
    abilities: PokemonAbility[],
    sprites: PokemonSprites,
    states: PokemonState[],
}

export type PokemonAbility = {
    ability: {
        name: string
        url: string
    }
}

export type PokemonState = {
    base_state: number,
    state: {
        name: string,
    }
}

export type PokemonSprites = {
    front_default: string
}

interface PokemonLoading {
    type: typeof POKEMON_LOADING;
}

export interface PokemonFile {
    type: typeof POKEMON_FAIL;
}

export interface PokemonSucess {
    type: typeof POKEMON_SUCCESS;
    payload: {
        abilities: PokemonAbility[],
        sprites: PokemonSprites,
        states: PokemonState[],
    }
}

export type PokemonDispatchTypes = PokemonLoading | PokemonFile | PokemonSucess

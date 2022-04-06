import rickAndMorty from "./rick&morty.png"
import toDo from "./toDo1.png"
import pokeApi from "./pokeAPI.png"
import invincibles from "./invincibles.png"


const images = [rickAndMorty, toDo, invincibles, pokeApi]

export default function media(index){
    return images[index]
}
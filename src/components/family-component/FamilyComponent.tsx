import React from 'react';
import {simpsons} from "../../data/arrays-2.ts";
import {ICharacter} from "../models/ICharacter.ts";
import {CharacterComponent} from "../character-component/CharacterComponent.tsx";

export const FamilyComponent = () => {
    return (
        <ul>
            {
                simpsons.map((value:ICharacter,index:number )=>
                <CharacterComponent key={index} item={value} >{value.info}</CharacterComponent>)
            }
        </ul>
    );
};



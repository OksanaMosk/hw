import React, {ReactNode} from 'react';
import {ICharacter} from "../../models/ICharacter.ts";
import "./CharacterComponent.css"

interface ICharacterComponentProps{
    item: ICharacter;
    children:ReactNode
}
export const CharacterComponent= ({item, children}:ICharacterComponentProps ) => {
    return (
      <li>
        <h3>
          {item.name} {item.surname}
        </h3>
        <img src={item.photo} alt={item.name} />
        <p>{children}</p>
      </li>
    );
};



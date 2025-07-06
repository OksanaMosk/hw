import  {ReactNode} from 'react';
import {ICharacter} from "../../models/ICharacter.ts";
import "./CharacterComponent.css"

interface ICharacterComponentProps{
    item: ICharacter;
    children:ReactNode
}
export const CharacterComponent= ({item, children}:ICharacterComponentProps ) => {
    return (
        <li
            className="
    w-[600px] h-100 p-4 shadow-xl rounded-xl text-lime-800 bg-lime-300
    flex flex-col justify-between
    gap-[8px]
    dark:text-gray-400 hover:text-green-950 hover:bg-lime-400
    cursor-pointer transition duration-200 ease-in-out
  "
        >
            <h3 className="text-xl font-bold self-start">
                {item.name} {item.surname}
            </h3>

            <img src={item.photo} alt={item.name} className="max-h-48 object-contain" />

            <p className="text-[12px] ">{children}</p>
        </li>
    );
};

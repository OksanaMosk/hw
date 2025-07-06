
import {simpsons} from "../../data/arrays-2.ts";
import {ICharacter} from "../../models/ICharacter.ts";
import {CharacterComponent} from "../character-component/CharacterComponent.tsx";

export const FamilyComponent = () => {
    return (
        <ul className="flex flex-wrap gap-[30px] justify-center w-5/6 items-center m-[30px]
mx-auto ">
            {
                simpsons.map((value:ICharacter,index:number )=>
                <CharacterComponent key={index} item={value} >{value.info}</CharacterComponent>)
            }
        </ul>
    );
};



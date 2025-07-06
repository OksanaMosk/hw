
import {ModuleComponent} from "./ModuleComponent.tsx";

interface IModulesComponentProps {
    modules: string[];
}
export const ModulesComponent = ({modules}:IModulesComponentProps) => {
    return (
        <ul>
            {
               modules.map((mod,index) =>
                     <ModuleComponent key={index} item={mod} />
                )
            }
        </ul>
    );
};



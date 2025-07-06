
import {ModuleComponent} from "./ModuleComponent.tsx";

interface IModulesComponentProps {
    modules: string[];
}
export const ModulesComponent = ({modules}:IModulesComponentProps) => {
    return (
        <div  className="flex flex-col h-4/7 bg-[#EDE1CF]  shadow-blue-950 shadow-2xl p-4 rounded-xl mt-[20px]   ">
            <h5 className="font-bold size-8">Modules:</h5>
        <ul className="flex  flex-wrap justify-start self-start  w-[50%]
    gap-y-[3px] gap-x-[10px] ">
            {
               modules.map((mod,index) =>
                     <ModuleComponent key={index} item={mod} />
                )
            }
        </ul>
        </div>
    );
};



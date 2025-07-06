interface IModuleComponentProps {
    item: string
}

export const ModuleComponent = ({item}:IModuleComponentProps) => {
    return (
        <li  className="  w-[48%] p-0 m-0 ">
            {item}
        </li>
    );
};

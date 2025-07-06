interface IModuleComponentProps {
    item: string
}

export const ModuleComponent = ({item}:IModuleComponentProps) => {
    return (
        <li>
            {item}
        </li>
    );
};

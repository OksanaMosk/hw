import {FC, ReactNode} from "react";


type MyComponentPropType = { title: string; children?: ReactNode; }

const MyComponent: FC<MyComponentPropType> = ({title, children}) => {

    return (
        <div>
            <h1>{title}</h1>
            <p>{children}</p>
        </div>)
}

export default MyComponent

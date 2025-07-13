import {IUserJsonModel} from "../models/UserJsonModel.ts";
import {FC} from "react";

type UserProps={
    user:IUserJsonModel
}
export  const UserJsonplaceholderComponent:FC<UserProps> = ({user}) => {
    const {id, name, username, email, address, phone, website, company}=user
    return (
        <li  className="flex flex-col justify-between w-[600px] gap-0 text-[#404214] box-border bg-[#eef0d3] hover:text-white hover:bg-[#bab977] p-4 shadow-xl rounded-xl cursor-pointer hover:shadow-2xl hover:border-[1px]">
            <div className="flex justify-between shadow-md ">
                <h2 className="font-bold text-l text-[#bf550d]">{name}</h2>
                <p  className="mb-2">{id}</p>
            </div>
            <p  className=" text-[#bf550d]">Username: {username} (<span className="italic"> {email}</span>)</p>


            <div className="shadow-md mt-2 text-[12px]">
                <h5 className=" ">Address:</h5>
                <p>
                    {address.street}, {address.suite}, {address.city}, {address.zipcode}
                </p>
                <p>
                    Geo: {address.geo.lat}, {address.geo.lng}
                </p>
                <p>Phone: {phone}</p>
                <p  className="mb-2">Website: {website}</p>
            </div>

            <div className="shadow-md mt-2 text-[12px]">
                <h5 className=" ">Company:</h5>
                <p>Company name: {company.name}</p>
                <p>Catch phrase:{company.catchPhrase}</p>
                <p  className="mb-2">Bs: {company.bs}</p>
            </div>

        </li>
    );
};

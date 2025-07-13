import {IUserDummyModel } from '../models/UserDummyModel.ts';
import { FC } from 'react';
import {CompanyComponent} from "./CompanyComponent.tsx";
import {BankComponent} from "./BankComponent.tsx";

type UserProps={
    user:IUserDummyModel;
}
export  const UserDummyjsonComponent:FC<UserProps> = ({user}) => {


    const {  id,
        firstName,
        lastName,
        maidenName,
        age,
        gender,
        email,
        phone,
        username,
        password,
        birthDate,
        image,
        bloodGroup,
        height,
        weight,
        eyeColor,
        hair,
        ip,
        address,
        macAddress,
        university,
        bank,
        company,
        ein,
        ssn,
        userAgent,
        crypto,
        role}=user


    return (
        <li  className="flex flex-col justify-between w-[600px] gap-0 text-[#404214] box-border bg-[#eef0d3] hover:text-white hover:bg-[#bab977] p-4 shadow-xl rounded-xl cursor-pointer hover:shadow-2xl hover:border-[1px]">
            <div className="flex justify-between shadow-md ">
                <h2 className="font-bold text-l text-[#bf550d]">
                    {firstName} {lastName} ( <span className="italic"> maiden Name: {maidenName}</span>)
                </h2>
                <p>ID:{id}</p>
            </div>
            <div className="flex justify-between shadow-md ">
                <img className="w-[100px] object-contain" src={image} alt={lastName}/>
                <div className="text-[12px]">
                    <p>Age: {age} (<span className="italic text-[12px]">{birthDate}</span>)</p>
                    <p>Gender: {gender}</p>
                    <p>Blood Group: {bloodGroup}</p>
                    <p>Height: {height}</p>
                    <p>Weight: {weight}</p>
                    <p>Eye color: {eyeColor}</p>
                    {hair && (
                        <p className="mb-2">Hair: {hair.color}, {hair.type}</p>
                    )}
                </div>
            </div>

            <p className=" text-[#bf550d]">Username: {username} (
                <span className="italic"> {email}</span>)
            </p>
            <p className=" text-[#bf550d] shadow-md ">Password: {password}</p>

            <div className="text-[12px] shadow-md mt-2">

                <p>IP: {ip}</p>
                <p>Phone {phone}</p>
                <p>
                    Address: {address.address}, {address.city}, {address.state}, {address.stateCode},{address.postalCode}, {address.country}
                </p>
                <p>
                    Geo: {address.coordinates?.lat}, {address.coordinates?.lng}
                </p>
                <p>MAC-Address: {macAddress}</p>
                <p  className="mb-2">University: {university}</p>
            </div>

            <div className="flex justify-between shadow-md mt-2">
                {company ? <CompanyComponent company={company} /> : <p>No company</p>}

                {bank ? <BankComponent bank={bank} /> : <p>No bank</p>}
            </div>


            <div className="flex justify-between shadow-md mt-2">
                <div className="w-3/5 text-[12px]">
                    <p>EIN: {ein}</p>
                    {ssn && <p>SSN: {ssn}</p>}
                    <p>User Agent: {userAgent}</p>
                    <p className="mb-2">Role: {role}</p>
                </div>

                <div className="text-[12px]">
                    <h5>Crypto:</h5>
                    <p>Coin: {crypto?.coin}</p>
                    <p>Wallet: {crypto?.wallet}</p>
                    <p>Network: {crypto?.network}</p>
                </div>
            </div>


        </li>
    );
}

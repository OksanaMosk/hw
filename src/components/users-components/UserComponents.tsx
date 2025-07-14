import { IUser } from '../../models/IUser.ts';
import { FC } from 'react';
import { CompanyComponent } from './CompanyComponent.tsx';
import { BankComponent } from './BankComponent.tsx';
import { useNavigate } from 'react-router-dom';

type UserProps = {
  user: IUser
}


export const UserComponents:FC<UserProps> = ({user}) => {
  const  navigation=useNavigate()
  const onButtonClickNavigate=()=>{
    navigation(`/users/${id}/carts`)
  }

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

  const formattedBirthDate = new Date(birthDate).toLocaleDateString('en-GB'); // Формат DD/MM/YYYY


  return (
    <li
      className=" flex flex-col w-[650px] gap-3 text-[#404214] box-border bg-[#eef0d3]  border-[4px] border-white hover:text-[#ffffff] hover:bg-[#bab977] p-3 shadow-xl rounded-xl cursor-pointer  hover:shadow-2xl"
    >
      <div className="flex justify-between shadow-md ">
        <h2 className="font-bold text-l text-[#bf550d]">
          {firstName} {lastName} ({' '}
          <span className="italic"> maiden Name: {maidenName}</span>)
        </h2>
        <p>ID:{id}</p>
      </div>
      <div className="flex justify-between shadow-md ">
        <div className=" self-center w-1/2 text-[#bf550d] ">
          <p>
          Username: {username} (<span className="italic"> {email}</span>)
        </p>
          <p >Password: {password}</p>
        </div>

        <img className="w-[100px] object-contain" src={image} alt={lastName} />

        <div className="text-[12px] m-1">
          <p>
            Age: {age} (<span className="italic text-[12px]">{formattedBirthDate}</span>)
          </p>
          <p>Gender: {gender}</p>
          <p>Blood Group: {bloodGroup}</p>
          <p>Height: {height}</p>
          <p>Weight: {weight}</p>
          <p>Eye color: {eyeColor}</p>
          {hair && (
            <p className="mb-2">
              Hair: {hair.color}, {hair.type}
            </p>
          )}
        </div>
      </div>



      <div className="flex justify-between text-[12px] gap-1 shadow-md mb-2">
        <div  className="w-1/4">
          <p>IP: {ip}</p>
          <p>Phone {phone}</p>
          <p>
            Address: {address.address}, {address.city}, {address.state},{' '}
            {address.stateCode},{address.postalCode}, {address.country}
          </p>
          <p>
            Geo: {address.coordinates?.lat}, {address.coordinates?.lng}
          </p>
          <p>MAC-Address: {macAddress}</p>
          <p className="mb-2">University: {university}</p>
        </div>

        {company ? <CompanyComponent company={company} /> : <p>No company</p>}

        <div className="w-1/4 text-[12px]">
          <p>EIN: {ein}</p>
          {ssn && <p>SSN: {ssn}</p>}
          <p>User Agent: {userAgent}</p>
          <p className="mb-2">Role: {role}</p>
        </div>
      </div>




        <div className="flex text-[12px] shadow-md mb-2">
        {bank ? <BankComponent bank={bank} /> : <p>No bank</p>}

          <div><h5>Crypto:</h5>
            <p>Coin: {crypto?.coin}</p>
            <p>Wallet: {crypto?.wallet}</p>
            <p>Network: {crypto?.network}</p></div>


        <div className="flex items-end" >
          <button
            className=" flex justify-center items-center w-[150px] h-1.5 text-[#404214] box-border bg-[#eef0d3]  border-[2px] border-white hover:text-[#ffffff] hover:bg-[#bab977] p-7 shadow-xl rounded-xl cursor-pointer  hover:shadow-2xl"
            onClick={onButtonClickNavigate}>CARTS 👉
          </button>
        </div>
      </div>
    </li>
  );
}

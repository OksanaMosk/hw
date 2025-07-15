import { FC } from "react";
import {ICompany} from "../../models/IUser.ts";

type CompanyProps = {
  company: ICompany;
};

export const CompanyComponent:FC<CompanyProps> = ({ company }) => {
  if (
    !company ||
    typeof company !== "object" ||
    !company.department?.trim() ||
    !company.name?.trim() ||
    !company.title?.trim() ||
    !company.address ||
    !company.address.address?.trim()
  ) {
    return <div className="text-sm">No company information</div>;
  }

  const { department, name, title, address } = company;
  const coords = address.coordinates;

  return (
    <div className="w-1/4 text-[12px]">
      <h5 className="font-semibold">Company:</h5>
      <p>Department: {department}</p>
      <p>Name: {name}</p>
      <p>Title: {title}</p>
      <p>
        Address: {address.address}, {address.city}, {address.state}, {address.stateCode},{" "}
        {address.postalCode}, {address.country}
      </p>
      {coords && (
        <p className="mb-2">
          Coordinates: {coords.lat}, {coords.lng}
        </p>
      )}
    </div>
  );
};

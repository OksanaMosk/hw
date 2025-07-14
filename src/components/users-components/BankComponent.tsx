import { FC } from "react";
import { IBank } from "../../models/IUser.ts";

type BankProps = {
  bank: IBank | null | undefined;
};

export const BankComponent: FC<BankProps> = ({ bank }) => {
  if (
    !bank ||
    typeof bank !== "object" ||
    !bank.cardNumber?.trim?.() ||
    !bank.iban?.trim?.()
  ) {
    return <div className="text-sm">No bank information</div>;
  }

  return (
    <div className="w-1/3 text-[12px]">
      <h5 className="font-semibold">Bank:</h5>
      {bank.cardExpire && <p>Card Expire: {bank.cardExpire}</p>}
      {bank.cardNumber && <p>Card #: {bank.cardNumber}</p>}
      {bank.cardType && <p>Card Type: {bank.cardType}</p>}
      {bank.currency && <p>Currency: {bank.currency}</p>}
      {bank.iban && <p>IBAN: {bank.iban}</p>}
    </div>
  );
};

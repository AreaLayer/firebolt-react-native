import { UTXOType, UTXO } from "silent-payments";

export const send = async (
  utxos: UTXO[],
  amount: number,
  address: string,
  fee: number,
  changeAddress: string,
  network: string
) => {
  const utxosToSpend = utxos.filter((utxo) => utxo.vout> amount + fee);
  const utxosToChange = utxos.filter((utxo) => utxo.vout <= amount + fee);

  const utxoType = "SPEND" as UTXOType;
  
  // Remove the UTXO constructor call as it's being used as a type, not a value
  // Instead, return an object that matches the UTXO type structure
  return {
    type: utxoType,
    utxosToSpend,
    utxosToChange,
    amount,
    fee,
    address,
    changeAddress,
    network
  };
};  
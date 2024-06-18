import { Bitbox } from 'bitbox-api';

export const bitbox: Bitbox = new Bitbox();

async function getAddress(): Promise<string> {
    return bitbox.Address.details(process.env.BITBOX_ADDRESS as string);
}
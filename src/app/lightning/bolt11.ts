import { BOLT11, Invoice } from '@breeztech/react-native-breez-sdk';

const BOLT11 = {

  Payment: String,
  Invoice: String,
  Amount: Number,
  }
    
const optionalAmountMsat = 3000000
const optionalLabel = '<label>'
const response = await sendPayment({
  bolt11,
  amountMsat: optionalAmountMsat,
  label: optionalLabel
})
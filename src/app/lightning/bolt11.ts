import {sendPayment} from '../lightning';
import { Bolt11 } from '../lightning'

const BOLT11 = {

Payment: String,
Invoice: String,
Amount: Number,
    
};
    const bolt11 = 'bolt11 invoice'
    const optionalAmountMsat = 3000000
    const optionalLabel = '<label>'
    const response = await sendPayment({
      bolt11,
      amountMsat: optionalAmountMsat,
      label: optionalLabel
    })
    console.log(response)
  
  
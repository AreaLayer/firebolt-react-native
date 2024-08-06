import { generateInvoice } from "../app/lightning";
import { SCREEN_ONX_ADDRESS } from "../app/constants";

interface ScreenOnChain {
  [SCREEN_ONX_ADDRESS]: {
    invoice: string;
  };
}
interface {
  OnboardingHome: 'OnboardingHome';
  Send: 'Send';
  Receive: 'Receive';
  generateInvoice: 'generateInvoice';
  generateAddress: 'generateAddress';

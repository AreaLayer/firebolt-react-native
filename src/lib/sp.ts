import { NativeModules } from 'react-native';
import { SilentPaymentGroup } from '../app/SP/send';

export const { SP } = NativeModules;

export default SP;


export const SilentPaymentGroups = {
    [SilentPaymentGroup.SP_SILENT_PAYMENT_GROUP_1]: 'SP_SILENT_PAYMENT_GROUP_1',
}
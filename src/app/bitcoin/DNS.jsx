import Bip353 from 'bip353-react-native';
import { AesSuccessActionDataResult } from '@breeztech/react-native-breez-sdk-liquid';
import { LiquidAddressData } from '@breeztech/react-native-breez-sdk-liquid';
const Bip353 = {
    getDNS: async () => {
        return await Bip353.getDNS();
    },
    getDNSByDomain: async (domain) => {
        return await Bip353.getDNSByDomain(domain);
    },
    getDNSByDomainAndType: async (domain, type) => {
        return await Bip353.getDNSByDomainAndType(domain, type);
    },
    getDNSByDomainAndTypeAndIndex: async (domain, type, index) => {
        return await Bip353.getDNSByDomainAndTypeAndIndex(domain, type, index);
    },
    getDNSByDomainAndTypeAndIndexAndValue: async (domain, type, index, value) => {
        return await Bip353.getDNSByDomainAndTypeAndIndexAndValue(domain, type, index, value);
    }
}

const AesSuccessActionDataResult = {
    getAesSuccessActionDataResult: async (data) => {
        return await AesSuccessActionDataResult.getAesSuccessActionDataResult(data);
    }
}

const LiquidAddressData = {
    getLiquidAddressData: async (data) => {
        return await LiquidAddressData.getLiquidAddressData(data);
    }
}
export default Bip353;
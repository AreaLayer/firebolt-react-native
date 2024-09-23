import Bip353 from 'bip353-react-native';

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

export default Bip353;
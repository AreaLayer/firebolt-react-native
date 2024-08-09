import { LSP } from 'firebolt-react-native';
import { View, Text } from 'react-native';

var LSP = new LSP();

export const LSP = () => {
  return (
    <View>
      <Text>Set LSP</Text>
      <Button>Set LSP</Button>
      <LSP />
    </View>
  );
};
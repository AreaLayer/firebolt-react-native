import * as bitbox from 'bitbox-api';

// Run this in e.g. a button onClick event handler.
async function example() {
  try {
    const onClose = () => {
      // Handle disconnect.
    };
    const unpaired = await bitbox.bitbox02ConnectAuto(onClose);
    const pairing = await unpaired.unlockAndPair();
    const pairingCode = pairing.getPairingCode();
    if (pairingCode !== undefined) {
      // Display pairingCode to user
    }
    const bb02 = await pairing.waitConfirm();
    console.log('Product', bb02.product());
    console.log('Supports Ethereum functionality (Multi edition)?', bb02.ethSupported());
    const deviceInfos = await bb02.deviceInfo();
    console.log('Device infos:', deviceInfos);
  } catch (err) {
    const typedErr = bitbox.ensureError(err);
    console.log(typedErr);
  }
}
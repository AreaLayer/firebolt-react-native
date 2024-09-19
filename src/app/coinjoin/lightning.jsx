import { TxMerkleProof } from '@mempool/mempool.js/lib/interfaces/bitcoin/transactions';
import { sendOnchain, receiveOnchain } from '@breeztech/react-native-breez-sdk';
import { Coinjoin } from './Coinjoin';

export const Lightning = ({
  txMerkleProof,
  txMerkleProofIndex,
  txMerkleProofs,
  txMerkleProofsIndex,
  txMerkleProofsLength,
});

export const Onchain = ({
  txMerkleProof,
  txMerkleProofIndex,
  txMerkleProofs,
  txMerkleProofsIndex,
  txMerkleProofsLength,
});

export const Coinjoin = ({
  txMerkleProof,
  txMerkleProofIndex,
  txMerkleProofs,
  txMerkleProofsIndex,
  txMerkleProofsLength,
});

export const TxMerkleProof = ({
  txMerkleProof,
  txMerkleProofIndex,
  txMerkleProofs,
  txMerkleProofsIndex,
  txMerkleProofsLength,
});

export const sendOnchain = ({
  amount: Number,
  destination: String,
  feerate: String,
})

export const receiveOnchain = ({
  amount: Number,
  destination: String,
  feerate: String,
})
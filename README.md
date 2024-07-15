### Firebolt Wallet - React Native Version ⚡🕵️

⚠️**Wallet in WIP/development**

⚠️**Alpha stage**

[![Bitcoin-only](https://img.shields.io/badge/bitcoin-only-FF9900?logo=bitcoin)](https://twentyone.world)
[![LN](https://img.shields.io/badge/lightning-792EE5?logo=lightning)](https://mempool.space/lightning)

![Banner](https://github.com/AreaLayer/FireBolt/raw/main/src/asset/firebolt_logo_readme.png)

>React native version for Firebolt wallet with Bitcoin, Lightning Network/LSP (Breez), Coinjoin, Nostr, Payjoin, Taproot

### Overview

*Cypherpunk App*

Firebolt is a wallet designed by a Bitcoiner for Bitcoiners looking for privacy using Payjoin, Lightning Network, Coinjoin, Bitcoin and Nostr

Each individual has their own identity using Nostr

### The problem

Central Banks and centralized social media

### Firebolt's solution

Firebolt offers a Bitcoin wallet that supports both on-chain and lightning transactions. The application runs a custom, non-routing Lightning node created with the Breez SDK on the user's mobile phone. 

Users can back up their Bitcoin and Lightning keys with a standard BIP-39 seed and backup channel 

The other main features Firebolt supports are as follows:

📱 Contact list via Npub

🪙 Payments via Lightning Network

⚡Non custodial via on-chain and Lightning Network

⚛️ Coinjoin and Payjoin for privacy

🫂Buy Bitcoin via P2P apps (PeachBitcoin, Bisq, RoboSats)

### Feature

- Lightning Network (Breez)

- Nostr (create profiles)

- Bitcoin

- LSP

- [CoinJoin powered by CoinjoinXT, Lightning Network, Taproot and Coinswap](https://github.com/AreaLayer/CoinjoinXT)

- Multisig 

- PayJoin

- Bitcoin-only

- Backup using Nostr keys and BIP-39

- Management Nostr Keys

- Miniscript

- Contact list via Nostr (NPub)

- Buy Bitcoin via P2P apps (PeachBitcoin, Bisq, RoboSats)

- RBF

- User friendly

- Kotlin and Swift (iOS and Android)

## Core functions 

The main functions are [here](https://github.com/AreaLayer/FireBolt/tree/main/app)

## Roadmap

-  [x] Core functions
-  [x] Breez (WIP)
-  [x] Nostr (NDK)
-  [x] UI 
-  [ ] API Peach Bitcoin/RoboSats/Bisq
-  [ ] Portal support (NFC)
-  [x] Taproot functions (WIP)
-  [ ] Beta App (Android - via APK)
-  [ ] HD Taproot Wallet
-  [ ] Full RBF
-  [x] Signet
-  [ ] Submarine Swap 
-  [ ] Final App
-  [ ] F-Droid
-  [ ] BIP-352 (Silent Payments)
-  [ ] Payjoin (React Native) 
-  [ ] Recompile code
-  [ ] Muntinynet
-  [ ] Electrum server support
-  [ ] Unit tests
-  [ ] NPM release 
-  [x] Firebolt Electrum Plugin
-  [ ] ZK proof for CJ
-  [ ] Liquid?
-  [ ] BOLT12
-  [ ] BOLT11
-  [ ] NWC (NDK)
-  [ ] LNURL
-  [ ] Zap
-  [ ] PSBT 
-  [x] Bitcoin Widget
-  [ ] Miniscript
-  [ ] Library for Wallet
-  [ ] Upgrade Changelog


## Donations

[Rsync](https://tourniquet.app/donate/Rsync)

## Electrum Plugin

While our wallet is in development, you can test our Coinjoin using Electrum wallet Plugin

[Firebolt Electrum](https://github.com/AreaLayer/firebolt-electrum)

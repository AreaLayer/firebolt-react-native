// src/types/payjoin-react-native.d.ts
declare module 'payjoin-react-native' {
    export class PayjoinURL {
      static psbt: any;
      constructor(url: string);
      // Add any other methods or properties you know PayjoinURL uses
      parse(): object;  // Example method
    }
  }
  
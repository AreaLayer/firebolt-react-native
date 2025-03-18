interface IScreenNames {
  ExitZKPool(ExitZKPool: any): unknown;
  EnterZKPool(EnterZKPool: any): unknown;
  OnboardingHome: 'OnboardingHome';
  CreateWallet: 'CreateWallet';
  ConfirmSeed: 'ConfirmSeed';
  PinSetup: 'PinSetup';
  ConfirmPin: 'ConfirmPin';
  Dashboard: 'Dashboard';
  VerifyPin: 'VerifyPin';
}
export const SCREEN_NAMES: IScreenNames = {
  OnboardingHome: 'OnboardingHome',
  CreateWallet: 'CreateWallet',
  ConfirmSeed: 'ConfirmSeed',
  PinSetup: 'PinSetup',
  ConfirmPin: 'ConfirmPin',
  Dashboard: 'Dashboard',
  VerifyPin: 'VerifyPin',
  ExitZKPool: function (_ExitZKPool: any): unknown {
    throw new Error("Function not implemented.");
  },
  EnterZKPool: function (_EnterZKPool: any): unknown {
    throw new Error("Function not implemented.");
  }
};

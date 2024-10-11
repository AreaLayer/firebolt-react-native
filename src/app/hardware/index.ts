import { ReactPortal } from "react";
import { bitbox } from "./bitbox/bitbox";

aysnc function getHardware(): Promise<ReactPortal> {
  return bitbox();
}
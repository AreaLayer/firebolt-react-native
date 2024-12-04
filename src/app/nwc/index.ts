import { NDKNwc } from "@nostr-dev-kit/ndk";
import { NDKNwcResponse } from "@nostr-dev-kit/ndk";

class Nwc {

  constructor(_ndk: NDKNwc) {
  }

  async getNwc(nwc: string): Promise<NDKNwcResponse> {
    try {
      // Assuming `nwc` is a method from `NDKNwc`, ensure this method exists
      const response = await this.getNwc(nwc); 
      console.log("NWC response:", response);
      return response;
    } catch (error) {
      console.error("Error fetching NWC data:", error);
      throw error; // Rethrow the error after logging it
    }
  }}

export function nwc(ndk: NDKNwc): Nwc {
  return new Nwc(ndk);
}
export default Nwc;


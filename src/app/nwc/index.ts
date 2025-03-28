import NDKNwc from "@nostr-dev-kit/ndk";
import { NDKRpcResponse } from "@nostr-dev-kit/ndk";

class Nwc {

  constructor(_ndk: NDKNwc) {
  }

  async getNwc(nwc: string): Promise<NDKRpcResponse> {
    try {
      // Assuming `nwc` is a method from `NDKNwc`, ensure this method exists
      const response = await this.getNwc(nwc); 
      console.log("NWC response:", response);
      // Handle the response as needed
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


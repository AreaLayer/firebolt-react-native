import { NDKNwc} from "@nostr-dev-kit/ndk";
import { NDKNwcResponse } from "@nostr-dev-kit/ndk";

class Nwc {
  ndk: NDKNwc;
  constructor(ndk: NDKNwc) {
    this.ndk = ndk;
  }

  async getNwc(nwc: string): Promise<NDKNwcResponse> {
    const response = await this.ndk.nwc(nwc);
    return response;
  }
}
export default Nwc;


// client.ts
import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);

interface WireguardClient {
  initVPN: (configPath: string) => Promise<boolean>;
  checkStatus: () => Promise<string>;
  shutdown: () => Promise<boolean>;
}

class WireguardClientImpl implements WireguardClient {
  private interfaceName: string = 'wg0';

  async initVPN(configPath: string): Promise<boolean> {
    try {
      // Ensure WireGuard tools are installed
      await execPromise('wg --version');
      
      // Apply WireGuard configuration
      await execPromise(`wg-quick up ${configPath}`);
      
      // Verify connection
      const status = await this.checkStatus();
      return status.includes('active');
    } catch (error) {
      console.error('Failed to initialize VPN:', error);
      return false;
    }
  }

  async checkStatus(): Promise<string> {
    try {
      const { stdout } = await execPromise(`wg show ${this.interfaceName}`);
      return stdout;
    } catch (error) {
      console.error('Status check failed:', error);
      return 'inactive';
    }
  }

  async shutdown(): Promise<boolean> {
    try {
      await execPromise(`wg-quick down ${this.interfaceName}`);
      return true;
    } catch (error) {
      console.error('Shutdown failed:', error);
      return false;
    }
  }
}

const client: WireguardClient = new WireguardClientImpl();
export default client;
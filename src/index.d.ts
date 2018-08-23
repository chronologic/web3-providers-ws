declare module '@chronologic/web3-providers-ws' {
  export class WebsocketProvider {
    constructor(url: string, options?: any);
    send(payload: any, callback: any): any;
    sendAsync(payload: any, callback: any): any;
  }
}
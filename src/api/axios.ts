import { Axios } from "axios"

export class Request {
  private axios = new Axios();

  public async to(url: string) {
    
    return await this.axios.get(url);
  }
}
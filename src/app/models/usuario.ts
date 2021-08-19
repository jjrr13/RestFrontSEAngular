export class Usuario {
    id: number;
    username: string;
    password:string;
    createAt:string;
    enabled: boolean;

    constructor(){
      this.id = 0;
      this.username = '';
      this.password = '';
      this.createAt = '';
      this.enabled = false;
    }
}

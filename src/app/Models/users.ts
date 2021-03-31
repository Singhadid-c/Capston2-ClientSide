export class Users{
    id:number | undefined;
    username:string | undefined;
    position:string | undefined;
}
export interface UsersAll {
    result:Users[],
    message:string
}
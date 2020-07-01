export class User {
    constructor(
        public id: number,
        public carnet: string,
        // tslint:disable-next-line: variable-name
        public nombre_completo: string,
        public imagen: File,
        public userpass: string,
        public password: string,
        public email: string,
        public perfil: string,
    ) {

    }
}

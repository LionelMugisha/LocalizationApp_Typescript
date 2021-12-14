export interface IRegister {
	email: string;
	password: string;
}

export interface ILogin {
	email: string;
	password: string;
}

export type AuthContextState = {
	currentUser: any | null;
	register: (email: string, password: string) => void;
	login: (email: string, password: string) => void;
	logout: () => void;
};
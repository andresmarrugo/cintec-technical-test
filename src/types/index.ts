export enum DocumentTypeEnum {
    CC = "CC",
    CE = "CE",
    PP = "PP",
    RC = "RC"
}

export interface User {
    name: String;
    document_type: DocumentTypeEnum;
    document_number: Number;
    country: string
    phone: Number,
    email: String

}

export type IFormInput = Pick<User, "document_type" | "document_number" | "country">

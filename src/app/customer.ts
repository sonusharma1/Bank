import { AccountDetail } from "./account-detail";
import { User } from "./user";

export class Customer extends User {
    customerName!: String;
	customerAddress!: String;
	customerPanNo!: String;
	customerAdharNo!: String;
    customerPhone!: String;
    customerEmail!: String;
    userName!: String;
    password!: String;
    role !: string;
    accountDetail: AccountDetail = new AccountDetail;

    constructor()
    {
        super();
    }
}

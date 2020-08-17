import { Account } from './../../model/dto/account';
import { PipeTransform, Pipe } from '@angular/core'

@Pipe({
    name: 'accountFilter'
})
export class AccountFilter implements PipeTransform{
    transform(value: Account[], login: string, role: string) {
        let predicate: (account: Account) => boolean = account => true;
        if (login) predicate = account => predicate && account.login.toUpperCase().includes(login.toUpperCase());
        if (role) predicate = account => predicate && account.role === role;

        return value.filter(predicate);
    }

}
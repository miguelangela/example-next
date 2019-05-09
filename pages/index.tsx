import Link from 'next/link';
import {getUsers} from '../rest-api/github';
import {User} from '../model/user';
import * as Next from 'next';
import { Table } from '../components/users/table';


interface Props {
    users: User[];
}

const Index: Next.NextFunctionComponent<Props> = (props) => (
    <div>
        <p> Hola  caracola</p>
        <Table users={props.users} />
        <Link href="/user-info">
            <a>Navega a user info</a>
        </Link>
    </div>
);

Index.getInitialProps = async () => {
    const users = await getUsers();
    console.log(users);

    return {
        users,
    }
}

export default Index;
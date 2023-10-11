import Link from "next/link";
import {signIn, signOut, useSession} from "next-auth/react";

export default function SideNav() {
    const session = useSession()
    const user = session.data?.user
    return (
        <nav className="sticky top-0 self-start px-2 py-4">
            <ul className=" flex flex-col items-start gap-2 whitespace-nowrap">
                <li>
                    <Link href="/">Home</Link>
                </li>
                {user != null && (<li>
                    <Link href={`/profiles/${user.id}`}>Profile</Link>
                </li>)}
                {user == null ? (<li>
                    <button onClick={() => void signIn()}>Log-in</button>
                </li>) : (<li>
                    <button onClick={() => void signOut()}>Log-out</button>
                </li>)}
            </ul>
        </nav>
    )
}

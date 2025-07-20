
import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/actions/auth.action";
import { ReactNode } from 'react';
import Image from 'next/image';
import Link from "next/link";



const RootLayout = async ({children}:{children: ReactNode}) => {
    const isUserAuthenticated = await isAuthenticated();

    if(!isUserAuthenticated) redirect('/sign-in');
    return (
        <div className={"root-layout"}>
            <nav>
                <Link href={"/"} className={"flex items-centre gap-2"}>
                    <Image src={"/logo.svg"} alt={"logo"} width={38} height={32}/>
                    <h2 className={"text-primary-100"}>Prepise</h2>
                </Link>

                {children}
            </nav>

        </div>
    )
}
export default RootLayout

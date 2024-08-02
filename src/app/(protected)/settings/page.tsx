import { auth, signOut } from "@/auth";

const SettingsPage = async () => {
    const user = await auth();
    return (
        <h1>
            Settings Page: 
            {JSON.stringify(user)}

            <form action={async () => {
                "use server";
                await signOut();
            }}>
                <button type="submit">
                    Sign out
                </button>
            </form>
        </h1>
    );
}

export default SettingsPage;
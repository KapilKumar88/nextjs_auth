import { db } from "@/lib/db";

export const getVerificationTokenByToken = async (
    token: string
) => {
    try {
        return await db.verificationToken.findUnique({
            where: {
                token
            }
        });
    } catch (error) {
        return null;
    }
}

export const getVerificationTokenByEmail = async (
    email: string
) => {
    try {
        return await db.verificationToken.findUnique({
            where: {
                email
            }
        });
    } catch (error) {
        return null;
    }
}
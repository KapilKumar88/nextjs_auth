import { v4 as uuidv4 } from "uuid";
import { db } from "./db";

export const generateVerificationToken = async (email: string) => {
    const token = uuidv4();
    const expiration = new Date(new Date().getTime() + 3600 * 1000);

    await db.verificationToken.delete({
        where: {
            email
        }
    });

    return await db.verificationToken.create({
        data: {
            email,
            token,
            expires: expiration
        }
    });
}
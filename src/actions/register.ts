"use server";
import { RegisterSchema } from "@/schemas/index";
import * as z from "zod";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";


export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid credentials" };
    }

    const { email, name, password } = validatedFields.data;
    const hashedPwd = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
        return { error: "User already exists" };
    }

    await db.user.create({
        data: {
            email,
            name,
            password: hashedPwd
        }
    });


    return { success: "User created!" };
}
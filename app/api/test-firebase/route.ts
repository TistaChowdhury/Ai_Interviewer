import { db } from "@/Firebase/admin";

export async function GET() {
    try {
        await db.collection("test").add({
            message: "firebase working",
            createdAt: new Date().toISOString(),
        });

        return Response.json({
            success: true,
            firebase: "working",
        });
    } catch (error) {
        console.error("FIREBASE ERROR:", error);

        return Response.json({
            success: false,
            error,
        });
    }
}
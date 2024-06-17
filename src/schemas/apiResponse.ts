import { NextResponse } from "next/server";
import { z } from "zod"

const responseSchema = z.object({
    ok: z.boolean().default(true),
    result: z.any().nullable().optional(),
    errorMessage: z.string().nullable().optional(),
    status: z.number().default(200).optional()
})

export type ApiResponseType = z.infer<typeof responseSchema>;

export function ApiResponse(res: ApiResponseType) {
    const data = responseSchema.parse(res);

    return NextResponse.json(data, { status: data.status });
}
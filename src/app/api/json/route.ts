import { openai } from "@/lib/openai"
import { NextRequest, NextResponse } from "next/server"
import { ZodTypeAny, z } from "zod"
import { EXAMPLE_ANSWER, EXAMPLE_PROMPT } from "./example"
import { RetryablePromise } from "@/utils/promise"
import { auth } from "@/lib/auth"
import { NextApiRequest } from "next"
import { getUserByApiKey } from "@/data/user"

const determineSchemaType = (schema: any): string => {
  if (!schema.hasOwnProperty("type")) {
    if (Array.isArray(schema)) {
      return "array"
    } else {
      return typeof schema
    }
  }
  return schema.type
}

const jsonSchemaToZod = (schema: any): ZodTypeAny => {
  const type = determineSchemaType(schema)

  switch (type) {
    case "string":
      return z.string().nullable()
    case "number":
      return z.number().nullable()
    case "boolean":
      return z.boolean().nullable()
    case "array":
      return z.array(jsonSchemaToZod(schema.items)).nullable()
    case "object":
      const shape: Record<string, ZodTypeAny> = {}
      for (const key in schema) {
        if (key !== "type") {
          shape[key] = jsonSchemaToZod(schema[key])
        }
      }
      return z.object(shape)
    default:
      throw new Error(`Unsupported schema type: ${type}`)
  }
}

export const POST = async (req: NextRequest) => {
  const body = await req.json()

  const schema = z.object({
    apiKey: z.string()
  })

  const { apiKey } = schema.parse(body);

  const user = await getUserByApiKey(apiKey)

  return new Response(JSON.stringify({
    user
  }))

//   const body = await req.json()

//   const genericSchema = z.object({
//     data: z.string(),
//     format: z.object({}).passthrough(),
//   })

//   console.log(body);
//   const { data, format } = body


// //   const dynamicSchema = jsonSchemaToZod(format)

//   const content = `DATA: \n"${data}"\n\n-----------\nExpected JSON format: ${JSON.stringify(
//     format,
//     null,
//     2
//   )}\n\n-----------\nValid JSON output in expected format:`

//   console.log(content)

//   const validationResult = await RetryablePromise.retry<string>(
//     3,
//     async (resolve, reject) => {
//       try {
//         const res = await openai.chat.completions.create({
//           model: "gpt-4o",
//           messages: [
//             {
//               role: "assistant",
//               content:
//                 "You are an AI that converts unstructured data into the attached JSON format. You respond with nothing but valid JSON based on the input data. Your output should DIRECTLY be valid JSON, nothing added before or after. You will begin right with the opening curly brace and end with the closing curly brace. Only if you absolutely cannot determine a field, use the value null.",
//             },
//             {
//               role: "user",
//               content: EXAMPLE_PROMPT,
//             },
//             {
//               role: "system",
//               content: EXAMPLE_ANSWER,
//             },
//             {
//               role: "user",
//               content,
//             },
//           ],
//         })

//         const text = res.choices[0].message.content

//         // const validationResult = dynamicSchema.parse(JSON.parse(text || ""))

//         return resolve(JSON.parse(text || ""))
//       } catch (err) {
//         reject(err)
//       }
//     }
//   )

  // return NextResponse.json(validationResult, { status: 200 })
}
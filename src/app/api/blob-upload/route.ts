import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { NextResponse } from "next/server";

// Issues short-lived client tokens so the browser can upload order photos
// (stamp / team colours / belt render) directly to Blob storage, bypassing
// the ~4.5MB request body limit on serverless functions like /api/send-order.
export async function POST(request: Request): Promise<NextResponse> {
  const body = (await request.json()) as HandleUploadBody;

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async () => {
        return {
          allowedContentTypes: ["image/png", "image/jpeg", "image/webp", "image/gif"],
          maximumSizeInBytes: 25 * 1024 * 1024,
        };
      },
      onUploadCompleted: async () => {
        // No server-side action needed — the client receives the blob URL
        // directly and includes it in the order payload.
      },
    });

    return NextResponse.json(jsonResponse);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : String(error) },
      { status: 400 },
    );
  }
}

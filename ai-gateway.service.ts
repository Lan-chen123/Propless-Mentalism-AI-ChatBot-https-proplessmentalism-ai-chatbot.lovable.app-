import { createOpenAICompatible } from "@ai-sdk/openai-compatible";

const GATEWAY_BASE_URL = "https://ai.gateway.lovable.dev/v1";

/**
 * Creates an AI SDK provider pointed at the Lovable AI Gateway.
 * The global LOVABLE_API_KEY powers the whole app — individual users never
 * need to supply their own key.
 */
export function createLovableAiGatewayProvider(apiKey: string) {
  return createOpenAICompatible({
    name: "lovable",
    baseURL: GATEWAY_BASE_URL,
    headers: { "Lovable-API-Key": apiKey },
  });
}

export { GATEWAY_BASE_URL };

interface Window {
  translations?: Record<string, Record<string, string>>;
  EMAILJS_CONFIG?: { publicKey: string; serviceId: string; templateId: string };
  emailjs?: {
    send: (
      serviceId: string,
      templateId: string,
      params: Record<string, unknown>,
      options: { publicKey: string },
    ) => Promise<unknown>;
  };
}

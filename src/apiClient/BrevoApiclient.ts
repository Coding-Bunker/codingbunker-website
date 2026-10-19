import brevo, { ContactsApiApiKeys } from "@getbrevo/brevo"

const BrevoApiClient = () => {
  const addASubscriber = (email: string) => {
    if (!process.env.BREVO_STANDARD_CONTACT_LIST || !process.env.BREVO_API_KEY)
      return

    const apiClient = new brevo.ContactsApi()
    apiClient.setApiKey(ContactsApiApiKeys.apiKey, process.env.BREVO_API_KEY)
    apiClient.addContactToList(
      parseInt(process.env.BREVO_STANDARD_CONTACT_LIST),
      {
        emails: [email],
      },
    )
  }

  return {
    addASubscriber,
  }
}

export default BrevoApiClient

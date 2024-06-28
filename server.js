import brevo from '@getbrevo/brevo'

const apiInstance = new brevo.TransactionalEmailsApi();

apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BRAVE_API_KEY
)

async function main() {

  // db query
  const user = {
    name: 'Maria',
    email: 'maria@gmail.com'
  }

  try {
    const sendSmtpEmail = new brevo.SendSmtpEmail();

    sendSmtpEmail.subject = "Hello world from brevo and Nodejs"
    sendSmtpEmail.to = [
      { email: user.email, name: user.name }
    ]
    sendSmtpEmail.htmlContent = `
    <html>
      <body>
        <h1>Hola ${user.name}</h1>
        <p>This is a test email</p>
        <button>Click me</button>
        <a href="https://google.com">Go to my website</a>
      </body>
    <html>
  `
    sendSmtpEmail.sender = {
      name: 'CloudVision',
      email: 'franz.medrano@icloud.com'
    }

    const result = await apiInstance.sendTransacEmail(sendSmtpEmail)

    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

main();
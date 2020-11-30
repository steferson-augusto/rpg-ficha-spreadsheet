import { NextApiRequest, NextApiResponse } from 'next'
import { GoogleSpreadsheet } from 'google-spreadsheet'

export default async function (request: NextApiRequest, response: NextApiResponse) {  
  const doc = new GoogleSpreadsheet('1BdsSgMeU4HeP-OP9kwX24ikUqaiGuDiit3moNb52Tdo')

  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY,
  })

  await doc.loadInfo()
  const sheet = doc.sheetsById["14575313"]

  switch (request.method) {
    case 'GET': {

      response.send({ ok: true })
      break
    }
    default:
      response.send({ message: 'Apenas método GET é permitido' })
  }  
}
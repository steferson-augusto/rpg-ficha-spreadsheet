import { NowRequest, NowResponse } from '@vercel/node'
import { GoogleSpreadsheet } from 'google-spreadsheet'

interface Data {
  label: string
  value: string
}

export interface AtributosInterface {
  rowIndex: number
  label: string
  data: Data[]
}

export default async function (request: NowRequest, response: NowResponse) {
  const doc = new GoogleSpreadsheet('1BdsSgMeU4HeP-OP9kwX24ikUqaiGuDiit3moNb52Tdo');

  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY,
  })

  await doc.loadInfo()
  const sheet = doc.sheetsById["1604649246"]

  await sheet.loadHeaderRow()
  const headers = [...sheet.headerValues]
  
  if (request.method === 'GET') {
    const atributo = headers.shift()

    const rows = await sheet.getRows({ limit: 7, offset: 0 })
    const atributos: AtributosInterface[] = rows.map(row => ({
      rowIndex: row.rowIndex,
      label: row[atributo],
      data: headers.map(header => ({
        label: header,
        value: row[header]
      }))
    }))
    
    response.send({ atributos })
  } else if (request.method === 'PUT') {
    const { value, rowIndex, label } = request.body

    const rows = await sheet.getRows({ limit: 7, offset: 0 })
    
    rows[rowIndex][label] = value
    rows[rowIndex].save()
    response.send({ ok: true })
  }
  
}
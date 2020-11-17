import { NextApiRequest, NextApiResponse } from 'next'
import { GoogleSpreadsheet } from 'google-spreadsheet'

interface Data {
  label: string
  value: string
}

export interface PericiaInterface {
  rowIndex: number
  label: string
  data: Data[]
}

export const getAllPericias = async (): Promise<PericiaInterface[]> => {
  const doc = new GoogleSpreadsheet('1BdsSgMeU4HeP-OP9kwX24ikUqaiGuDiit3moNb52Tdo');

  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY,
  })

  await doc.loadInfo()
  const sheet = doc.sheetsById["1404463700"]

  await sheet.loadHeaderRow()
  const headers = [...sheet.headerValues]
  const label = headers.shift()

  const rows = await sheet.getRows()
  const pericias: PericiaInterface[] = rows.map((row, index) => ({
    rowIndex: index,
    label: row[label],
    data: headers.map(header => ({
      label: header,
      value: row[header] || ''
    }))
  }))

  return pericias
}

export default async function (request: NextApiRequest, response: NextApiResponse) {  
  const doc = new GoogleSpreadsheet('1BdsSgMeU4HeP-OP9kwX24ikUqaiGuDiit3moNb52Tdo')

  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY,
  })

  await doc.loadInfo()
  const sheet = doc.sheetsById["1404463700"]

  await sheet.loadHeaderRow()
  
  if (request.method === 'PUT') {
    const { value, rowIndex, label } = request.body

    const rows = await sheet.getRows()
    rows[rowIndex][label] = value
    rows[rowIndex].save()
    response.send({ ok: true })
  }
  
}
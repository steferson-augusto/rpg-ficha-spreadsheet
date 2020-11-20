import { NextApiRequest, NextApiResponse } from 'next'
import { GoogleSpreadsheet } from 'google-spreadsheet'

export interface ItemInterface {
  label: string
  weight: number
  row: number
  note?: string | null
  id: string
}

export interface StorageInterface {
  label: string
  column: number
  itens: ItemInterface[]
  note?: string
}

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
      await sheet.loadCells([])

      let column = 0
      let repeat = false
      let storage: StorageInterface[] = []
      do {
        repeat = false
        const cel = sheet.getCell(0, column)
        if (cel.value) {
          let itens: ItemInterface[] = []
          let row = 1
          let loop = false
          do {
            loop = false
            const label = sheet.getCell(row, column).value as string
            if (label) {
              const note = sheet.getCell(row, column).note as string || null
              const weight = Number(sheet.getCell(row, column + 1).value) || 0
              const id = `${row}-${column}`
              itens.push({ label, weight, row, note, id })

              loop = true
            }

            row += 1
          } while (loop)

          storage.push({ label: cel.value as string, column, itens, note: cel.note })
          repeat = true
        }

        column += 3
      } while (repeat)

      response.send(storage)
      break
    }
    default:
      response.send({ message: 'Apenas método GET é permitido' })
  }  
}
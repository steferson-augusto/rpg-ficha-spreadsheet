import { NextApiRequest, NextApiResponse } from 'next'
import { GoogleSpreadsheet, Border, Color } from 'google-spreadsheet'

export default async function (request: NextApiRequest, response: NextApiResponse) {  
  const doc = new GoogleSpreadsheet('1BdsSgMeU4HeP-OP9kwX24ikUqaiGuDiit3moNb52Tdo')

  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY,
  })

  await doc.loadInfo()
  const sheet = doc.sheetsById["14575313"]

  switch (request.method) {
    case 'POST': {
      const { label, weight, note, column, row } = request.body

      const formatCell = cell => {
        const bordered: Border = {
          style: "SOLID",
          width: 1,
          color: {} as Color,
          colorStyle: {
            rgbColor: {} as Color,
            themeColor: null
          }
        }

        const textFormat = {
          fontFamily: "Arial",
          fontSize: 10
        }

        cell.borders = { top: bordered, bottom: bordered, left: bordered, right: bordered }
        cell.verticalAlignment = "MIDDLE"
        cell.horizontalAlignment = "CENTER"
        cell.textFormat = textFormat
      }

      await sheet.loadCells({
        startRowIndex: row, endRowIndex: row + 1, startColumnIndex: column, endColumnIndex: column + 2
      })

      const item = sheet.getCell(row, column)
      item.value = label
      if (note) item.note = note
      formatCell(item)
      item.save()


      const itemWeight = sheet.getCell(row, column + 1)
      itemWeight.value = weight
      formatCell(itemWeight)
      itemWeight.save()

      response.send({ ok: true })
      break
    }
    default:
      response.send({ message: 'Apenas método POST é permitido' })
  }  
}
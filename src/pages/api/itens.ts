import { NextApiRequest, NextApiResponse } from 'next'
import { GoogleSpreadsheet, Border, Color } from 'google-spreadsheet'

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
      const loadItems = async (col) => {
        await sheet.loadCells({ startRowIndex: 0, endRowIndex: 2, startColumnIndex: col, endColumnIndex: col+2 })
        const { value: cont } = sheet.getCell(0, col)
        if (cont !== null) {
          await sheet.loadCells({
            startRowIndex: 2,
            endRowIndex: (cont as number) + 3,
            startColumnIndex: col,
            endColumnIndex: col+2
          })
        }
      }
      
      let column = 0
      let repeat = false
      let storage: StorageInterface[] = []
      do {
        repeat = false
        await loadItems(column)
        const cel = sheet.getCell(1, column)
        if (cel.value) {
          let itens: ItemInterface[] = []
          let row = 2
          let loop = false
          do {
            loop = false
            const label = sheet.getCell(row, column).value as string
            if (label) {
              const note = sheet.getCell(row, column).note as string || null
              const weight = Number(sheet.getCell(row, column + 1).value) || 0
              const id = `${(new Date()).getTime()}${row}${column}`
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
    case 'PUT': {
      const { storages } = request.body

      storages?.forEach(async (storage: StorageInterface) => {
        const length = storage.itens.length
        const col = storage.column
        await sheet.loadCells({
          startRowIndex: 1,
          endRowIndex: length + 3,
          startColumnIndex: col,
          endColumnIndex: col+2
        })

        storage.itens.forEach((item, index) => {
          const cel = sheet.getCell(index + 2, col)
          cel.value = item.label
          cel.note = item.note
          formatCell(cel)
          cel.save()

          const celWeight = sheet.getCell(index + 2, col + 1)
          celWeight.value = item.weight
          formatCell(celWeight)
          celWeight.save()
        })

        const clearCellName = sheet.getCell(length + 2, col)
        clearCellName.value = ''
        clearCellName.note = ''
        clearCellName.clearAllFormatting()
        clearCellName.save()

        const clearCellWeight = sheet.getCell(length + 2, col + 1)
        clearCellWeight.value = ''
        clearCellWeight.note = ''
        clearCellWeight.clearAllFormatting()
        clearCellWeight.save()
      })
    
      response.send({ ok: true })
    }
    default:
      response.send({ message: 'Apenas métodos GET e PUT são permitidos' })
  }  
}
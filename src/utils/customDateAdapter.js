import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

// DateAdapter customizado para poder modificar los nombres de los días de la semana al catalán
export default function customDateAdapter (options) {
  const adapter = new AdapterDateFns(options)

  const constructUpperObject = (text) => ({ toUpperCase: () => text })
  const constructDayObject = (day) => ({ charAt: () => constructUpperObject(day) })

  return {
    ...adapter,
    getWeekdays () {
      const customWeekdays = ['dg', 'dl', 'dt', 'dm', 'dj', 'dv', 'ds']
      return customWeekdays.map((day) => constructDayObject(day))
    }
  }
}

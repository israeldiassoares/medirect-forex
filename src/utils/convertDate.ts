export function calculateDaysAgo(date = new Date(), days = 15) {
    const currentDate = date
    const daysAgo = currentDate.setDate(currentDate.getUTCDate() - days)
    const startDate = new Date(daysAgo)

    const year = startDate.getUTCFullYear()
    const month = startDate.getUTCMonth()+1
    const monthComplete = month < 10 ? `0${month}` : `${month}`

    const day = startDate.getUTCDate() 
    const dayComplete = day < 10 ? `0${day}` : `${day}`

    return `${year}-${monthComplete}-${dayComplete}`
}
export function formatDate(format = "yyyy-mm-dd", date = new Date()) {
    const currentDate = date

    const month = currentDate.getUTCMonth()+1
    const monthComplete = month < 10 ? `0${month}` : `${month}`

    const day = currentDate.getUTCDate()
    const dayComplete = day < 10 ? `0${day}` : `${day}`

    const dateFormat: any = {
        yyyy: currentDate.getUTCFullYear(),
        mm: monthComplete,
        dd: dayComplete
    }

    return format.replace(/yyyy|mm|dd/gi, matched => dateFormat[ matched ])
}
export function getHourMinuteAgo(minutesAgo = 15) {
    const currentDate = new Date()
    const timeAgo = currentDate.setMinutes(currentDate.getMinutes() - minutesAgo)

    const hourAgo = new Date(timeAgo)
    const hourComplete = hourAgo.getUTCHours() < 10 ? `0${hourAgo.getUTCHours()}` : hourAgo.getUTCHours()

    const minutes = hourAgo
    const minutesComplete = minutes.getMinutes() <= 9 ? String(`0${minutes.getMinutes()}`) : String(minutes.getMinutes())

    return `${hourComplete}:${minutesComplete}`
}
export function getHourMinuteNow() {
    const currentDate = new Date()
    const hour = currentDate.getUTCHours()
    const hourComplete = hour < 10 ? `0${hour}` : hour
    const minutes = currentDate.getMinutes()
    const minutesComplete = minutes <= 9 ? String(`0${minutes}`) : String(minutes)
    return `${hourComplete}:${minutesComplete}`
}
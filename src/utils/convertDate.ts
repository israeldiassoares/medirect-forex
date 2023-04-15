export function calculateDaysAgo(date = new Date(), days = 15) {
    const currentDate = date
    const daysAgo = currentDate.setDate(currentDate.getDate() - days)
    const startDate = new Date(daysAgo)

    const year = startDate.toLocaleString('default', { year: 'numeric' })
    const month = startDate.toLocaleString('default', { month: "2-digit" })
    const day = startDate.toLocaleString('default', { day: "2-digit" })
    return `${year}-${month}-${day}`
}

export function formatDate(format = "yyyy-mm-dd", date = new Date()) {
    const currentDate = date
    const dateFormat: any = {
        yyyy: currentDate.toLocaleString('default', { year: 'numeric' }),
        mm: currentDate.toLocaleString('default', { month: "2-digit" }),
        dd: currentDate.toLocaleString('default', { day: "2-digit" })
    }

    return format.replace(/yyyy|mm|dd/gi, matched => dateFormat[ matched ])
}
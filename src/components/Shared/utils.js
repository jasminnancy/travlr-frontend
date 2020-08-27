export const formatTime = (time) => {
  if (time) {
    let formattedTime
    let format = time.split(':')

    if (format[0] > 12) {
      formattedTime = `${format[0] - 12}:${format[1]} PM`
    } else {
      formattedTime = `${time} AM`
    }
    return formattedTime
  }
}

export const formatDate = (date) => {
  if (date) {
    let format = date.split('-')
    return `${format[1]/format[2]/format[0]}`
  }
}
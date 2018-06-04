export const advanceDate = (date, days) => {
  let year = Number(date.slice(0, 4))
  let month = Number(date.slice(5, 7))
  let day = Number(date.slice(8, 10))

  day += days

  if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
    if (day > 31) {
      day = day - 31
      month = month + 1
    }
  } else if (month === 2) {
    if (day > 28) {
      day = day - 28
      month = month + 1
    }
  } else {
    if (day > 30) {
      day = day - 30
      month = month + 1
    }
  }
  if (month === 13) {
    month = 1
    year = year + 1
  }
  return formatDate(year, month, day)
}

export const formatDate = (year, month, day) => {
  if (month < 10) {
    month = '0' + month
  }
  if (day < 10) {
    day = '0' + day
  }

  const newDate = (year + '-' + month + '-' + day)
  return newDate
}
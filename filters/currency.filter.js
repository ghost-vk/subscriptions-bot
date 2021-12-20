module.exports = function currencyFilter(amount, currency = 'USD') {
  const amountNum = Number(amount)
  if (!Number(amountNum)) {
    return false
  }
  switch (currency) {
    case 'USD' : {
      return `$${amountNum} 🇺🇸`
    }
  }
  return false
}
export function formatPriceText(priceInKes: number, currency: 'KES' | 'USD', rate: number | null): { primary: string; secondary: string } {
  const formatterKES = new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    maximumFractionDigits: 0,
  });

  const formatterUSD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });

  const primaryKes = formatterKES.format(priceInKes);
  
  if (currency === 'KES') {
    if (rate) {
      const approxUsd = formatterUSD.format(priceInKes * rate);
      return { primary: primaryKes, secondary: `≈ ${approxUsd}` };
    }
    return { primary: primaryKes, secondary: '' };
  } else {
    if (rate) {
      const primaryUsd = formatterUSD.format(priceInKes * rate);
      return { primary: primaryUsd, secondary: `≈ ${primaryKes}` };
    }
    // Fallback if USD selected but rate missing
    return { primary: primaryKes, secondary: '' };
  }
}

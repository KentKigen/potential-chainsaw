import { formatPriceText } from './formatPrice';

describe('formatPriceText', () => {
  it('formats KES correctly without rate', () => {
    const result = formatPriceText(1000000, 'KES', null);
    expect(result.primary).toMatch(/(Ksh|KES)/i);
    expect(result.primary).toContain('1,000,000');
    expect(result.secondary).toBe('');
  });

  it('formats KES with approx USD when rate is available', () => {
    const result = formatPriceText(1000000, 'KES', 0.0075);
    expect(result.primary).toMatch(/(Ksh|KES)/i);
    expect(result.primary).toContain('1,000,000');
    expect(result.secondary).toContain('≈');
    expect(result.secondary).toMatch(/(\$|USD)/i);
    expect(result.secondary).toContain('7,500');
  });

  it('formats USD correctly with approx KES', () => {
    const result = formatPriceText(1000000, 'USD', 0.0075);
    expect(result.primary).toMatch(/(\$|USD)/i);
    expect(result.primary).toContain('7,500');
    expect(result.secondary).toContain('≈');
    expect(result.secondary).toMatch(/(Ksh|KES)/i);
    expect(result.secondary).toContain('1,000,000');
  });

  it('falls back to KES if USD requested but rate is null', () => {
    const result = formatPriceText(1000000, 'USD', null);
    expect(result.primary).toMatch(/(Ksh|KES)/i);
    expect(result.secondary).toBe('');
  });
});

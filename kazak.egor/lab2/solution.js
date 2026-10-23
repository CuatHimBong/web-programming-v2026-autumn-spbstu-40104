export function calculateExpression(expr) {
  let result = 0;

  // Разделяем выражение на слагаемые.
  const terms = expr.split('+');
  for (const term of terms) {
    let product = 1;
    const factors = term.split('*');

    // Внутри каждого слагаемого сначала выполняем умножение.
    for (const factor of factors) {
      product *= Number(factor);
    }

    result += product;
  }

  return result;
}

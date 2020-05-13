export const escapedRegexCharacters = /[\\.+=?!:[\](){}\-$*&|/]/g;
export const fuzzyFilter = (word: string, source: string, options = { typos: 1, minChars: 3 }) => {
  const expressions = [];
  const { typos = 1, minChars = 3 } = options;
  const trimmed = String(word).trim();
  const replaced = trimmed.replace(escapedRegexCharacters, '');
  const chopped = replaced.split('');
  if (replaced.length < typos + 1 || replaced.length < minChars) return true;
  if (!typos) return source.match(new RegExp(replaced, 'gi'));
  for (let index = 0; index < chopped.length; index += 1) {
    const parts = [...chopped];
    parts.splice(index, 1, `.{${typos}}`);
    expressions.push(parts.join(''));
  }
  const finalExpression = expressions.join('|');

  return source.match(new RegExp(finalExpression, 'gi'));
};

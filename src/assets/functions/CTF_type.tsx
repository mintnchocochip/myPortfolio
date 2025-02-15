const challengeTypes = [
  "Miscellaneous",
  "Forensics",
  "Web",
  "Binary",
  "Reversing",
  "Crypto",
  "OSINT",
];

export default function getTypesFromMask(mask: number) {
  const result: string[] = [];

  for (let i = 0; i < challengeTypes.length; i++) {
    if (mask & (1 << i)) {
      result.push(challengeTypes[i]);
    }
  }

  return result;
}

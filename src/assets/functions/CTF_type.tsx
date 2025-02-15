export default function CTF_type(num: number) {
  const types: string[] = ["Web", "OSINT", "Binary", "Reversing", "Forensics", "Cryptography", "Miscellaneous"];
  const binary: string = num.toString(2).padStart(7, '0');
  const type: string[] = [];
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === '1') {
      type.push(types[i]);
    }
  }

  return type;
}
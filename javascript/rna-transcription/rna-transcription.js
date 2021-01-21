const DNA_TO_RNA = {
  G: "C",
  C: "G",
  T: "A",
  A: "U"
}

export const toRna = (dnaStrand) => {
  return dnaStrand.split('').map(nucleotide => DNA_TO_RNA[nucleotide]).join('');
};

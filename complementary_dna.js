function DNAStrand(dna){
    //your code here
    let tmp ='';
    for (let i=0; i<dna.length; i++){
      if(dna[i] == 'A'){
        tmp += dna[i].replace('A', 'T');
      }
      else if (dna[i] == 'T'){
        tmp += dna[i].replace('T', 'A');
      }
      else if (dna[i] == 'C'){
        tmp += dna[i].replace('C', 'G');
      }
      else if(dna[i] == 'G'){
        tmp += dna[i].replace('G', 'C');
      }
    }
    return tmp;
}
let adn = prompt();
DNAStrand(adn);
// DNAStrand(adn);
// console.log(DNAStrand(adn));
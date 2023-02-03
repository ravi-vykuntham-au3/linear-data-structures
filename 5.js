// read about the tower of hanoi algorithm. write a program to implement it

// The Tower of Hanoi is a classic problem in computer science that involves moving a stack of disks from one peg to another peg, with the constraint that a disk can only be moved if it is the topmost disk on the source peg and it can only be placed on top of a larger disk or an empty peg.

function towerOfHanoi(n, sourcePeg, auxiliaryPeg, targetPeg) {
    // Base case: If there's only one disk, move it from the source peg to the target peg
    if (n === 1) {
      console.log(`Move disk 1 from peg ${sourcePeg} to peg ${targetPeg}`);
      return;
    }
    
    // Move the top n-1 disks from the source peg to the auxiliary peg using the target peg as an intermediate
    towerOfHanoi(n - 1, sourcePeg, targetPeg, auxiliaryPeg);
    
    // Move the remaining disk from the source peg to the target peg
    console.log(`Move disk ${n} from peg ${sourcePeg} to peg ${targetPeg}`);
    
    // Move the n-1 disks from the auxiliary peg to the target peg using the source peg as an intermediate
    towerOfHanoi(n - 1, auxiliaryPeg, sourcePeg, targetPeg);
  }
  
  // Example usage
  towerOfHanoi(3, "A", "B", "C");
  
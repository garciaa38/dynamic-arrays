class DynamicArray {

  constructor(defaultSize=4) {
    this.data = new Array(defaultSize);
    this.capacity = defaultSize;
    this.length = 0;

  }

  read(index) {
    return this.data[index]
  }

  unshift(val) {

    // Your code here
    this.length++
    let curVal = val;
    let nextVal;
    for(let i = 0; i < this.data.length; i++) {
      let capturedVal = this.data[i]
      this.data[i] = curVal; //the current index is being replaced with curVal
      curVal = this.data[i] //modifying curVal
      
    }
  }

}


module.exports = DynamicArray;

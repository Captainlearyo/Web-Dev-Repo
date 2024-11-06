class DynamicArray {

  constructor(defaultSize=4) {
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(this.capacity);
    console.log(this.data);


  }

  read(index) {
    // Your code here
    console.log(this.data[index]);
    return this.data[index]
  }

  unshift(val) {
    // Your code here
    for (let i = this.length; i > 0; i--) {
      console.log(this.data[i]);
      this.data[i] = this.data[i-1]
      console.log(this.data[i]);
    }
    this.data[0] = val
    this.length ++
    console.log(this.data);
    return this.length
  }

}


module.exports = DynamicArray;

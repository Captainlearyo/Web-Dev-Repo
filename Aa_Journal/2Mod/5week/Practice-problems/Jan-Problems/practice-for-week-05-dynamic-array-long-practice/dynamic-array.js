class DynamicArray {

  constructor(defaultSize = 4) {
    this.length = 0;
    this.capacity = defaultSize
    this.data = new Array(this.capacity)
  }

  read(index) {
    return(this.data[index])

  }


  push(val) {
    if(this.length >= this.capacity)this.resize()
   this.data[this.length] = val
   this.length++
   console.log( this.length);
  }


  pop() {
    if(!this.length) return undefined
    this.length--
   let val = this.data[this.length]
   this.data[this.length] = undefined
   return val
  }

  shift() {
    if(!this.length) return undefined
    let val = this.data[0]
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1]
    }
    this.length--
    return val
  }

  unshift(val) {
    if(this.length >= this.capacity)this.resize()
    this.length ++
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i-1]
    }

    this.data[0] = val
    return this.length
  }

  indexOf(val) {
    for (let i = 0; i < this.length + 1; i++) {
      if(this.data[i] == val)return i
  }
  return -1
}

  resize() {
    this.capacity *=2
    let newArr = new Array(this.capacity)
    for (let i = 0; i < this.length; i++) {
      newArr[i] = this.data[i]
    }
   this.data = newArr
  }

}


module.exports = DynamicArray;

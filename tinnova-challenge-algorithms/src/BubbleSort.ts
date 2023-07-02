export default class BubbleSort {
    constructor() {}
  
    sort(arr: Array<number>): Array<number> {
        let swapped: Boolean = false
        for(let i = 0; i < arr.length; i++) {
            swapped = false
            for(let j = 0; j < arr.length; j++) {
                if (arr[j] > arr[j+1]) {
                    let temp = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = temp 
                    swapped = true
                }
            }
            if (!swapped) break
        }
        return arr
    }
  }
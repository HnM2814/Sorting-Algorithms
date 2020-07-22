/*
    - The key idea is loop through the array for n-1 passes.
           no of passes = n-1
    - At every pass, loop through the array and compare adjacent elements
    - if element at i position is greater than element at i+1 position then
        swap those two elements
    - By doing so at every pass the max element bubbled up at it's respective position
        i.e at 1st pass largest element will bubble up at last position 
        then at 2nd pass 2nd largest element will bubble up at 2nd last position and so on
    - By doing so we can identify that at every pass no,
         that many elements ( no of paases ) are already sorted at the last positions
         so we do not need to make comparisions for those element at later pass
         so we can ommit those comparisions in inner comparision iterations
    - Also we found that in some cases we do not require all the passes
        so we can omit those passes by maintaining flag variable
        we can check in any pass if no swapping is done in the inner comparision iteration
        then we can break the pass loop and we are done

     Procedure:
        - start with outer loop which is basically for passes which is run for n-1 times 
            i.e n = no of elements in the array
        - Initialize flag variable isSwap = false to check if any swapping is done or not
        - Start another inner loop which is iteration for comparisions
            - it will run for n-1-i times as we identify that at every pass those number of elements are already sorted
        - In Inner loop 
            - check if current element > next element  
                - if yes than swap those two elements and set isSwap = true
                - if not don't do anything
        - After inner loop completed,
            - check if isSwap 
                - if isSwap = true then it means swapping is done and there are some elements which yet to be sorted
                - if isSwap = true then it means swapping is not done and all the elements are sorted so break the outer loop
      
     Time Complexicity:
        - Best Case ( if array is already sorted ): we need only one pass and isSwap will be false and inner loop will run for n-1 times
            so it will be O(n)
        - Worst/Average Case ( i.e if array is in descending order ): it will be O(n2)
*/

class BubbleSort {
    constructor(arr = []){
        this.arr = arr;
        this.length = this.arr.length;
    }

    sort(){
        if(this.arr && Array.isArray(this.arr) && this.length > 0){

            for(let j = 0; j < this.length-1; j++){ 
                
                let isSwap = false;
                for(let i = 0; i < this.length-1-j; i++){             
                   
                    if(this.arr[i] > this.arr[i+1]){
                        this.swap(i, i+1);
                        isSwap = true;
                    }
                }

                if(isSwap === false){
                    break;
                }
            }
        }
    }

    swap(i , j){
        let temp = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = temp;
    }

    print(){
        console.log(this.arr);
    }
};

{
    let bSort = new BubbleSort([2, 7, 4, 1, 5, 3]);
    bSort.sort();
    bSort.print();
}

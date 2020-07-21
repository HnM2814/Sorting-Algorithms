/*
    - The key idea is to devide array into two list
        - Sorted list
        - Unsorted list
    - Sorted loop will run from right to left
    - Unsorted loop which will be act as outer loop from left to right


    Procedure: 
        - Consider array[0] with sorted list because if there is only one element is in array then it is already sorted
        - Start with outer loop from i = 1 to n-1 index
        - Save the first element of outer loop to temp variable i.e temp = array[i]
        - Initialize a variable j with first element index - 1 i.e j = i - 1;
        - start while loop wich satisfy two condition
            - j can run till 0 i.e j >= 0
            - a[j] must be greater than temp i.e. a[j] > temp
        - store element at j to j+1 i.e array[j+1] = array[j]
        - Once while condition terminated
            - save temp variable to j+1 index i.e. array[j+1] = temp

     Time Complexicity:
        - Best Case ( For already sorted array ) = O(n)
        - Worst/Avg Case = O(n2)
    
*/

class InsertionSort{
    constructor(arr = []){
        this.arr = arr;
        this.length = arr.length;
    }

    sort(){
        if(this.arr && Array.isArray(this.arr) && this.length > 0){
            for(let i = 1; i < this.length; i++){
                let temp = this.arr[i];
                let j = i-1;
                
                while(j >= 0 && this.arr[j] > temp){
                    this.arr[j+1] = this.arr[j];                    
                    j--;
                }

                this.arr[j+1] = temp;
            }
        }
    }

    print(){
        console.log(this.arr);
    }
}

{
    const iSort = new InsertionSort([5,4,10,1,6,2]);
    iSort.sort();
    iSort.print();
}
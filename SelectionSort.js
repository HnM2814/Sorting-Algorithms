/*
    - The idea will be devide the array into two list just like insertion sort
        - Sorted list
        - Unsorted list
    - But here we will have sorted list as empty
    - Now from unsorted sub list we will find min element
    - After that we will swap this min element with starting element of unsorted list
    - Now this the elements placed at the begging will be consider as sorted list
    - This list of sorted list will expand till there is no element in unsorted list

    Procedure:
    - Start main loop from 0 to n-1 ( which will be considered as pass )
        no of passes = length of the array - 1
    - now we need to find the min from the unsorted list 
        - consider 1st eleemnt in unsorted list as min
        - compare this min with all the elements in unsorted list and find out the min element
        - for this store i to min i.e min = i
    - now take another loop which will be run from j = i+1 to length of the array
    - now check if element at j-th position < element at min-th position
    - if so save j as min i.e min = j
    - once this inner loop is over we will have min with position of Min element in the array
    - compare this min with current i and if they both are not eaual that means 
        - element at i position > element at min position
        - so swap those two elements
        
    Time Comlexicity: O(n2)
*/

class SelectionSort{
    constructor(arr = []){
        this.arr = arr;
        this.length = this.arr.length;
    }

    sort(){
        if(this.arr && Array.isArray(this.arr) && this.length > 0){
            for(let i = 0; i < this.length-1; i++){
                let min = i;

                for(let j = i + 1; j < this.length; j++){
                    if(this.arr[j] < this.arr[min]){
                        min = j;
                    }
                }

                if(i !== min){
                    this.swap(i, min);
                }
            }
        }
    }

    swap(posA, posB){
        let temp = this.arr[posA];
        this.arr[posA] = this.arr[posB];
        this.arr[posB] = temp;
    }

    print(){
        console.log(this.arr);
    }
}

{
    const sSort = new SelectionSort([2,7,4,3,1]);
    sSort.sort();
    sSort.print();
}

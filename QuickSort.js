/**
    Basic key idea in quick sort is to make partion.
    we can make partion such that 
            - all the elements < pivot element will at left side of the pivot element
            - all the elements > pivot element will at right side of the pivot element
    In this situation pivot can be said at right/proper position in the array

    Partition Procedure
     1) Select Pivot 
            - pivot can be first element of the array
            - or last element of the array.
            - or take median of array length and element at that position 
     2). define lower bound and upper bound
            - start with 0 as lower bound and length-1 as upper bound 
     3). define start and end index to make partition
     4). do following till start < end
            - Increment start until element at start position i.e array[start] <= pivot that means stop incementing start if element at start position i.e array[start] > pivot
            - Decrement end until element at end position i.e array[end] > pivot that means stop incementing start if element at end position i.e array[end] <= pivot
            - now check if start < end or not
                - if start < end then swap elements at start and end position i.e. swap(array[start],array[end])
                - is start > end then swap elements at lower bound and end position i.e. swap(array[lb],array[end]), and return the end position
            - By now initial pivot will be its right/proper so we do not need to sort it
      5). Now use returned to again sort the array but this time as we already made two partition we just need to sort and make partition for 
            - elements from 0 index to loc-1 index
            - elemnts for loc+1 index to ub index


      Time Complexicity: 
      In worst case we need to go with all the elements so it will be O(n2)
      In avg/best case we will have O(n log n)
*/

class QuickSort{
    constructor(arr){
    }

    sort(arr, lb, ub){
        if(lb < ub){
            let loc = this.partition(arr, lb, ub);

            this.sort(arr, lb, loc-1);
            this.sort(arr, loc+1, ub);
        }
    }

    partition(arr, lb, ub){
        let pivot = arr[lb];
        let start = lb;
        let end = ub;

        while(start < end){
            while(arr[start] <= pivot){
                start++;
            }

            while(arr[end] > pivot){
                end--;
            }

            if(start < end){
                this.swap(arr, start, end)
            }
        }

        this.swap(arr, lb, end);

        return end;
    }

    swap(arr, posA, posB){
        let temp = arr[posA];
        arr[posA] = arr[posB];
        arr[posB] = temp;
    }
}

const qSort = new QuickSort();
let array = [7,6,10,5,9,2,1,15,7];
qSort.sort(array, 0, array.length-1);

def qsort(array):
 
    less = []
    more = []
    pivotlist = []
    if len(array) <= 1:
        return array
    else :
        for i in array:
            pivot = array[0]
            if i > pivot:
                less.append(i)

            elif i < pivot:
                more.append(i)
            else :
                pivotlist.append(i)

    less = qsort(less)
    more = qsort(more)
    return less+pivotlist+more

print(qsort([1,3,5,7,9,2,4,6,8,10]))
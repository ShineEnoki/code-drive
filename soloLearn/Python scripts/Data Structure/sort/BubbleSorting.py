def Bsort(array):
    for num in range(len(array)-1,0,-1):
        for i in range(num):
            if array[i] > array[i+1]:
                temp=array[i]
                array[i]= array[i+1]
                array[i+1] = temp
    return array

print(Bsort([1,2,3,4,5,65,6,7,8,9,55]))
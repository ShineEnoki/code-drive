def shell_sort(array):
    gap = len(array)//2
    while gap > 0 :
        for i in range(gap,len(array)):
            value = array[i]
            j=i
            while j >= gap and array[j-gap] >value :
                array [j]= array [j-gap]
                j-=gap
            array [j]= value
        gap//=2
    return array

print(shell_sort([1,2,3565,455,458,21,4,54,7,5,82,4]))
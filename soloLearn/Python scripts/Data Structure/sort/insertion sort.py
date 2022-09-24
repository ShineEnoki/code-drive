def insersort(array):
    for i in range(1,len(array)):
        e = array[i]
        j=i
        while j>0 and array[j-1] >e  :
            array[j] =array[j-1]
            j=j-1

        array [j] =e
    return array

print(insersort([9,45,54,252,4,5,75,45,47,54]))
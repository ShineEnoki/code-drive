def sesort(array):
    for num in range(len(array)):
        pos_of_min=num
        for loc in range(num,len(array)):
            if array[loc] < array[pos_of_min]:
                pos_of_min = loc
                temp = array[num]
                array[num]=array[pos_of_min]
                array[pos_of_min]=temp
    return array


print(sesort([1,554,54185,656,245,6565,2,5,546,455]))
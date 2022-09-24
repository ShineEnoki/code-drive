def sort(array):
    exchange = True
    num = len(array)-1
    while num > 0 and exchange:
        exchange = False
        for i in range(num):
            if array [i] > array [i+1]:
                exchange = True
                temp = array[i]
                array[i]=array [i+1]
                array[i+1]=temp

        num = num -1
    return array

print(sort([1,2,3,4,5,65,6,7,8,9,55]))
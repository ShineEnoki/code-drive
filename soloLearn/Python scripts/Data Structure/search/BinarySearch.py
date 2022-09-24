def Bsearch(array,item):
    first = 0
    last  = len(array)-1
    while first <= last :
        mid =(first + last)//2
        mid_value = array[mid]
        if mid_value == item:
            return True
        else:
            if mid_value < item:
                mid=mid+1
            else :
                last = mid -1
    return False


print(Bsearch([1,2,3,4,5,6,7,8,9],5))

def Bsearch(array,item):
    if len(array) == 1:
        return False
    
    mid=len(array)//2
    mid_value = array[mid]
    if mid_value == item:
        return True
    else:
        if mid_value < item:
            return Bsearch(array[mid:],item)

        else :
            return Bsearch(array[:mid],item)

print ( Bsearch ( [1,2,3,4,5,6,7,8,9,10],11))
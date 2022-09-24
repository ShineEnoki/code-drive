def map(left,right):
    result = []
    left_index,right_index = 0,0
    while left_index < len(left) and right_index  < len(right):
        if left[left_index] <= right[right_index]:
            result.append(left[left_index])
            left_index = left_index+1
        else:
            result.append(right[right_index])
            right_index = right_index+1

    if left_index <len(left):
        result.extend(left[left_index:])
        

    
    else:
         result.extend(right[right_index:])

    
    return result

def mergesort(w):
    if len(w) < 2:
        return w
    else:
        mid = len(w)//2
    return map(mergesort(w[:mid]),mergesort(w[mid:]))

print(mergesort([1,3,5,7,9,2,4,6,8,10]))


                                                               #array ထဲကို array ထည့်တဲ့အခါ
                                                               #append() ဆိုရင် array လိုက်ကြီးထည့်
                                                               #extend() ဆိုရင် index ဘဲ ထည့်တယ်

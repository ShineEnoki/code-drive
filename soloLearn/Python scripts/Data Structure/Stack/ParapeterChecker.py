from multiprocessing import Condition
from stack import Stack
def pChecker(ss): #ss= symbol string
    s=Stack()
    
    balance = True
    index = 0
    while index < len(ss) and balance == True:
        symbol = ss[index]
        if symbol == "(":
            s.push(symbol)
            print(s.peek())
        else:
            if s.is_empty():
                balance == False
            else:
                s.pop()
                
                
        
        index=index+1
    
    if balance == True and s.is_empty():
        return True
    else:
        return False

    
print(pChecker('((()))'))
print(pChecker('((())'))





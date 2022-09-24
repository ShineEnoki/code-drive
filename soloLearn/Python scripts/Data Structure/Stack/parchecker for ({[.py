from stack import Stack
        


def pChecker(ss):
    s=Stack()
    b == True
    index = 0
    while index <  len(ss) and b:
        symbol = ss[index]
        if symbol in "([{":
            s.push(symbol)
        else:
            if s.is_empty():
                b = False
            else:
                top = s.pop()
                if not matches(top,symbol):
                    b = False
    index = index +1

    if b and s.is_empty():
        return True
    else:
        return False
def matches(open,close):
    open = "([{"
    close = ")]}"
    return open.index(open) == close.index(close)

print(pChecker('{{([][])}()}'))
print(pChecker('[{()]'))

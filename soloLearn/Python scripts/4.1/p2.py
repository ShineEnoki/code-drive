class Stack:
    def __init__(self):
        self.items = []
    def is_empty(self):
        return self.items == []
    def push(self, item):
        self.items.append(item)
    def pop(self):
        return self.items.pop()
    def peek(self):
        return self.items[len(self.items) - 1]
    def size(self):
        return len(self.items) #function name က(push တို့ peek တို့က) အရေးမပါဘူး
    
def d16(dn):         
    s=Stack()        
    while dn > 0:
        x = dn % 16
        if x < 10:
            s.push(x)
        if x == 10:
            s.push('A')
        if x == 11:
            s.push('B')
        if x == 12:
            s.push('C')
        if x == 13:
            s.push('D')
        if x == 14:
            s.push('E')
        if x == 15:
            s.push('F')
        
        dn = dn // 16
    bs = " "       # bs = binary string
    while not s.is_empty():
        bs = bs + str(s.pop())
    return bs

print(d16(668))
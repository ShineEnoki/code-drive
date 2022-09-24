from node import Node
class UnorderedList:
    def __init__(self):
        self.head = None

    def is_empty(self):
        return self.head == None

    def add(self,item):
        temp = Node(item)
        temp.next=self.head
        self.head = temp

    def size(self):
        current = self.head
        count = 0
        while current != None:
            count = count + 1
            current = current.get_next()
        return count
        
    def search(self,item):
        current = self.head
        found = False
        while current != None and not found:
            if current.get_data() == item:
                found = True
            else:
                current = current.get_next()
        return found

    def remove(self,item) :
        current = self.head
        previous = None
        found = False
        while current != None and not found:
            if current.get_data() == item:
                found = True
            else:
                previous = current
                current = current.get_next()
        if found :
            if previous == None:
                self.head = current.get_next()
            else:
                previous.set_next(current.get_next())
    
mylist = UnorderedList()
mylist.add(3)
mylist.add(31)
mylist.add(71)
mylist.add(10)
mylist.add(5)
mylist.add(1)
print(mylist.size())
print(mylist.search(10))
print(mylist.search(12))
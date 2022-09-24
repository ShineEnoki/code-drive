class Btree:
    def __repr__(self):
        return "Binary Tree key is " +self . key

    def __init__(self,root):
        self.key = root
        self.left_child =  None
        self.right_child = None

    def insert_left(self,new_node):
        if self.left_child == None:
            self.left_child = Btree(new_node)
        else:
            t = Btree(new_node)
            t.left_child = self.left_child
            self.left_child = t

    def insert_right(self,new_node):
        if self.right_child == None:
            self.right_child = Btree(new_node)
        else:
            t = Btree(new_node)
            t.right_child = self.right_child
            self.right_child = t

    def get_left_child(self):
        return self.left_child

    def get_right_child(self):
        return self.right_child

    def set_root_vlaue(self,obj):
        self.key = obj

    def get_root_value(self):
        return self.key

    def search(self,value):
        if self != None:
            if self.get_left_child() != None:
                if self.get_left_child().search(value):
                    return True
            if self.get_root_value() == value:
                return True
            if self.get_right_child() != None:
                if self.get_right_child(). search(value):
                    return True

            return False

r=Btree("A")
r.insert_left("B")
r.insert_right("C")

b = r.get_left_child()
b.insert_left('D')
b.insert_right('E')

c=r.get_right_child()
c.insert_left('F')
c.insert_right('G')

print(r.search('C'))



    

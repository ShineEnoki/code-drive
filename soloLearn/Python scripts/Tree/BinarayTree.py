from msilib.schema import Class
from ntpath import join


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

    def postorder(self):
        if self != None:
            if self.get_left_child() != None:
                self.get_left_child().postorder()
            if self.get_right_child() != None:
                self.get_right_child().postorder()
            print (self.get_root_value( ))

    def inorder (self):
        if self != None:
            if self.get_left_child() != None:
                self.get_left_child().inorder()
            print(self.get_root_value())
            if self.get_right_child() != None:
                self.get_right_child().inorder()

    
    def preorder (self):
        if self != None:
            print(self.get_root_value())
            if self.get_left_child() != None:
                self.get_left_child().preorder()
            if self.get_right_child() != None:
                self.get_right_child().preorder()

    def bfs(self):
        thislevel = [self]
        while thislevel:
            nextlevel = []
            level = []
            for n in thislevel:
                level.append(str(n.get_root_value()))
                if n.get_left_child() != None:
                    nextlevel.append(n.get_left_child())
                if n.get_right_child() != None:
                    nextlevel.append(n.get_right_child())
            print(",".join(level))
            thislevel = nextlevel







class Student:
    def __init__(self,name,roll_no):
        self.name=name
        self.roll_no=roll_no

    def get_name(self):
        print(self.name)
student1=Student("bhavya",12)
student2=Student("abs",34)

student1.get_name()
class LanguageStudent : pass

  
        
  
class LanguageTeacher : pass

#To see the output, uncomment the lines below:
teacher = LanguageTeacher()
teacher.add_language('English')
student = LanguageStudent()
teacher.teach(student, 'English')
print(student.languages)
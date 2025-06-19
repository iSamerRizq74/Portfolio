from django.shortcuts import render, get_object_or_404, redirect
from .models import Student
from .forms import StudentForm  

def index(request):
    students = Student.objects.all()
    context = {
        'students': students,
        # 'courses': ...,
        # 'instructors': ...,
        # 'student_courses': ...
    }
    return render(request, 'course/index.html', context)

def show_student(request, student_id):
    student = get_object_or_404(Student, id=student_id)
    return render(request, 'course/show_student.html', {'student': student})

def delete_student(request, student_id):
    student = get_object_or_404(Student, id=student_id)
    student.delete()
    return redirect('index')

def add_student(request):
    if request.method == 'POST':
        form = StudentForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('index')
    else:
        form = StudentForm()
    return render(request, 'course/add_student.html', {'form': form})

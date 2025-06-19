from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('student/<int:student_id>/', views.show_student, name='show_student'),
    path('student/delete/<int:student_id>/', views.delete_student, name='delete_student'),
    path('student/add/', views.add_student, name='add_student'),
]

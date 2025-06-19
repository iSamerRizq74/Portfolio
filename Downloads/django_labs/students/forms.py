from django import forms

class StudentForm(forms.Form):
    name = forms.CharField(label="Student Name", max_length=100)
    level = forms.CharField(label="Level", max_length=50)


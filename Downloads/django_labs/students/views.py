from django.http import JsonResponse, HttpResponseNotFound
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Student

@csrf_exempt
def student_list_create(request):
    if request.method == 'GET':
        students = Student.objects.all()
        data = [{"id": s.id, "name": s.name, "level": s.level} for s in students]
        return JsonResponse(data, safe=False)
    
    elif request.method == 'POST':
        body = json.loads(request.body.decode('utf-8'))
        student = Student.objects.create(name=body['name'], level=body['level'])
        return JsonResponse({'id': student.id, 'name': student.name, 'level': student.level})
    

@csrf_exempt
def student_detail(request, student_id):
    try:
        student = Student.objects.get(id=student_id)
    except Student.DoesNotExist:
        return HttpResponseNotFound("Student not found")

    if request.method == 'GET':
        return JsonResponse({'id': student.id, 'name': student.name, 'level': student.level})

    elif request.method == 'PUT':
        body = json.loads(request.body.decode('utf-8'))
        student.name = body.get('name', student.name)
        student.level = body.get('level', student.level)
        student.save()
        return JsonResponse({'id': student.id, 'name': student.name, 'level': student.level})

    elif request.method == 'DELETE':
        student.delete()
        return JsonResponse({'message': 'Student deleted successfully'})

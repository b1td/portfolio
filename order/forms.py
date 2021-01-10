from django import forms
from .models import *

class OrderForm(forms.Form):
    name = forms.CharField(required=False, max_length=200, widget = forms.TextInput(attrs={'type': 'text', 'placeholder': 'Имя', 'required':'true'}))
    phone = forms.CharField(required=False, max_length=200, widget = forms.TextInput(attrs={'type': 'text', 'placeholder': 'Телефон', 'required':'true' }))
    email = forms.CharField(max_length=200, widget = forms.TextInput(attrs={'type': 'text', 'placeholder': 'E-mail', 'name': 'email', }))
    description = forms.CharField(required=False, max_length=800, widget = forms.Textarea(attrs={'placeholder': 'Ваш вопрос', 'name': 'comment', 'cols': '15', 'rows': '5', }))
    # Поле для капчи


class OrderForm2(forms.ModelForm):
    class Meta:
        model = Order
        fields = ['name', 'phone', 'email', 'description']

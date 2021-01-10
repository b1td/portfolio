from django.shortcuts import render, redirect
from django.views.generic import View
from django.http import HttpResponseRedirect

from django.core.mail import send_mail, EmailMessage
from django.core import mail
from django.utils.html import strip_tags
from django.template.loader import render_to_string



from .models import *
from .forms import *

def order(request):
    if request.method == 'POST':
        form = OrderForm(request.POST)
        if form.is_valid():
            # Добавление в БД информации о запросе на продажу аккаунта
            name = form.cleaned_data["name"]
            phone = form.cleaned_data["phone"]
            email = form.cleaned_data["email"]
            description = form.cleaned_data["description"]
            newOrder = Order.objects.create(
                name = name,
                phone = phone,
                email = email,
                description = description
            )
            newOrder.save()
            # Отправка сообщения

            subject = 'New order'
            html_message = render_to_string('order_mail.html', {'name': newOrder.name, 'phone': newOrder.phone, 'email': newOrder.email, 'description': newOrder.description,})
            plain_message = strip_tags(html_message)
            from_email = 'From <info@it-akita.com>'
            to = 'info@it-akita.com'
            mail.send_mail(subject, plain_message, from_email, [
                           to], html_message=html_message)    




            # msg = EmailMessage(
            #     "New order from: newOrder.name", newOrder.name, 'info@it-akita.com', ['info@it-akita.com'])
            # msg.content_subtype = "html"
            # msg.send()

            return render(request, 'thanks.html', {})
        else:
            form = OrderForm()
            return render(request, 'contact-us.html', {'form': form, })
    else:
        form = OrderForm()
        return render(request, 'contact-us.html', {'form': form,})



class FeedBackView(View):
    def post(self, request):
        order_form = OrderForm2(request.POST)
                # check whether it's valid:
        if order_form.is_valid():
            name = order_form.cleaned_data["name"]
            phone = order_form.cleaned_data["phone"]
            email = order_form.cleaned_data["email"]
            description = order_form.cleaned_data["description"]
            newOrder = Order.objects.create(
                name = name,
                phone = phone,
                email = email,
                description = description
            )
            newOrder.save()
                    # process the data in form.cleaned_data as required
                    # ...
                    # redirect to a new URL:

            # order_form.save()

            # Отправка сообщения

            # Отправка сообщения

            subject = 'New order'
            html_message = render_to_string('order_mail.html', {'name': newOrder.name, 'phone': newOrder.phone, 'email': newOrder.email, 'description': newOrder.description,})
            plain_message = strip_tags(html_message)
            from_email = 'From <info@it-akita.com>'
            to = 'info@it-akita.com'
            mail.send_mail(subject, plain_message, from_email, [
                           to], html_message=html_message)   
            # plain_message = strip_tags(order_form)
            # msg = EmailMessage(
            #      "New order:", plain_message, 'info@it-akita.com', ['info@it-akita.com'])
            # msg.content_subtype = "html"
            # msg.send()
        return render(request, 'thanks.html', {})
        

        # if a GET (or any other method) we'll create a blank form
        # else:
        #     order_form = OrderForm()

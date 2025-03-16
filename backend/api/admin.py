from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser, Property, ChatMessage, RentalAgreement, Payment

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ('username', 'email', 'role', 'is_staff')

admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(Property)
admin.site.register(ChatMessage)
admin.site.register(RentalAgreement)
admin.site.register(Payment)

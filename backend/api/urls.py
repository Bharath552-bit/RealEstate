from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    PropertyViewSet, register, test_connection,
    ChatMessageViewSet, RentalAgreementViewSet, PaymentViewSet, recommended_properties
)

router = DefaultRouter()
router.register(r'properties', PropertyViewSet, basename='property')
router.register(r'chat', ChatMessageViewSet, basename='chat')
router.register(r'rental-agreements', RentalAgreementViewSet, basename='rentalagreement')
router.register(r'payments', PaymentViewSet, basename='payment')

urlpatterns = [
    path('', include(router.urls)),
    path('register/', register, name='register'),
    path('test/', test_connection, name='test_connection'),
    path('recommendations/', recommended_properties, name='recommendations'),
]

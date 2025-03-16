from rest_framework import viewsets, permissions, status
from rest_framework.decorators import api_view, action
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from .models import Property, ChatMessage, RentalAgreement, Payment
from .serializers import (
    PropertySerializer, RegisterSerializer, UserSerializer, 
    ChatMessageSerializer, RentalAgreementSerializer, PaymentSerializer
)

User = get_user_model()

@api_view(['GET'])
def test_connection(request):
    return Response({'message': 'Hello from Django!'}, status=200)

@api_view(['POST'])
def register(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        return Response(UserSerializer(user).data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PropertyViewSet(viewsets.ModelViewSet):
    queryset = Property.objects.all().order_by('-created_at')
    serializer_class = PropertySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    @action(detail=False, methods=['get'])
    def search(self, request):
        queryset = self.get_queryset()
        location = request.query_params.get('location')
        min_price = request.query_params.get('min_price')
        max_price = request.query_params.get('max_price')
        property_type = request.query_params.get('property_type')
        if location:
            queryset = queryset.filter(location__icontains=location)
        if min_price:
            queryset = queryset.filter(price__gte=min_price)
        if max_price:
            queryset = queryset.filter(price__lte=max_price)
        if property_type:
            queryset = queryset.filter(property_type=property_type)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

class ChatMessageViewSet(viewsets.ModelViewSet):
    queryset = ChatMessage.objects.all().order_by('-timestamp')
    serializer_class = ChatMessageSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(sender=self.request.user)

class RentalAgreementViewSet(viewsets.ModelViewSet):
    queryset = RentalAgreement.objects.all().order_by('-signed_at')
    serializer_class = RentalAgreementSerializer
    permission_classes = [permissions.IsAuthenticated]

class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all().order_by('-created_at')
    serializer_class = PaymentSerializer
    permission_classes = [permissions.IsAuthenticated]

# Stub endpoint for AI-based property recommendations
@api_view(['GET'])
def recommended_properties(request):
    properties = Property.objects.all().order_by('-created_at')[:5]
    serializer = PropertySerializer(properties, many=True)
    return Response(serializer.data)

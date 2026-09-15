from django.http import JsonResponse
from django.shortcuts import render


def marketing_chart_data(request):
    data = [
        {
            "date": "2026-06-10",
            "cost": 0,
            "cpa": 0,
            "roi": 400,
            "conversions": 0,
        },
        {
            "date": "2026-06-11",
            "cost": 20,
            "cpa": 0.30,
            "roi": 150,
            "conversions": 20,
        },
        {
            "date": "2026-06-12",
            "cost": 40,
            "cpa": 0.50,
            "roi": 70,
            "conversions": 35,
        },
        {
            "date": "2026-06-13",
            "cost": 55,
            "cpa": 0.65,
            "roi": 20,
            "conversions": 65,
        },
        {
            "date": "2026-06-14",
            "cost": 63.75,
            "cpa": 0.71,
            "roi": 357.25,
            "conversions": 90,
        },
    ]

    return JsonResponse({
        "data": data,
    })

def marketing_chart(request):
    return render(
        request,
        "chart.html",
    )

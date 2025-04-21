<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class WeatherController extends Controller
{
    public function getWeather(Request $request)
    {
        $city = $request->query('city');

        if (!$city) {
            return response()->json(['error' => 'City parameter is required'], 400);
        }

        $apiKey = env('OPENWEATHERMAP_API_KEY');
        $url = "https://api.openweathermap.org/data/2.5/weather";

        $response = Http::get($url, [
            'q' => $city,
            'appid' => $apiKey,
            'units' => 'metric',
        ]);

        if ($response->failed()) {
            return response()->json(['error' => 'Unable to fetch weather data'], 500);
        }

        return response()->json($response->json());
    }
}

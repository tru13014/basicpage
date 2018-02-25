var Windchill():
    T = float(input("Enter the temperature in Fahrenheit."'\n'))

    V = float(input("Enter the wind speed."'\n'))

    windchill = 35.74 + (0.6215*T) - 35.75*(V**0.16) + 0.4275*T*(V**0.16)
    
Windchill()
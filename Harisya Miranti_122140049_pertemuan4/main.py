# Cara pertama: import seluruh modul
import math_operations

# Menggunakan fungsi geometri
print("=== Perhitungan Geometri ===")
sisi = 5
print(f"Luas persegi: {math_operations.luas_persegi(sisi)}")
print(f"Keliling persegi: {math_operations.keliling_persegi(sisi)}")

panjang, lebar = 8, 4
print(f"Luas persegi panjang: {math_operations.luas_persegi_panjang(panjang, lebar)}")
print(f"Keliling persegi panjang: {math_operations.keliling_persegi_panjang(panjang, lebar)}")

radius = 7
print(f"Luas lingkaran: {math_operations.luas_lingkaran(radius):.2f}")
print(f"Keliling lingkaran: {math_operations.keliling_lingkaran(radius):.2f}")

# Cara kedua: import fungsi spesifik
from math_operations import celsius_ke_fahrenheit, celsius_ke_kelvin

# Menggunakan fungsi konversi suhu
print("\n=== Konversi Suhu ===")
c = 25
print(f"{c}°C = {celsius_ke_fahrenheit(c):.2f}°F")
print(f"{c}°C = {celsius_ke_kelvin(c):.2f} K")

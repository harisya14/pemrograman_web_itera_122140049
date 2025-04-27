# List data mahasiswa
mahasiswa = [
    {"nama": "Budi", "nim": "2023001", "nilai_uts": 80, "nilai_uas": 85, "nilai_tugas": 90},
    {"nama": "Ani", "nim": "2023002", "nilai_uts": 70, "nilai_uas": 65, "nilai_tugas": 75},
    {"nama": "Citra", "nim": "2023003", "nilai_uts": 60, "nilai_uas": 55, "nilai_tugas": 65},
    {"nama": "Doni", "nim": "2023004", "nilai_uts": 50, "nilai_uas": 45, "nilai_tugas": 55},
    {"nama": "Eka", "nim": "2023005", "nilai_uts": 90, "nilai_uas": 95, "nilai_tugas": 85}
]

# Hitung nilai akhir dan grade
for mhs in mahasiswa:
    nilai_akhir = 0.3 * mhs["nilai_uts"] + 0.4 * mhs["nilai_uas"] + 0.3 * mhs["nilai_tugas"]
    mhs["nilai_akhir"] = nilai_akhir

    if nilai_akhir >= 80:
        mhs["grade"] = "A"
    elif nilai_akhir >= 70:
        mhs["grade"] = "B"
    elif nilai_akhir >= 60:
        mhs["grade"] = "C"
    elif nilai_akhir >= 50:
        mhs["grade"] = "D"
    else:
        mhs["grade"] = "E"

# Tampilkan data dalam tabel
print("{:<10} {:<10} {:<10} {:<10} {:<10} {:<12} {:<6}".format(
    "Nama", "NIM", "UTS", "UAS", "Tugas", "Nilai Akhir", "Grade"
))
print("-" * 68)

for mhs in mahasiswa:
    print("{:<10} {:<10} {:<10} {:<10} {:<10} {:<12.2f} {:<6}".format(
        mhs["nama"], mhs["nim"], mhs["nilai_uts"], mhs["nilai_uas"],
        mhs["nilai_tugas"], mhs["nilai_akhir"], mhs["grade"]
    ))

# Cari mahasiswa dengan nilai tertinggi dan terendah
tertinggi = max(mahasiswa, key=lambda x: x["nilai_akhir"])
terendah = min(mahasiswa, key=lambda x: x["nilai_akhir"])

print("\nMahasiswa dengan nilai tertinggi:")
print(f"{tertinggi['nama']} ({tertinggi['nim']}) - {tertinggi['nilai_akhir']:.2f}")

print("\nMahasiswa dengan nilai terendah:")
print(f"{terendah['nama']} ({terendah['nim']}) - {terendah['nilai_akhir']:.2f}")

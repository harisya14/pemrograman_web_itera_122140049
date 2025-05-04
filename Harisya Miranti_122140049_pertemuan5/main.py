# main.py

from library.library import Library
from library.book import Book
from library.magazine import Magazine

def main():
    # Inisialisasi perpustakaan
    lib = Library()

    # Contoh penambahan buku
    b1 = Book(
        id="B001",
        title="Pemrograman Web Lanjut",
        publisher="IT Sumatera",
        year=2024,
        copies=5,
        author="Dr. Jane Smith",
        genre="Teknologi",
        pages=320
    )
    lib.add_item(b1)  # Encapsulation: menambah Book ke koleksi :contentReference[oaicite:0]{index=0}:contentReference[oaicite:1]{index=1}

    # Contoh penambahan majalah
    m1 = Magazine(
        id="M001",
        title="Magazine Tech Today",
        publisher="Sumatera Press",
        year=2025,
        copies=10,
        issue_number=7,
        month="Juli"
    )
    lib.add_item(m1)  # Encapsulation: menambah Magazine ke koleksi :contentReference[oaicite:2]{index=2}:contentReference[oaicite:3]{index=3}

    # Tampilkan semua item
    print("=== Daftar Seluruh Item ===")
    for item in lib.list_all():
        # Polymorphism: setiap item memanggil metode info() yang sesuai tipe-nya
        print(item.info())
    print()

    # Pencarian by title
    print("=== Hasil Pencarian: 'Tech' ===")
    hasil = lib.search_by_title("Tech")
    if hasil:
        for item in hasil:
            print(item.info())  # Polymorphism pada info()
    else:
        print("Tidak ada hasil untuk kata kunci 'Tech'.")
    print()

    # Demonstrasi peminjaman dan pengembalian
    print("=== Peminjaman Buku B001 ===")
    lib.borrow_item("B001")   # Memanggil borrow_item → is_available() & setter copies :contentReference[oaicite:4]{index=4}:contentReference[oaicite:5]{index=5}
    print()

    print("=== Pengembalian Buku B001 ===")
    lib.return_item("B001")   # Memanggil return_item → setter copies :contentReference[oaicite:6]{index=6}:contentReference[oaicite:7]{index=7}
    print()

    # Status akhir item B001
    print("=== Status Akhir B001 ===")
    item_b1 = lib.get_item("B001")
    if item_b1:
        print(item_b1.info())
    else:
        print("Item B001 tidak ditemukan.")

if __name__ == "__main__":
    main()

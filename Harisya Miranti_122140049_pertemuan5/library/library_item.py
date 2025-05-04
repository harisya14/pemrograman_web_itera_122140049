# library_item.py
from abc import ABC, abstractmethod

class LibraryItem(ABC):
    # Penggunaan Abstract Class:
    # - LibraryItem adalah kelas abstrak (ABC), tidak bisa diinstansiasi langsung.
    # - Subclass wajib mengimplementasikan metode abstrak jika ada.
    def __init__(self, id: str, title: str, publisher: str, year: int, copies: int):
        # Implementasi Encapsulation:
        # - Atribut privat diawali dengan single-underscore untuk menyembunyikan detail internal.
        self._id = id
        self._title = title
        self._publisher = publisher
        self._year = year
        self._copies = copies

    @property
    def id(self) -> str:
        """Encapsulation: akses read-only untuk ID item."""
        return self._id

    @property
    def title(self) -> str:
        """Encapsulation: akses read-only untuk judul item."""
        return self._title

    @property
    def publisher(self) -> str:
        """Encapsulation: akses read-only untuk penerbit."""
        return self._publisher

    @property
    def year(self) -> int:
        """Encapsulation: akses read-only untuk tahun terbit."""
        return self._year

    @property
    def copies(self) -> int:
        """Encapsulation: akses dan validasi jumlah salinan."""
        return self._copies

    @copies.setter
    def copies(self, value: int):
        if value < 0:
            raise ValueError("Number of copies cannot be negative.")
        self._copies = value

    def is_available(self) -> bool:
        """
        Polymorphism:
        - Metode ini dapat dipanggil pada objek Book, Magazine, atau subclass lain,
          tanpa perlu tahu tipe konkret-nya.
        """
        return self._copies > 0

    @abstractmethod
    def info(self) -> str:
        """
        Penggunaan Abstract Method:
        - Subclass wajib mengimplementasikan info() untuk menampilkan detail spesifik.
        """
        pass

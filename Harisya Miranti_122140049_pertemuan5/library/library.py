# library.py
from .library_item import LibraryItem

class Library:
    def __init__(self):
        # Encapsulation:
        # - Menyimpan koleksi item secara privat.
        self._items: dict[str, LibraryItem] = {}

    def add_item(self, item: LibraryItem) -> None:
        self._items[item.id] = item

    def remove_item(self, id: str) -> LibraryItem | None:
        return self._items.pop(id, None)

    def get_item(self, id: str) -> LibraryItem | None:
        return self._items.get(id)

    def search_by_title(self, keyword: str) -> list[LibraryItem]:
        return [
            item for item in self._items.values()
            if keyword.lower() in item.title.lower()
        ]

    def list_all(self) -> list[LibraryItem]:
        return list(self._items.values())

    def borrow_item(self, id: str) -> bool:
        """
        Polymorphism:
        - borrow_item memanggil is_available() dan info() pada LibraryItem,
          tetapi akan bekerja untuk Book maupun Magazine tanpa membedakan.
        """
        item = self.get_item(id)
        if not item:
            print("Item tidak ditemukan.")
            return False
        if item.is_available():  # Polymorphic call
            item.copies -= 1      # Encapsulation: setter copies memeriksa nilai valid
            print(f"Berhasil meminjam: {item.info()}")
            return True
        print(f"Maaf, '{item.title}' sedang tidak tersedia.")
        return False

    def return_item(self, id: str) -> bool:
        item = self.get_item(id)
        if not item:
            print("Item tidak ditemukan.")
            return False
        item.copies += 1  # Encapsulation: setter memastikan copies >= 0
        print(f"Berhasil mengembalikan: {item.info()}")
        return True

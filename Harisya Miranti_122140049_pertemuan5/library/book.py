# book.py
from .library_item import LibraryItem

class Book(LibraryItem):
    # Inheritance:
    # - Book mewarisi atribut dan metode dari LibraryItem.
    def __init__(
        self, id: str, title: str, publisher: str, year: int, copies: int,
        author: str, genre: str, pages: int
    ):
        super().__init__(id, title, publisher, year, copies)
        # Encapsulation:
        # - Atribut khusus Book juga disembunyikan dengan single-underscore.
        self._author = author
        self._genre = genre
        self._pages = pages

    @property
    def author(self) -> str:
        return self._author

    @property
    def genre(self) -> str:
        return self._genre

    @property
    def pages(self) -> int:
        return self._pages

    def info(self) -> str:
        """
        Polymorphism:
        - Implementasi info() khusus untuk Book.
        - Panggilan item.info() akan menghasilkan string yang sesuai tipe.
        """
        return (
            f"[Book] {self.title} by {self.author} "
            f"({self.year}) — Genre: {self.genre}, Pages: {self.pages} | "
            f"Available: {self.copies}"
        )
